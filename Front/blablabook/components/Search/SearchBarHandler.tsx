"use client";

import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

function SearchBarHandler() {
  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push(`/rechercher?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default SearchBarHandler