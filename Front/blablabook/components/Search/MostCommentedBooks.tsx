import { cookies } from 'next/headers';
import BookCard from '../BookCard/BookCard'
import { mostCommentedBooksAction } from '@/lib/actions/search.action';

const fetchMostCommentedBooks = async () => {
  const result = await mostCommentedBooksAction();
  return result;
};

async function MostCommentedBooks() {

  // const { data: session, status } = useSession()
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token")?.value || null;
  const userCookie = cookieStore.get("user")?.value;
  const mostCommentedBooks = await fetchMostCommentedBooks();

  return (
    <div className="mb-12">
      <h2 className="title-section ml-3 text-gray-700 font-bold mb-4 px-2">Les plus critiqués</h2>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-3 px-1 no-scrollbar">
        {mostCommentedBooks.data && mostCommentedBooks.data.map((book) => (
          <BookCard key={book.id} book={{
            id: book.id,
            title: book.title,
            author: book.author,
            cover: book.cover,
          }}
          userId={userCookie ? JSON.parse(decodeURIComponent(userCookie)).id : null}
          token={token}
          userBookId={book.userBooks?.[0]?.id ?? null}  
          status={book.userBooks?.[0]?.status ?? null}
          />
        ))}
      </div>
    </div>
  )
}

export default MostCommentedBooks