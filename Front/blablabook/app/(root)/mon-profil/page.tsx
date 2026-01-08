import LogoutBtn from "@/components/Auth/LogoutBtn";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getProfileById } from "@/lib/actions/user.action";
import Image from "next/image";
import Link from "next/link";
import { getUploadUrl } from "@/lib/utils";
import UserBookLibrary from "@/components/Profil/UserBookLibrary";

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
  const userData = await getProfileById(user.id);

  return (
    <>
      <section className="wrapper bg-white pb-10 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6 my-6">
            <div className="relative h-15 w-15 rounded-full overflow-hidden">
              <Image
                src={getUploadUrl(userData.profilePicture)}
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="title-section text-quater">Ma bibliothèque</h2>
          </div>
          <div className="flex gap-4 h-fit">
            <Link href={"/mon-profil/modifier"} className="btn-primary">
              Modifier mon profil
            </Link>
            <LogoutBtn />
          </div>
        </div>

        <div className="my-4 ">
          <p className="w-full text-noir text-sm">
            {userData.description
              ? userData.description
              : "Aucune description disponible."}
          </p>
        </div>
      </section>

      <section className="wrapper">
        <UserBookLibrary
          initialUserBooks={userData.userBooks || []}
          token={token?.value ?? null}
          userId={user.id}
        />
      </section>
    </>
  );
}
