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
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 my-6">
          {/* Profile Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-full overflow-hidden shadow-md">
              <Image
                src={getUploadUrl(userData.profilePicture)}
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h2 className="title-section text-quater text-lg sm:text-2xl">
              Ma bibliothèque
            </h2>
          </div>

          {/* Actions */}
          <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
            <Link
              href={"/mon-profil/modifier"}
              className="btn-primary text-center flex-1 sm:flex-none"
            >
              Modifier mon profil
            </Link>
            <LogoutBtn />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 mb-2">
          <p className="text-noir text-xs sm:text-sm leading-relaxed">
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
