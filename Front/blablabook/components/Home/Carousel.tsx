"use client";

import { useRef } from "react";

export default function Carousel({children} : {children: React.ReactNode}) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if(scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            <button onClick={() => scroll('left')}
                aria-label="carousel-left-button"
                className="absolute text-center left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/90 text-white p-2 rounded-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                <span className="material-icons">chevron_left</span>
            </button>
            <div ref={scrollRef} className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory container-snap gap-4 pb-4 mb-2 pt-3 px-1 no-scrollbar scroll-smooth">
                {children}
            </div>
            <button onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/90 text-white p-2 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                <span className="material-icons">chevron_right</span>
            </button>
        </div>
    );
}