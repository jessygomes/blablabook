import { notFound } from "next/navigation";
import { getBookById } from "@/lib/actions/book.action";
import DetailBook from "@/components/DetailsBook/DetailBook";
import { auth } from "@/auth.config";

type Params = { id: string };

export default async function Page({ params }: { params: Params }) {
  const bookId = Number(params.id);
  if (!bookId) {
    notFound();
  }

  const session = await auth();
  const token = session?.accessToken ?? null;
  const userId = session?.user ? Number(session.user.id) : null;

  const bookRes = await getBookById(bookId);
  if (!bookRes.success || !bookRes.data) {
    notFound();
  }

  const book = bookRes.data;

  return (
    <>
      <section className="wrapper py-8">
        <DetailBook book={book} userId={userId} token={token} />
      </section>
    </>
  );
}
