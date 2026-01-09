/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { catchError, firstValueFrom, of } from 'rxjs';

/* Récupération des livres depuis l'API d'OpenLibrary. 
Récupérations des Work contenant la description, et l'auteur principal d'une oeuvre (le concept du livre)
Récupération des Editions contenant les informations sur le livre en question. 1 Work peut avoir plusieurs éditions. L'édition contient l'isbn, le nombre de page, l'éditeur, la couverture, etc.
Le doc = le résultat de la recherche. Il renvoie la key du worek et une liste d'edition_key nous on prend juste la première 
*/

interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  docs: OpenLibraryDoc[];
}

interface OpenLibraryDoc {
  key?: string;
  title?: string;
  edition_key?: string[];
  number_of_pages_median?: number;
  author_name?: string[];
  first_publish_year?: number;
  publish_date?: string[];
  publisher?: string[];
  isbn?: string[];
  cover_i?: number;
}

interface OpenLibraryEdition {
  title?: string;
  number_of_pages?: number;
  authors?: { key: string }[];
  publish_date?: string;
  publishers?: string[];
  isbn_10?: string[];
  isbn_13?: string[];
  // description peut être un objet ou une string
  description?: string | { value: string };
  // OPenLibrary peyt renvoyer soit des 'cover', soit des 'covers' donc pour y parer, on met les 2
  cover?: number[];
  covers?: number[];
}

interface OpenLibraryWork {
  description?: string | { value: string };
  excerpts?: { excerpt: string }[];
}

@Injectable()
export class BooksService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async getBooksFromOpenLibraryApi() {
    // 1. On ne demande à l'API de recherche que les champs dont on a VRAIMENT besoin
    const { data } = await firstValueFrom(
      this.httpService.get<OpenLibrarySearchResponse>(
        `https://openlibrary.org/search.json?q=language:fre AND isbn:[* TO *] AND number_of_pages_median:[1 TO *]&limit=150&fields=title,author_name,edition_key,cover_i,isbn,number_of_pages_median,key`,
      ),
    );

    const docs = (data.docs as OpenLibraryDoc[]) ?? [];
    for (const doc of docs) {
      // On ignore les livres qui n'ont pas d'édition sinon on ne pourra pas récupérer le détail du livre
      if (!doc.edition_key?.length) continue;
      try {
        // Définition de l'identifiant openlibrary pour l'édition
        const editionOlid = doc.edition_key[0];
        // Récupération des détails du livre via l'id de l'édition:
        const editionResponse = await firstValueFrom(
          this.httpService
            .get<OpenLibraryEdition>(
              `https://openlibrary.org/books/${editionOlid}.json`,
            )
            .pipe(catchError(() => of(null))),
        );

        const edition = editionResponse?.data as OpenLibraryEdition;
        if (!edition) continue;
        // Préparation des données :
        // Extraction de l'année de publication
        let pubDate: Date | null = null;
        const rawDate = edition.publish_date;
        if (rawDate) {
          const yearMatch = rawDate.match(/\d{4}/);
          if (yearMatch) {
            pubDate = new Date(parseInt(yearMatch[0]), 0, 1);
          }
        }
        // Récupération de l'isbn
        const isbn = edition.isbn_13?.[0] || edition.isbn_10?.[0];

        let summary: string | null = null;

        // Récupération du résumé
        if (!summary && doc.key) {
          const workResponse = await firstValueFrom(
            this.httpService
              .get<OpenLibraryWork>(`https://openlibrary.org${doc.key}.json`)
              .pipe(catchError(() => of(null))),
          );

          const work = workResponse?.data;
          if (work?.description) {
            summary =
              typeof work.description === 'object'
                ? work.description.value
                : work.description;
          }
          // Si pas de description dans le work on va voir du côté de l'excerpt
          else if (work?.excerpts && work.excerpts.length > 0) {
            summary = work.excerpts[0].excerpt;
          }
        }
        // Récupération de la couverture. On va déjà piocher dans les éléments qui ont la prorpéité 'covers'
        // Ensuite on va checker les élements qui ont la propriété 'cover'
        // Si on a ni l'un ni l'autre, on va checker dans le document, la propriété 'cover_i'
        const coverId =
          edition.covers && edition.covers.length > 0
            ? edition.covers[0]
            : Array.isArray(edition.cover)
              ? edition.cover[0]
              : edition.cover || doc.cover_i;
        // 4. Insertion propre
        await this.prisma.book.create({
          data: {
            title: edition.title || doc.title || 'Inconnu',
            author: doc.author_name?.join(', ') || 'Auteur inconnu',
            page_count: edition.number_of_pages ?? 0,
            category: 'unknown',
            publishing_date: pubDate,
            summary: summary,
            publisher: edition.publishers?.[0] || null,
            isbn: isbn || null,
            cover: coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
              : null,
            averageRating: 0,
          },
        });
      } catch (error) {
        console.log('y a une erreur ! ', error);
      }
    }
  }

  // Fonction utilitaire privée pour éviter de répéter le code de transformation
  private mapBookWithUserBookId(books: any[]) {
    return books.map((book) => {
      const userBookEntry =
        book.userBooks && book.userBooks.length > 0 ? book.userBooks[0] : null;

      return {
        id: book.id,
        title: book.title,
        author: book.author,
        cover: book.cover,
        userBookId: userBookEntry ? userBookEntry.id : null,
        status: userBookEntry ? userBookEntry.status : null,
      };
    });
  }
  async getBooks(userId?: number) {
    const books = await this.prisma.book.findMany({
      include: {
        userBooks: userId
          ? {
              where: { userId: userId },
            }
          : false,
      },
    });

    return this.mapBookWithUserBookId(books);
  }

  async getRandomBooks(take: number, userId?: number) {
    const booksCount = await this.prisma.book.count();
    const skip = Math.max(0, Math.floor(Math.random() * (booksCount - take)));
    const books = await this.prisma.book.findMany({
      take: take,
      skip: skip,
      select: {
        id: true,
        title: true,
        author: true,
        cover: true,
        userBooks: userId
          ? {
              where: { userId: userId },
              select: { id: true, status: true },
            }
          : false,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return this.mapBookWithUserBookId(books);
  }

  async getMostPopularBooks(take: number, userId?: number) {
    const books = await this.prisma.book.findMany({
      take: take,
      select: {
        id: true,
        title: true,
        author: true,
        cover: true,
        userBooks: userId
          ? {
              where: { userId: userId },
              select: { id: true, status: true },
            }
          : false,
      },
      orderBy: {
        averageRating: 'desc',
      },
    });
    return this.mapBookWithUserBookId(books);
  }

  async getLatestBooks(take: number, userId?: number) {
    const books = await this.prisma.book.findMany({
      take: take,
      select: {
        id: true,
        title: true,
        author: true,
        cover: true,
        userBooks: userId
          ? {
              where: { userId: userId },
              select: { id: true, status: true },
            }
          : false,
      },
      orderBy: {
        publishing_date: 'desc',
      },
    });
    return this.mapBookWithUserBookId(books);
  }
}
