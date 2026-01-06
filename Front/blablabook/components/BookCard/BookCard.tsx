"use client";
import Image from "next/image";

interface BookCardProps {
    book: {
        id: number;
        title: string;
        author: string;
        cover: string;
    }
}
export default function BookCard({book}: BookCardProps) {

    return (
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
            <p className="truncate text-noir italic text-base tracking-wider" >de {book.author}</p>
        </div>
        <div className="mt-auto mb-1 flex items-center gap-1 whitespace-nowrap text-xs bg-green-200 text-green-600 rounded-2xl px-2.5 py-[5px]">
          <button type="button" className="flex items-center gap-1 whitespace-nowrap"><span className="material-icons text-[8px]">add</span>Ajouter à ma bibliothèque</button>
        </div>  
      </div>
    )
}