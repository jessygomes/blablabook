"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React, { useRef } from "react";
import { UserCookie } from "@/lib/auth";
import { getUploadUrl } from "@/lib/utils";

export default function NavbarMobile({
  isConnected,
  user,
}: {
  isConnected: boolean;
  user: UserCookie | null;
}) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  const links = [
    { href: "/", label: "Accueil", icon: "home" },
    { href: "/rechercher", label: "Recherche", icon: "search" },
    {
      href: "/dernieres-critiques",
      label: "Dernières critiques",
      icon: "book",
    },
    { href: "/administration", label: "Administration", icon: "dashboard"},
  ];

  return (
    <nav className="bg-primary wrapper py-4">
      <ul ref={navRef} className="flex justify-between gap-6">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <li
              key={index}
              className={`relative overflow-hidden text-sm font-one py-2 px-4 rounded-md tracking-widest transition-all duration-500 ease-in-out transform ${
                isActive
                  ? "text-white shadow-primary/30 scale-105 bg-linear-to-t from-second to-transparent"
                  : "text-white"
              }`}
            >
              <Link
                href={link.href}
                className="flex flex-col gap-1 items-center"
              >
                {" "}
                <span className="material-icons">{link.icon}</span>
                {/* {link.label} */}
              </Link>
            </li>
          );
        })}
        <li className="relative overflow-hidden text-sm font-one py-2 px-4 rounded-md tracking-widest transition-all duration-500 ease-in-out transform text-white">
          <Link
            href={isConnected ? "/mon-profil" : "/se-connecter"}
            className="flex flex-col gap-1 items-center"
          >
            {isConnected && user?.profilePicture ? (
              <div className="relative h-6 w-6 rounded-full overflow-hidden border border-white">
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
        </li>
      </ul>
    </nav>
  );
}
