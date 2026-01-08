"use client";

import Image from "next/image";
import { useState } from "react";
import LibraryButton from "@/components/Library/LibraryButton";
import StatusSelector from "@/components/Library/StatusSelector";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author?: string | null;
  cover?: string | null;
};

type UserBook = {
  id: number;
  status: string;
  book: Book;
};

export default function CardBookProfil({
  userBook,
  token,
  userId,
  onRemove,
  onToast,
}: {
  userBook: UserBook;
  userId?: number | null;
  token: string | null;
  onRemove?: (id: number) => void;
  onToast?: (message: string, type: "success" | "error") => void;
}) {
  const [item, setItem] = useState<UserBook>(userBook);

  const handleRemovedFromChild = (newId: number | null) => {
    if (newId === null) {
      onRemove?.(item.id);
    }
  };

  const handleStatusUpdated = (newStatus: string) => {
    setItem((prev) => ({ ...prev, status: newStatus }));
  };

  if (!item) {
    return null;
  }

  return (
    <>
      <article className="relative bg-white border border-gray-100 rounded-md p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <div className="rounded-md overflow-hidden mb-5 bg-gray-50">
          <Link
            href={`/bibliotheque/${item.book.id}`}
            className="relative w-full pt-[150%]"
          >
            <Image
              src={item.book?.cover || "/default-book.png"}
              alt={item.book?.title || "Couverture"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
          </Link>
        </div>
        <h3
          className="text-base font-semibold text-noir leading-snug truncate"
          title={item.book?.title}
        >
          {item.book?.title || "Titre inconnu"}
        </h3>
        {item.book?.author && (
          <p
            className="mt-1 text-xs italic text-gray-600 truncate"
            title={item.book.author}
          >
            de {item.book.author}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 flex-nowrap min-w-0">
          <LibraryButton
            userId={userId ?? undefined}
            token={token}
            bookId={item.book.id}
            initialUserBookId={item.id}
            onUpdate={handleRemovedFromChild}
            onToast={onToast}
            className="flex-1 px-2 py-1"
          />
          <StatusSelector
            token={token}
            userBookId={item.id}
            status={item.status}
            onUpdated={handleStatusUpdated}
            onToast={onToast}
            triggerClassName="flex-1 px-2 py-1"
          />
        </div>
      </article>
    </>
  );
}
