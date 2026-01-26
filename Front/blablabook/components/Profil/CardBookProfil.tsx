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
      <article className="relative flex-none w-56 snap-start bg-white drop-shadow-md flex flex-col items-center p-2">
        <div className="w-full flex justify-center items-center h-56">
          <Link
            href={`/bibliotheque/${item.book.id}`}
            className="relative w-[60%] rounded-2xl aspect-2/3 shadow-sm"
          >
            <Image
              src={item.book?.cover || "/default-book.png"}
              alt={item.book?.title || "Couverture"}
              fill
              className="object-cover rounded-sm"
            />
          </Link>
        </div>
        <div className="p-2 w-full border-t">
          <h3 className="title-card" title={item.book?.title}>
            {item.book?.title || "Titre inconnu"}
          </h3>
          {item.book?.author && (
            <p
              className="truncate text-noir text-xs italic tracking-wider"
              title={item.book.author}
            >
              de {item.book.author}
            </p>
          )}
        </div>

        <div className="mt-auto flex gap-2 items-center justify-between w-full p-2">
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
