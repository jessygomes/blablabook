import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import EditProfile from "@/components/Profil/EditProfile";

export default async function ModifierPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refresh_token");

  if (!token) {
    redirect("/se-connecter");
  }

  const userCookie = cookieStore.get("user");
  if (!userCookie) {
    redirect("/se-connecter");
  }

  const user = JSON.parse(userCookie.value);
  const userData = await getUserById(user.id);

  return (
    <section className="wrapper bg-white py-10 flex flex-col">
      <EditProfile
        userId={user.id}
        initialData={{
          username: userData.username || "",
          description: userData.description || "",
          profilePicture: userData.profilePicture || "",
          isPrivate: userData.isPrivate || false,
        }}
      />
    </section>
  );
}
