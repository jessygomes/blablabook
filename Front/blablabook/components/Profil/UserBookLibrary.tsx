"use client";

import React, { useState } from "react";
import CardBookProfil from "./CardBookProfil";
import { Toast, useToast } from "@/components/Toast";

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

export default function UserBookLibrary({
  initialUserBooks,
  token,
  userId,
}: {
  initialUserBooks: UserBook[];
  token: string | null;
  userId?: number | null;
}) {
  const [userBooks, setUserBooks] = useState<UserBook[]>(initialUserBooks);
  const { toast, showToast, hideToast } = useToast();

  const handleRemoveBook = (id: number) => {
    setUserBooks((prev) => prev.filter((book) => book.id !== id));
  };

  if (!userBooks.length) {
    return (
      <div className="py-20 w-full flex flex-col justify-center items-center gap-3 bg-linear-to-br from-primary/50 to-second/50 text-quater/80 font-one tracking-widest rounded-md border border-noir/10">
        <span className="material-icons text-5xl text-quater/80">
          auto_stories
        </span>
        <p>Aucun livre dans votre bibliothèque.</p>
      </div>
    );
  }

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
      <div className="pt-6 pb-20 mx-auto">
        <div className="w-full grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-5 lg:gap-10 auto-rows-max justify-items-center">
          {userBooks.map((userBook) => (
            <CardBookProfil
              key={userBook.id}
              userBook={userBook}
              token={token}
              userId={userId ?? undefined}
              onRemove={handleRemoveBook}
              onToast={showToast}
            />
          ))}
        </div>
      </div>
    </>
  );
}
