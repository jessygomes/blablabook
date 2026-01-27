"use client";

import { useRouter } from "next/navigation";
import { importBooksFromExternalApiAction } from "@/lib/actions/search.action";
import Image from "next/image";

export interface OpenLibraryDoc {
  key?: string;
  title?: string;
  editions: Editions;
  edition_key?: string[];
  number_of_pages_median?: number;
  author_name?: string[];
  first_publish_year?: number;
  publish_date?: string[];
  publisher?: string[];
  isbn?: string[];
  cover_i?: number;
}

interface Editions {
  numFound: number;
  start: number;
  numFoundExact: number;
  docs: EditionsDocs[];
}

interface EditionsDocs {
  key: string;
  title: string;
  cover_i: number;
  isbn: string[];
}

interface BackupSearchResultsProps {
  books: OpenLibraryDoc[];
}

export default function BackupSearchResults({
  books,
}: BackupSearchResultsProps) {
  const router = useRouter();

  const handleGetDetailOfExternalBook = async (book: OpenLibraryDoc) => {
    const importedBook = await importBooksFromExternalApiAction(book);
    if (importedBook.success && importedBook.data) {
      router.push(`/bibliotheque/${importedBook.data.id}`);
    }
  };

  return (
    <div className="mx-5 my-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs text-gray-500 mb-2">
        Suggestions de livres externes :
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {books.slice(0, 10).map((book) => (
          <div
            key={book.edition_key ? book.edition_key[0] : book.title}
            className="bg-white p-2 rounded border border-gray-100 hover:shadow-sm transition-shadow cursor-pointer"
            onClick={() => handleGetDetailOfExternalBook(book)}
          >
            {book.cover_i ? (
              <Image
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                alt={book.title || "Couverture de livre"}
                width={80}
                height={100}
                className="w-full h-20 object-cover rounded mb-1"
              />
            ) : (
              <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded mb-1">
                <span className="text-gray-400 text-xs">📚</span>
              </div>
            )}
            <h3
              className="text-xs font-medium text-gray-700 line-clamp-2"
              title={book.title}
            >
              {book.title}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {book.author_name?.[0] || "Inconnu"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
