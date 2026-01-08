"use server";

export const getTenRandomBooks = async (userId?: number | null) => {
  const url = userId
    ? `http://api:3000/books/fetch-random?userId=${userId}`
    : `http://api:3000/books/fetch-random`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la récupération des livres",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
  };
};

export const getTenMostPopularBooks = async (userId?: number | null) => {
  const url = userId
    ? `http://api:3000/books/fetch-popular-books?userId=${userId}`
    : `http://api:3000/books/fetch-popular-books`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la récupération des livres",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
  };
};

export const getTenLatestBooks = async (userId?: number | null) => {
  const url = userId
    ? `http://api:3000/books/fetch-latest?userId=${userId}`
    : `http://api:3000/books/fetch-latest`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la récupération des livres",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
  };
};

//! RÉCUPÉRER UN LIVRE PAR SON ID
export const getBookById = async (bookId: number) => {
  const res = await fetch(`http://api:3000/books/${bookId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la récupération du livre",
      status: res.status,
    };
  }
  const resData = await res.json();

  console.log("resData book action:", resData);

  return {
    success: true,
    data: resData,
  };
};
