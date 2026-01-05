import { cookies } from "next/headers";

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refresh_token")?.value;
    return !!token;
  } catch {
    return false;
  }
}
