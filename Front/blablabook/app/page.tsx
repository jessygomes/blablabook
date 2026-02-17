import Header from "@/components/Header";
import BookLists from "@/components/Home/BookLists";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        <BookLists />
      </div>
    </>
  );
}
