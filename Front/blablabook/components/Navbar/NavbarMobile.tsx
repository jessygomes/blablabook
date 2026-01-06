"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

export default function NavbarMobile({
  isConnected,
}: {
  isConnected: boolean;
}) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  const links = [
    { href: "/", label: "Accueil", icon: "home" },
    { href: "/search", label: "Recherche", icon: "search" },
    {
      href: "/dernieres-critiques",
      label: "Dernières critiques",
      icon: "book",
    },
    {
      href: isConnected ? "/mon-profil" : "/se-connecter",
      label: "Mon profil",
      icon: "account_circle",
    },
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
      </ul>
    </nav>
  );
}
