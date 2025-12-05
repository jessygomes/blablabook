/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { catchError, firstValueFrom } from 'rxjs';
//import type { AxiosError } from 'axios';

interface GoogleBooksResponse {
  items: Array<{
    volumeInfo: {
      title: string;
      authors?: string;
      publisher?: string;
      pageCount?: number;
      categories?: string[];
      description?: string;
      industryIdentifiers?: Array<{
        type: string;
        identifier: string;
      }>;
      imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
      averageRating?: number;
    };
  }>;
}

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getBooksFromGoogleApi(): Promise<GoogleBooksResponse> {
    const apiKey = process.env.API_KEY;

    const { data } = await firstValueFrom(
      this.httpService
        .get<GoogleBooksResponse>(
          `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=${apiKey}`,
        )
        .pipe(
          catchError((error: any) => {
            const message = error?.message ?? 'Unknown error';
            throw new Error(`Failed to fetch books: ${message}`);
          }),
        ),
    );

    const items = data.items;
    for (const item of items) {
      const volumeInfo = item.volumeInfo;
      await this.prisma.book.create({
        data: {
          title: volumeInfo.title,
          page_count: volumeInfo.pageCount || 0,
          author: 'Auteur',
          category: volumeInfo.categories?.[0] || 'unknown',
          publishing_date: new Date(),
          summary: volumeInfo.description || null,
          publisher: volumeInfo.publisher || null,
          isbn: volumeInfo.industryIdentifiers?.[0]?.identifier || null,
          cover: volumeInfo.imageLinks?.thumbnail || null,
          averageRating: volumeInfo.averageRating || 0,
        },
      });
    }

    console.log('apiKey:', apiKey);
    console.log('data.items:', data.items);

    return data;
  }
  // create(createBookDto: CreateBookDto) {
  //   return 'This action adds a new book';
  // }

  // findAll() {
  //   return `This action returns all books`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
