"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function NavbarDesktop({
  isConnected,
}: {
  isConnected: boolean;
}) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);

  const links = [
    { href: "/", label: "Accueil" },
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
          <span className="material-icons">account_circle</span>
        </Link>
      </ul>
    </nav>
  );
}
