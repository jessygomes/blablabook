"use server";

export type User = {
    id: number;
    username: string;
    email: string;
    isPrivate: boolean;
    profilePicture: string | null;
    roleId: number;
    createdAt: string;
    updatedAt: string;
}

export const getUserCount = async () => {
  const res = await fetch(`http://api:3000/users/user-count`, {
    method: "GET"
  });

  if (!res.ok) return { success: false, data: [] };
  const data = await res.json();
  return { success: true, data };
};

export const getCommentCount = async () => {
  const res = await fetch(`http://api:3000/comments/comment-count`, {
    method: "GET"
  });

  if (!res.ok) return { success: false, data: [] };
  const data = await res.json();
  return { success: true, data };
};

export const getReportedCommentCount = async () => {
  const res = await fetch(`http://api:3000/comments/reported-comment-count`, {
    method: "GET"
  });

  if (!res.ok) return { success: false, data: [] };
  const data = await res.json();
  return { success: true, data };
};

export const getBookReadCount = async () => {
  const res = await fetch(`http://api:3000/userbook/book-read-count`, {
    method: "GET"
  });

  if (!res.ok) return { success: false, data: [] };
  const data = await res.json();
  return { success: true, data };
};