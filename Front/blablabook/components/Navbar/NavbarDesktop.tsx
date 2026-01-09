"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { UserCookie } from "@/lib/auth";
import { getUploadUrl } from "@/lib/utils";
import SearchBarHandler from "../Search/SearchBarHandler";

export default function NavbarDesktop({
  isConnected,
  user,
}: {
  isConnected: boolean;
  user: UserCookie | null;
}) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/dernieres-critiques", label: "Dernières critiques" },
  ];



  return (
    <nav className="w-full flex justify-between items-center gap-2 md:gap-4 py-4 wrapper bg-white">
      {" "}
      <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
        <Image src="/logo/icon_logo_bleu.png" alt="Logo" width={50} height={50} className="shrink-0" />
        <div className="min-w-0 mr-2 flex-1">
          <SearchBarHandler />
        </div>
      </div>
      <ul ref={navRef} className="flex gap-2 md:gap-4 xl:gap-8 shrink-0">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={index}
              className={`relative overflow-hidden text-sm font-one py-2 px-2 xl:px-4 rounded-md tracking-widest transition-all duration-500 ease-in-out transform ${
                isActive
                  ? "text-quater underline shadow-primary/30 scale-105"
                  : "text-quater hover:text-primary hover:bg-gray-50 hover:scale-102"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}

        <Link
          href={isConnected ? "/mon-profil" : "/se-connecter"}
          className="flex items-center gap-2 text-quater hover:text-primary cursor-pointer transition-colors duration-300"
        >
          {isConnected && user?.profilePicture ? (
            <div className="relative h-8 w-8 rounded-full overflow-hidden border border-quater">
              <Image
                src={getUploadUrl(user.profilePicture)}
                alt={user.username}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <span className="material-icons">account_circle</span>
          )}
        </Link>
      </ul>
    </nav>
  );
}
