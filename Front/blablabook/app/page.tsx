"use client";
import BookCard from "@/components/BookCard/BookCard";
import { getTenLatestBooks, getTenMostPopularBooks, getTenRandomBooks } from "@/lib/actions/book.action";
import { useEffect, useState } from "react";

interface Book {
    id: number;
    title: string;
    author: string;
    cover: string;
}

export default function Home() {

  const [randomBooks, setRandomBooks] = useState<Book[]>([]);
  const [popularBooks, setPopularBooks] = useState<Book[]>([]);
  const [latestBooks, setLatestBooks] = useState<Book[]>([]);
  
  useEffect(() => {
          const fetchBooks = async () => {
            try {
              const [resRandom, resPopular, resLatest] = await Promise.all([
                  getTenRandomBooks(),
                  getTenMostPopularBooks(),
                  getTenLatestBooks(),
              ])

              if(resRandom.success) { setRandomBooks(resRandom.data); }
              if(resPopular.success) { setPopularBooks(resPopular.data); }
              if(resLatest.success) { setLatestBooks(resLatest.data); } 

            } catch (error) {
              console.error("Erreur lors de la récupération des livres : ", error);
            }
          }
          fetchBooks();
    }, []);

  return (
    <>
      <div className="wrapper">
        <h2 className="title-section">Découvertes</h2>
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        { randomBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <h2 className="title-section">Populaires</h2>
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        { popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <h2 className="title-section">Nouveautés</h2>
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 pt-3 px-1 no-scrollbar">
        { latestBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
