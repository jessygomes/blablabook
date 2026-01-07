"use server";

//! GET USER BY ID
export const getUserById = async (userId: number) => {
  // const userIdNum = Number(userId);
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
