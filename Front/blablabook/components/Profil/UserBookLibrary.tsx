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
      <div className="py-6">
        <p className="text-noir opacity-70">
          Aucun livre dans votre bibliothèque.
        </p>
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
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
    </>
  );
}
