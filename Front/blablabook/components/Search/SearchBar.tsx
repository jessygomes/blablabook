'use client';

import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

function SearchBar({
  onSearch,
  placeholder = "Rechercher un livre, un auteur..."
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim()) {
        onSearch(searchQuery.trim());
      }
    }
  };

  return (
    <div className="flex items-center mx-auto my-3 sm:m-3 gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-quater bg-[#e3edef] w-[calc(100%-2rem)] sm:w-full sm:max-w-md">
      <span className="material-icons text-noir text-lg sm:text-xl shrink-0">search</span>
      <input
        type="text"
        placeholder={placeholder}
        className="text-[#717172] text-sm sm:text-base bg-transparent focus:outline-none flex-1 w-full min-w-0"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchBar;