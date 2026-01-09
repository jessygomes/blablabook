"use server";

type BooksResponse = {
  id: number,
  title: string,
  page_count: number,
  author: string,
  category: string,
  publishing_date: Date,
  summary: string,
  publisher: string,
  isbn: string,
  cover: string,
  averageRating: number,
  createdAt: Date,
  updatedAt: Date,
  userBooks?: {
    id: number,
    status: "READ" | "READING" | "NOT_READ",
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    bookId: number;
  }[]
}

interface mostCommentedBooksResponse extends BooksResponse {
  commentCount: number,
}

interface mostAddedBooksResponse extends BooksResponse {
  addedCount: number,
}

export const searchBooksAction = async (query: string, userId?: number, page: number = 1, size: number = 10) => {
  const res = await fetch(`http://api:3000/books/search?q=${encodeURIComponent(query)}&page=${page}&size=${size}${userId ? `&userId=${userId}` : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:    errorData.message || "Un problème est survenu lors de la recherche des livres",
      status:   res.status,
    };
  } 
  const resData: BooksResponse[] = await res.json();
  return {
    success: true,
    data:    resData,
  };
}
  
export const mostCommentedBooksAction = async (take = 9, userId?: number) => {
  const res = await fetch(`http://api:3000/books/most-commented-books?take=${take}${userId ? `&userId=${userId}` : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:    errorData.message || "Un problème est survenu lors de la récupération des livres",
      status:   res.status,
    };
  }

  const resData: mostCommentedBooksResponse[] = await res.json(); 
  return {
    success: true,
    data:    resData,
  };
}

export const mostAddedBooksAction = async (take = 9, userId?: number) => {
  const res = await fetch(`http://api:3000/books/most-added-books?take=${take}${userId ? `&userId=${userId}` : ""}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:    errorData.message || "Un problème est survenu lors de la récupération des livres",
      status:   res.status,
    };
  }
  const resData: mostAddedBooksResponse[] = await res.json(); 
  return {
    success: true,
    data:    resData,
  };
}

