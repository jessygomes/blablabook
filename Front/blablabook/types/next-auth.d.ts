import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      email?: string | null;
      username?: string;
      isPrivate?: boolean;
      profilePicture?: string | null;
      roleId?: number;
    } & DefaultSession["user"];
    accessToken?: string | null;
    refreshToken?: string | null;
  }

  interface User {
    id: string;
    email?: string | null;
    username?: string;
    isPrivate?: boolean;
    profilePicture?: string | null;
    accessToken?: string | null;
    refreshToken?: string | null;
    roleId?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: NextAuth.Session["user"];
    accessToken?: string | null;
    refreshToken?: string | null;
    roleId?: number;
  }
}
