"use client";

import React, { useState } from "react";
import { addToLibrary, removeFromLibrary } from "@/lib/actions/userbook.action";

interface LibraryButtonProps {
  userId?: number; // required only for add
  bookId: number;
  token: string | null;
  initialUserBookId?: number | null; // if present => already in library
  className?: string; // extra classes appended to default
  onUpdate?: (userBookId: number | null) => void;
  onToast?: (message: string, type: "success" | "error") => void;
}

export default function LibraryButton({
  userId,
  bookId,
  token,
  initialUserBookId = null,
  className = "",
  onUpdate,
  onToast,
}: LibraryButtonProps) {
  const [userBookId, setUserBookId] = useState<number | null>(
    () => initialUserBookId ?? null
  );

  const handleAdd = async () => {
    console.log("Handle add to library", bookId, userId, token);
    if (!token || !userId) {
      onToast?.("Veuillez vous connecter pour ajouter des livres", "error");
      return;
    }
    const result = await addToLibrary(bookId, userId, token);
    if (result.success) {
      const newId = result.data?.id || null;
      setUserBookId(newId);
      onUpdate?.(newId);
      onToast?.(result?.message ?? "Livre ajouté avec succès", "success");
    } else {
      onToast?.(result.error ?? "Une erreur est survenue", "error");
    }
  };

  const handleRemove = async () => {
    if (!token || !userBookId) return;
    const result = await removeFromLibrary(userBookId, token);
    if (result.success) {
      setUserBookId(null);
      onUpdate?.(null);
      onToast?.(result?.message ?? "Livre retiré avec succès", "success");
    } else {
      onToast?.(result.error ?? "Une erreur est survenue", "error");
    }
  };

  const baseBtn =
    "flex items-center gap-1.5 whitespace-nowrap cursor-pointer text-[12px] font-normal rounded-2xl px-3 py-1 transition-colors truncate";

  return (
    <>
      {userBookId ? (
        <button
          onClick={handleRemove}
          className={`${baseBtn} bg-orange-200 text-orange-800 hover:bg-orange-100 ${className}`}
        >
          <span className="material-icons text-[14px]!">bookmark_remove</span>
          <span className="hidden sm:inline">Retirer</span>
        </button>
      ) : (
        <button
          onClick={handleAdd}
          className={`${baseBtn} bg-green-200 text-green-800 hover:bg-green-100 ${className}`}
        >
          <span className="material-icons text-[14px]!">add</span>
          <span className="hidden sm:inline">Ajouter à ma bibliothèque</span>
        </button>
      )}
    </>
  );
}
