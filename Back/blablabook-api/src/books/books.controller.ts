import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // @Post('import')
  // async create() {
  //   await this.booksService.getBooksFromGoogleApi();
  //   return { message: 'ça marche' };
  // }

  @Post('import')
  async create() {
    await this.booksService.getBooksFromOpenLibraryApi();
    return { message: 'ça marche avec Open Library' };
  }

  @Get('fetch-random')
  async findRandomBooks(@Query('userId') userId?: string) {
    return this.booksService.getRandomBooks(10, userId ? +userId : undefined);
  }

  @Get('fetch-popular-books')
  async findMostPopularBooks(@Query('userId') userId?: string) {
    return this.booksService.getMostPopularBooks(
      10,
      userId ? +userId : undefined,
    );
  }

  @Get('fetch-latest')
  async findLatestBooks(@Query('userId') userId?: string) {
    return this.booksService.getLatestBooks(10, userId ? +userId : undefined);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    return this.booksService.getBooks(userId ? +userId : undefined);
  }

  @Get('most-added-books')
  mostAddedBooks(
    @Query('take') take?: string,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
  ) {
    const n = take ? Number(take) : 10;
    return this.booksService.mostAddedBooks(
      Number.isFinite(n) ? Math.min(n, 10) : 10,
      userId,
    );
  }

  @Get('most-commented-books')
  mostCommentedBooks(
    @Query('take') take?: string,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
  ) {
    const n = take ? Number(take) : 10;
    return this.booksService.mostCommentedBooks(
      Number.isFinite(n) ? Math.min(n, 10) : 10,
      userId,
    );
  }

  @Get('search')
  searchBooks(
    @Query('q') query: string,
    @Query('page', new ParseIntPipe({ optional: true })) pageNumber?: number,
    @Query('size', new ParseIntPipe({ optional: true })) pageSize?: number,
    @Query('userId', new ParseIntPipe({ optional: true })) userId?: number,
  ) {
    return this.booksService.searchBooks(
      decodeURIComponent(query),
      pageNumber,
      pageSize,
      userId,
    );
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}
