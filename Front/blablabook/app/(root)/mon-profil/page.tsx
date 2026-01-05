import LogoutBtn from "@/components/Auth/LogoutBtn";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token");

  if (!token) {
    redirect("/se-connecter");
  }

  return (
    <section className="bg-white pb-10 flex flex-col items-center justify-center">
      <LogoutBtn />
    </section>
  );
}
