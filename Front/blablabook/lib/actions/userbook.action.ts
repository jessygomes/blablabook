"use server";

//! RECUPERER LA LIBRAIRIE D'UN UTILISATEUR
export const getUserLibrary = async (userId: number, token: string) => {
  const res = await fetch(`http://api:3000/userbook/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return { success: false, data: [] };
  const data = await res.json();
  return { success: true, data };
};

//! AJOUTER A LA LIBRAIRIE
export const addToLibrary = async (
  bookId: number,
  userId: number,
  token: string
) => {
  console.log("Adding to library:", `http://api:3000/userbook/add/${userId}/${bookId}`);
  const res = await fetch(`http://api:3000/userbook/add/${userId}/${bookId}`, {
    method: "POST",
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
        "Un problème est survenu lors de l'enregistrement dans la bibliothèque",
      status: res.status,
    };
  }

  const resData = await res.json();

  return {
    success: true,
    data: resData,
    message: "Élément enregistré avec succès",
  };
};

//! SUPPRIMER DE LA LIBRAIRIE
export const removeFromLibrary = async (id: number, token: string) => {
  const res = await fetch(`http://api:3000/userbook/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la suppression de l'élément de la bibliothèque",
      status: res.status,
    };
  }

  return {
    success: true,
    message: "Élément retiré avec succès",
  };
};

//! CHANGER LE STATUT
export const updateUserBookStatus = async (
  id: number,
  status: string,
  token: string
) => {
  console.log("Updating user book status:", `http://api:3000/userbook/statut/${id}`);
  const res = await fetch(`http://api:3000/userbook/statut/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message ||
        "Un problème est survenu lors de la mise à jour du statut",
      status: res.status,
    };
  }
  const resData = await res.json();
  return {
    success: true,
    data: resData,
    message: "Statut mis à jour avec succès",
  };
};
