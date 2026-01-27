import { cookies } from "next/headers";

export type UserCookie = {
  id: number;
  email: string;
  username: string;
  isPrivate: boolean;
  profilePicture: string | null;
  roleId: number;
};

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refresh_token")?.value;
    return !!token;
  } catch {
    return false;
  }
}

export async function getAuthUser(): Promise<UserCookie | null> {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user")?.value;
    if (!userCookie) return null;
    return JSON.parse(userCookie);
  } catch {
    return null;
  }
}
