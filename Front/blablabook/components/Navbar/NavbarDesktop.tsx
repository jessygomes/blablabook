"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { UserCookie } from "@/lib/auth";
import { getUploadUrl } from "@/lib/utils";

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
    { href: "/en-savoir-plus", label: "En savoir plus" },
    { href: "/dernieres-critiques", label: "Dernières critiques" },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-4 wrapper bg-white">
      {" "}
      {/* <p className="font-two font-bold text-xl text-white">TheInkEra</p> */}
      <Image src="/logo/icon_logo_bleu.png" alt="Logo" width={50} height={50} />
      <ul ref={navRef} className="flex gap-8">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={index}
              className={`relative overflow-hidden text-sm font-one py-2 px-4 rounded-md tracking-widest transition-all duration-500 ease-in-out transform ${
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
