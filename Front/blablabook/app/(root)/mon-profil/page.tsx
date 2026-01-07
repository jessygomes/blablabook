import LogoutBtn from "@/components/Auth/LogoutBtn";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";
import Image from "next/image";

export default async function page() {
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

  console.log("User data in profile page:", userData);

  return (
    <section className="wrapper bg-white pb-10 flex flex-col">
      <div className="flex items-center gap-6 my-6">
        <div className="relative h-15 w-15 rounded-full overflow-hidden border-2 border-quater">
          <Image
            src={userData.profilePicture || "/default-profile.png"}
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        <h2 className="title-section text-quater">Ma bibliothèque</h2>
      </div>

      <div className="my-4 flex gap-4 justify-between items-center">
        <p className="text-noir">
          {userData.description
            ? userData.description
            : "Aucune description disponible."}
        </p>
        <div className="flex gap-2">
          <button className="btn-primary">Modifier mon profil</button>
          <LogoutBtn />
        </div>
      </div>
    </section>
  );
}
