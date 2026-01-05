import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="wrapper bg-primary text-white py-16 flex justify-center items-center">
      <Image src="/logo/Logo-blanc.png" alt="Logo" width={200} height={50} />
    </footer>
  );
}
