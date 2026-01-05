"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { loginSchema, registerSchema } from "../validator.schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setAuthCookies = async (resData: any) => {
  const token = resData.refresh_token || resData.token;
  if (!token) return;

  const cookieStore = await cookies();

  cookieStore.set("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  if (resData.user) {
    cookieStore.set("user", JSON.stringify(resData.user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
  }
};

//! REGISTER ACTION
export const registerAction = async (data: z.infer<typeof registerSchema>) => {
  const res = await fetch(`http://api:3000/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error:
        errorData.message || "Un problème est survenu lors de l'inscription",
      status: res.status,
    };
  }

  const resData = await res.json();

  await setAuthCookies(resData);

  return {
    success: true,
    data: resData,
    message: "Inscription réussie",
  };
};

//! LOGIN ACTION
export const loginAction = async (data: z.infer<typeof loginSchema>) => {
  const res = await fetch(`http://api:3000/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();
    return {
      success: false,
      error: errorData.message || "Identifiants incorrects",
      status: res.status,
    };
  }

  const resData = await res.json();

  await setAuthCookies(resData);

  return {
    success: true,
    data: resData,
    message: "Connexion réussie",
  };
};

//! LOGOUT ACTION
export const logoutServerAction = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("refresh_token");
    cookieStore.delete("user");

    return {
      success: true,
      message: "Déconnexion réussie",
    };
  } catch (error) {
    console.error("Error during logout:", error);
    return {
      success: false,
      error: "Une erreur est survenue lors de la déconnexion.",
    };
  }
};
