import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getBookById } from "@/lib/actions/book.action";
import DetailBook from "@/components/DetailsBook/DetailBook";

type Params = Promise<{ id: string }> | { id: string };

export default async function Page({ params }: { params: Params }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const bookId = Number(resolvedParams?.id);
  if (!bookId) {
    notFound();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token")?.value ?? null;
  const userCookie = cookieStore.get("user")?.value;
  let userId: number | null = null;
  if (userCookie) {
    try {
      userId = JSON.parse(decodeURIComponent(userCookie)).id;
    } catch {
      userId = null;
    }
  }

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
