export interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  docs: OpenLibraryDoc[];
}

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

export interface OpenLibraryEdition {
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

export interface OpenLibraryWork {
  description?: string | { value: string };
  excerpts?: { excerpt: string }[];
}
