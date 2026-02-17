"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { useToast } from "@/components/Toast";
import Modal from "../Modal";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut({ redirect: false });
      showToast("Déconnexion réussie !", "success");
      setIsOpen(false);

      router.refresh();
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      showToast("Une erreur est survenue", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        title="Se déconnecter"
        className="w-full sm:w-fit cursor-pointer group relative flex items-center justify-center gap-2 px-4 py-1.5 sm:py-2.5 rounded-md bg-white border border-noir/10 text-noir hover:border-noir/20 hover:shadow-md hover:scale-105 active:scale-100 font-medium transition-all duration-200 overflow-hidden"
      >
        <span className="material-icons text-[10px] sm:text-[15px]">
          logout
        </span>
        <div className="absolute inset-0 bg-noir/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </button>

      <Modal
        isOpen={isOpen}
        title="Confirmation de déconnexion"
        message="Êtes-vous sûr de vouloir vous déconnecter ?"
        onConfirm={handleLogout}
        onCancel={() => setIsOpen(false)}
        isLoading={isLoading}
        confirmText="Se déconnecter"
        cancelText="Annuler"
        isDangerous
      />
    </>
  );
}
