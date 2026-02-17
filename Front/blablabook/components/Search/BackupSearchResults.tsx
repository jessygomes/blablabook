'use client';

import { useRouter } from "next/navigation";
import { importBooksFromExternalApiAction } from "@/lib/actions/search.action";

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

export default function BackupSearchResults({ books }: BackupSearchResultsProps) {
  const router = useRouter();

  const handleGetDetailOfExternalBook = async (book: OpenLibraryDoc) => {
    const importedBook = await importBooksFromExternalApiAction(book);
    if (importedBook.success && importedBook.data) {
      router.push(`/bibliotheque/${importedBook.data.id}`);
    }
  };

  return (
    <div className="mx-5 my-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs text-gray-500 mb-2">Recherchez-vous l&apos;un de ces livres :</p>
      <div className="space-y-1.5">
        {books.slice(0, 10).map((book) => (
          <div 
            key={book.edition_key ? book.edition_key[0] : book.title} 
            className="bg-white p-2 rounded border border-gray-100 hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer flex items-center gap-3"
            onClick={() => handleGetDetailOfExternalBook(book)}
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-semibold text-sm">
                {book.title?.[0]?.toUpperCase() || '?'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-800 truncate" title={book.title}>
                {book.title || 'Titre inconnu'}
              </h3>
              <p className="text-xs text-gray-500 truncate">
                {book.author_name?.[0] || 'Auteur inconnu'}
              </p>
            </div>
            <svg 
              className="shrink-0 w-4 h-4 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
