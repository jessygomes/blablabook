import { auth } from "@/auth.config";
import SearchResultCard from "./SearchResultCard";

type Props = {
  books: {
    id: number;
    title: string;
    page_count: number;
    author: string;
    category: string;
    publishing_date: Date;
    summary: string;
    publisher: string;
    isbn: string;
    cover: string;
    averageRating: number;
    createdAt: Date;
    updatedAt: Date;
    userBooks?: {
      id: number;
      status: "READ" | "READING" | "NOT_READ";
      createdAt: Date;
      updatedAt: Date;
      userId: number;
      bookId: number;
    }[];
  }[];
};

async function SearchResult({ books }: Props) {
  const session = await auth();
  const token = session?.accessToken ?? null;
  const userId = session?.user ? Number(session.user.id) : undefined;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr m-">
      {books.map((book) => (
        <SearchResultCard
          key={book.id}
          book={book}
          token={token}
          userId={userId}
        />
      ))}
    </div>
  );
}

export default SearchResult;
