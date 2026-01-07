"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Toast, useToast } from "@/components/Toast";
import { addToLibrary, removeFromLibrary } from "@/lib/actions/userbook.action";

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

const getStatusLabel = (status: string) => {
  switch (status) {
    case "READING":
      return "En cours";
    case "READ":
      return "Lu";
    case "NOT_READ":
      return "À lire";
    default:
      return "";
  }
};

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

  useEffect(() => {
    setCurrentUserBookId(initialUserBookId);
  }, [initialUserBookId]);

  const handleAddToLibrary = async () => {
    if (!token) {
      showToast(
        "Veuillez vous connecter pour ajouter des livres à votre bibliothèque",
        "error"
      );
      return;
    }

    const result = await addToLibrary(book.id, userId, token);

    if (result.success) {
      showToast(result?.message ?? "Livre ajouté avec succès", "success");
      setCurrentUserBookId(result.data?.id || 999);
    } else {
      showToast(result.error ?? "Une erreur est survenue", "error");
    }
  };

  const handleRemoveFromLibrary = async () => {
    if (!token || !currentUserBookId) {
      return;
    }

    const result = await removeFromLibrary(currentUserBookId, token);

    if (result.success) {
      showToast(result?.message ?? "Livre retiré avec succès", "success");
      setCurrentUserBookId(null);
    } else {
      showToast(result.error ?? "Une erreur est survenue", "error");
    }
  };

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
      <div className="flex-none w-56 snap-start bg-white  drop-shadow-md flex flex-col items-center p-2">
        <div className="w-full flex justify-center items-center h-56">
          <div className="relative w-[60%] rounded-2xl aspect-2/3 shadow-sm">
            <Image
              src={book.cover}
              fill
              alt={`Couverture du livre ${book.title}`}
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="p-2 w-full border-t">
          <h3 className="title-card">{book.title}</h3>
          <p className="truncate text-noir italic text-base tracking-wider">
            de {book.author}
          </p>
        </div>
        <div className="mt-auto mb-1 flex items-center justify-between w-full px-2">
          {currentUserBookId ? (
            <>
              <button
                onClick={handleRemoveFromLibrary}
                className="flex w-[49%] items-center gap-1.5 whitespace-nowrap cursor-pointer text-[12px] font-normal bg-orange-200 text-orange-800 hover:bg-orange-100 rounded-2xl px-3 py-1 transition-colors truncate"
              >
                <span className="material-icons text-[14px]!">
                  bookmark_remove
                </span>
                Retirer
              </button>
              <button
                className={` w-[49%] items-center gap-1.5 whitespace-nowrap cursor-pointer text-[12px] rounded-full px-3 py-1 ${
                  status === "READ"
                    ? "bg-green-200 text-green-800"
                    : status === "READING"
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-blue-200 text-blue-800"
                }`}
              >
                {getStatusLabel(status!)}
              </button>
            </>
          ) : (
            <button
              onClick={handleAddToLibrary}
              className="flex items-center gap-1.5 whitespace-nowrap cursor-pointer text-[12px] font-normal bg-green-200 text-green-800 hover:bg-green-100 rounded-2xl px-3 py-1 transition-colors"
            >
              <span className="material-icons text-[14px]!">add</span>
              Ajouter à ma bibliothèque
            </button>
          )}
        </div>
      </div>
    </>
  );
}
