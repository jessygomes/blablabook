import MostAddedBooks from "@/components/Search/MostAddedBooks";
import MostCommentedBooks from "@/components/Search/MostCommentedBooks";
import SearchBarHandler from "@/components/Search/SearchBarHandler";
import SearchResult from "@/components/Search/SearchResult";
import { searchBooksAction } from "@/lib/actions/search.action";
import { cookies } from "next/headers";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Search({ searchParams }: SearchPageProps) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  const params = await searchParams;
  const query = params.q;

  let searchResults = null;
  if (query) {
    let userId
    if (userCookie) {
      userId = JSON.parse(userCookie).id;
    }
    searchResults = await searchBooksAction(query, userId);
  }

  const hasResults = searchResults && searchResults.success && searchResults.data && searchResults.data.length > 0;
  return (
    <>
      <div className="sm:hidden" >
        <SearchBarHandler />
      </div>
      
      {searchResults && searchResults.data && hasResults ? (
        <SearchResult books={searchResults.data} />
      ) : (
        <>
          <MostAddedBooks />
          <MostCommentedBooks />
        </>
      )}
    </>
  );
}
