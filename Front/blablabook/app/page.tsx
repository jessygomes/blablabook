"use client";
import BookCard from "@/components/BookCard/BookCard";
import { getTenRandomBooks } from "@/lib/actions/book.action";
import { useEffect, useState } from "react";

interface Book {
    id: number;
    title: string;
    author: string;
    cover: string;
}

export default function Home() {

  const [randomBooks, setRandomBooks] = useState<Book[]>([]);
  useEffect(() => {
          const fetchBooks = async () => {
              console.log('Récupération en cours');
              const response = await getTenRandomBooks();
  
              if(response.success) {
                  console.log('livres récupérées : ', response.data);
                  setRandomBooks(response.data);
              } else {
                  console.error('On a pas récupéré les livres : ', response.error);
              }
          }
  
          fetchBooks();
    }, []);



  return (
    <>
      <div className="wrapper">
        <p className="font-one bg-quater">
          Le texte est bon ? LE TEXTE EST BON !{" "}
        </p>
        <p className="text-primary bg-tertiary p-2 font-bold font-one">
          Le texte est bon ?{" "}
        </p>
        <h2 className="title-section">Découvertes</h2>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-3 px-1 no-scrollbar">
       { randomBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
        <h2 className="title-section">Populaires</h2>
        <h2 className="title-section">Nouveautés</h2>
      </div>
    </>
  );
}
