"use client";
import Image from "next/image";
import React from "react";
import AboutUsBtn from "./AboutUs/AboutUsBtn";

export default function Header() {
  return (
    <header className="wrapper flex flex-col gap-4 bg-linear-to-b from-primary to-second  text-white py-16 mb-4  justify-center items-center ">
      <Image src="/logo/Logo-blanc.png" alt="Logo" width={200} height={50} />
      <h1 className="title">Votre plateforme de partage et d&apos;échange autour des livres</h1>
      <AboutUsBtn/>
    </header>
  );
}
