"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LibraryButton from "@/components/Library/LibraryButton";
import { Toast, useToast } from "@/components/Toast";
import StatusSelector, {
  StatusType,
} from "@/components/Library/StatusSelector";
import Link from "next/link";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    cover: string;
  };
  userId: number;
  token: string | null;
  userBookId: number | null;
  status: "READ" | "READING" | "NOT_READ" | null;
}

// status label handled inside StatusSelector

export default function BookCard({
  book,
  userId,
  token,
  userBookId: initialUserBookId,
  status,
}: BookCardProps) {
  const { toast, showToast, hideToast } = useToast();
  const [currentUserBookId, setCurrentUserBookId] = useState<number | null>(
    initialUserBookId
  );
  const [currentStatus, setCurrentStatus] = useState<StatusType>(
    (status ?? "NOT_READ") as StatusType
  );

  useEffect(() => {
    setCurrentUserBookId(initialUserBookId);
  }, [initialUserBookId]);
  useEffect(() => {
    setCurrentStatus(status ?? "NOT_READ");
  }, [status]);

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={hideToast}
        />
      )}
      <div className="relative flex-none w-56 snap-start bg-white drop-shadow-md flex flex-col items-center p-2">
        <div className="w-full flex justify-center items-center h-56">
          <Link
            href={`/bibliotheque/${book.id}`}
            className="relative w-[60%] rounded-2xl aspect-2/3 shadow-sm"
          >
            <Image
              src={book.cover}
              fill
              alt={`Couverture du livre ${book.title}`}
              className="object-cover rounded-sm"
            />
          </Link>
        </div>
        <div className="p-2 w-full border-t">
          <h3 className="title-card">{book.title}</h3>
          <p className="truncate text-noir italic text-base tracking-wider">
            de {book.author}
          </p>
        </div>
        <div className="mt-auto mb-1 flex items-center justify-between w-full px-2">
          {
            <>
              <LibraryButton
                userId={userId}
                token={token}
                bookId={book.id}
                initialUserBookId={currentUserBookId}
                onUpdate={setCurrentUserBookId}
                onToast={(msg, type) => showToast(msg, type)}
                className={currentUserBookId ? "w-[49%]" : "w-full"}
              />
              {currentUserBookId && (
                <StatusSelector
                  token={token}
                  userBookId={currentUserBookId}
                  status={currentStatus || "NOT_READ"}
                  onUpdated={setCurrentStatus}
                  onToast={(msg, type) => showToast(msg, type)}
                  triggerClassName="w-[49%] px-3 py-1"
                />
              )}
            </>
          }
        </div>
      </div>
    </>
  );
}
