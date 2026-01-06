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
      <div className="flex-none w-48 snap-start bg-white  drop-shadow-md flex flex-col items-center p-2">
      <div className="w-full flex justify-center items-center h-50">
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
            
        </div>
    )
}