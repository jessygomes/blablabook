"use server";
import { z } from "zod";
import { editProfileSchema } from "../validator.schema";
import { auth } from "@/auth.config";

//! GET USER BY ID
export const getUserById = async (userId: number) => {
  const res = await fetch(`http://api:3000/users/profil/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const userData = await res.json();

  return userData;
};

export const getUsers = async(page: number, limit: number, search: string = '') => {
  const res = await fetch(`http://api:3000/users?page=${page}&limit=${limit}&search=${search}`, {
    cache: 'no-store',
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const usersData = await res.json();

  return usersData;
}

//! GET PROFILE BY ID (avec les userbooks et commentaires)
export const getProfileById = async (userId: number) => {
  const res = await fetch(`http://api:3000/users/profil/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  const userData = await res.json();

  return userData;
};

//! UPDATE PROFILE ACTION
export const updateProfileAction = async (
  userId: number,
  data: z.infer<typeof editProfileSchema>,
  profilePictureFile?: File | null,
) => {
  try {
    const session = await auth();
    const token = (session as any)?.accessToken;

    if (!token) {
      return {
        success: false,
        error: "Non authentifié",
      };
    }

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("isPrivate", data.isPrivate.toString());

    if (data.description) {
      formData.append("description", data.description);
    }

    // Si un nouveau fichier est fourni, l'ajouter
    if (profilePictureFile) {
      formData.append("profilePicture", profilePictureFile);
    } else if (data.profilePicture) {
      // Sinon, garder l'URL existante
      formData.append("profilePicture", data.profilePicture);
    }

    const res = await fetch(`http://api:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        // Ne pas définir Content-Type, le navigateur le fera automatiquement avec la boundary
      },
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        success: false,
        error: errorData.message || "Erreur lors de la mise à jour du profil",
        status: res.status,
      };
    }

    const resData = await res.json();

    return {
      success: true,
      data: resData,
      message: "Profil mis à jour avec succès",
    };
  } catch (error) {
    console.error("Error updating profile:", error);
    return {
      success: false,
      error: "Une erreur est survenue lors de la mise à jour du profil",
    };
  }
};

//! REMOVE USER
export const removeUser = async (userId: number) => {
  try {
    const session = await auth();
    const token = (session as any)?.accessToken;
    if(!token) {
      return {
        success: false,
        error: "Non authentifié",
      };
    }
    const res = await fetch(`http://api:3000/users/${userId}`, {
      method: "DELETE", 
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    console.log("Status API:", res.status);
    if(!res.ok) return { 
      success: false,
      error: "Une erreur est survenue"
    }

    return {
      success: true,
    }

  } catch(error) {
    console.error("Error deleting user : ", error);
    return  {
      success: false,
      error: "Une erreur est survenue lors de la suppression de l'utilisateur",
    };
  }
};

