import BookCard from "@/components/BookCard/BookCard";
import {
  getTenLatestBooks,
  getTenMostPopularBooks,
  getTenRandomBooks,
} from "@/lib/actions/book.action";
import { cookies } from "next/headers";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  userBookId?: number | null;
  status?: "READ" | "READING" | "NOT_READ" | null;
}

export default async function BookLists() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token")?.value || null;
  const userCookie = cookieStore.get("user")?.value;

  let userId = null;
  if (userCookie) {
    const userData = JSON.parse(decodeURIComponent(userCookie));
    userId = userData.id;
  }

  const [resRandom, resPopular, resLatest] = await Promise.all([
    getTenRandomBooks(userId),
    getTenMostPopularBooks(userId),
    getTenLatestBooks(userId),
  ]);

  const randomBooks: Book[] = resRandom.success ? resRandom.data : [];
  const popularBooks: Book[] = resPopular.success ? resPopular.data : [];
  const latestBooks: Book[] = resLatest.success ? resLatest.data : [];

  return (
    <>
      <h2 className="title-section">Découvertes</h2>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        {randomBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            userId={userId}
            token={token}
            userBookId={book.userBookId ?? null}
            status={book.status ?? null}
          />
        ))}
      </div>
      <h2 className="title-section">Populaires</h2>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        {popularBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            userId={userId}
            token={token}
            userBookId={book.userBookId ?? null}
            status={book.status ?? null}
          />
        ))}
      </div>
      <h2 className="title-section">Nouveautés</h2>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        {latestBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            userId={userId}
            token={token}
            userBookId={book.userBookId ?? null}
            status={book.status ?? null}
          />
        ))}
      </div>
    </>
  );
}
