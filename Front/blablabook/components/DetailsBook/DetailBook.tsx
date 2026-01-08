"use client";
import Image from "next/image";
import LibraryButton from "../Library/LibraryButton";
import { Toast, useToast } from "../Toast";
import RatingComponent from "./RatingComponent";
import CommentsSection from "./CommentsSection";

type Comment = {
  id: number;
  title: string;
  reportCounter: number;
  content: string;
  date: string;
  status: string;
  createdAt: string;
  user: {
    id: number;
    username: string;
    profilePicture: string | null;
  };
};

export default function DetailBook({
  book,
  userId,
  token,
}: {
  book: {
    id: number;
    title: string;
    author?: string | null;
    cover?: string | null;
    publishing_date?: string | null;
    publisher?: string | null;
    page_count?: number | null;
    summary?: string | null;
    genre?: string | null;
    publishedAt?: string | null;
    pages?: number | null;
    userBookId?: number | null;
    userRating?: number | null;
    averageRating?: number | null;
    comments: Comment[];
  };
  userId?: number | null;
  token: string | null;
}) {
  const formatDate = (value?: string | null) => {
    if (!value) return "inconnue";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(parsed);
  };

  const { toast, showToast, hideToast } = useToast();

  return (
    <div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={hideToast}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 items-start">
        <div className="relative w-full max-w-xs mx-auto aspect-2/3 rounded-md overflow-hidden shadow-lg bg-gray-50">
          <Image
            src={book.cover || "/default-book.png"}
            alt={book.title || "Couverture du livre"}
            fill
            sizes="(max-width: 768px) 80vw, 360px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-noir">{book.title}</h1>
              <LibraryButton
                userId={userId ?? undefined}
                token={token}
                bookId={book.id}
                initialUserBookId={book.userBookId ?? null}
                className="px-4 py-2"
                onToast={(msg, type) => showToast(msg, type)}
              />
            </div>
            <p className="text-base text-gray-700">
              {book.author ? `de ${book.author}` : "Auteur inconnu"}
            </p>
            <p className="text-xs italic text-gray-700">
              Paru le {formatDate(book.publishing_date)} - Publié par{" "}
              {book.publisher ?? "inconnu"} - {book.page_count ?? "N/A"} pages
            </p>
          </div>

          {book.summary && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-noir">Description</h2>
              <p className="text-sm leading-6 text-gray-700 whitespace-pre-line">
                {book.summary}
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            {book.genre && (
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Genre
                </p>
                <p className="font-medium text-noir">{book.genre}</p>
              </div>
            )}
            {book.publishedAt && (
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Publication
                </p>
                <p className="font-medium text-noir">
                  {formatDate(book.publishedAt)}
                </p>
              </div>
            )}
            {book.pages && (
              <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Pages
                </p>
                <p className="font-medium text-noir">{book.pages}</p>
              </div>
            )}
          </div>

          <RatingComponent
            userRating={book.userRating}
            averageRating={book.averageRating}
            userId={userId}
            token={token}
            onRatingChange={(rating) => {
              console.log("User rated:", rating);
            }}
          />
        </div>
      </div>
      <section className="mt-12">
        <CommentsSection comments={book.comments} />
      </section>
    </div>
  );
}
