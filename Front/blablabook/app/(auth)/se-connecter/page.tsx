import Login from "@/components/Auth/Login";
import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <section className="bg-white pb-10 flex flex-col items-center justify-center">
      <div className="text-noir">
        <Image
          src="/logo/Logo-bleu.png"
          alt="Blablabook Logo"
          width={200}
          height={100}
        />
      </div>
      <div className="h-px w-40 bg-quater my-2" />
      <div className="w-full">
        <Login />
      </div>
    </section>
  );
}
