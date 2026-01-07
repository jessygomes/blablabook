import Image from "next/image";
import React from "react";

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

function getStatusPreset(status: string) {
  const base =
    "inline-flex items-center mt-4 px-4 py-2 rounded-full text-sm font-medium";
  switch (status) {
    case "READING":
      return {
        label: "Lecture en cours",
        className: `${base} bg-quater/20 text-quater`,
      };
    case "READ":
      return {
        label: "Déjà lu",
        className: `${base} bg-green-100 text-green-700`,
      };
    case "NOT_READ":
      return {
        label: "À lire",
        className: `${base} bg-gray-100 text-gray-700`,
      };
    default:
      return { label: status, className: `${base} bg-gray-100 text-gray-700` };
  }
}

const MOCK_USER_BOOKS: UserBook[] = [
  {
    id: 1,
    status: "READING",
    book: {
      id: 101,
      title: "Feel Good",
      author: "Thomas Gunzig",
      cover: "/logo/Logo-rose.png",
    },
  },
  {
    id: 2,
    status: "READ",
    book: {
      id: 102,
      title: "Le Petit Prince",
      author: "Antoine de Saint‑Exupéry",
      cover: "/logo/Logo-bleu.png",
    },
  },
  {
    id: 3,
    status: "NOT_READ",
    book: {
      id: 103,
      title: "1984",
      author: "George Orwell",
      cover: "/logo/Logo-violet.png",
    },
  },
];

export default function CardBookProfil({
  userBooks,
}: {
  userBooks: UserBook[];
}) {
  const data: UserBook[] =
    userBooks && userBooks.length > 0
      ? userBooks
      : process.env.NODE_ENV !== "production"
      ? MOCK_USER_BOOKS
      : [];

  if (!data.length) {
    return (
      <div className="wrapper py-6">
        <p className="text-noir opacity-70">
          Aucun livre dans votre bibliothèque.
        </p>
      </div>
    );
  }

  return (
    <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {data.map((ub) => (
        <article
          key={ub.id}
          className="bg-white border border-gray-100 rounded-md p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="rounded-md overflow-hidden mb-5 bg-gray-50">
            <div className="relative w-full pt-[150%]">
              <Image
                src={ub.book?.cover || "/default-book.png"}
                alt={ub.book?.title || "Couverture"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
          <h3
            className="text-base font-semibold text-noir leading-snug"
            title={ub.book?.title}
          >
            {ub.book?.title || "Titre inconnu"}
          </h3>
          {ub.book?.author && (
            <p
              className="mt-1 text-xs italic text-gray-600 truncate"
              title={ub.book.author}
            >
              de {ub.book.author}
            </p>
          )}
          {(() => {
            const preset = getStatusPreset(ub.status);
            return <span className={preset.className}>{preset.label}</span>;
          })()}
        </article>
      ))}
    </div>
  );
}
