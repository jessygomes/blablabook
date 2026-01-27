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
      <article className="relative bg-white drop-shadow-md rounded-lg overflow-hidden flex flex-col h-full">
        {/* Image Container */}
        <div className="w-full flex justify-center items-center bg-gray-50 aspect-2/3 sm:aspect-auto sm:h-40 md:h-48 lg:h-56">
          <Link
            href={`/bibliotheque/${item.book.id}`}
            className="relative w-3/4 sm:w-4/5 h-full aspect-2/3 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={item.book?.cover || "/default-book.png"}
              alt={item.book?.title || "Couverture"}
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* Text Container */}
        <div className="flex-1 p-2 sm:p-3 border-t flex flex-col">
          <h3
            className="title-card line-clamp-2 text-xs sm:text-sm"
            title={item.book?.title}
          >
            {item.book?.title || "Titre inconnu"}
          </h3>
          {item.book?.author && (
            <p
              className="truncate text-noir text-xs italic tracking-wider mt-1 opacity-80 shrink-0"
              title={item.book.author}
            >
              {item.book.author}
            </p>
          )}
        </div>

        {/* Actions Container */}
        <div className="flex flex-col sm:flex-row gap-2 p-2 sm:p-3 border-t mt-auto">
          <LibraryButton
            userId={userId ?? undefined}
            token={token}
            bookId={item.book.id}
            initialUserBookId={item.id}
            onUpdate={handleRemovedFromChild}
            onToast={onToast}
            className="flex-1 px-2 py-1.5 text-xs sm:text-sm"
          />
          <StatusSelector
            token={token}
            userBookId={item.id}
            status={item.status}
            onUpdated={handleStatusUpdated}
            onToast={onToast}
            triggerClassName="flex-1 px-2 py-1.5 text-xs sm:text-sm"
          />
        </div>
      </article>
    </>
  );
}
