"use server";
const url = process.env.NEXT_PUBLIC_API_URL ?? "http://api:3000";

//! RÉCUPÉRER LA NOTE MOYENNE D'UN LIVRE
export const getBookAverageRating = async (bookId: number) => {
  const res = await fetch(`${url}/rate/book/${bookId}/average`, {
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
        "Un problème est survenu lors de la récupération de la note moyenne",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
  };
};

//! RÉCUPÉRER LA NOTE D'UN UTILISATEUR POUR UN LIVRE
export const getUserRateForBook = async (bookId: number, token: string) => {
  const res = await fetch(`${url}/rate/book/${bookId}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la récupération de la note",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
  };
};

//! CRÉER UNE NOTE POUR UN LIVRE
export const createRate = async (
  bookId: number,
  rating: number,
  token: string,
) => {
  const res = await fetch(`${url}/rate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookId,
      rating,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la création de la note",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
    message: "Note enregistrée avec succès",
  };
};

//! MODIFIER UNE NOTE
export const updateRate = async (
  bookId: number,
  rating: number,
  token: string,
) => {
  const res = await fetch(`${url}/rate/book/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rating,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la modification de la note",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
    message: "Note modifiée avec succès",
  };
};
