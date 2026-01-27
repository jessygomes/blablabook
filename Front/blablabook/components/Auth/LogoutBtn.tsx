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
        className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md bg-quater text-white font-medium transition-colors duration-300"
      >
        <span className="material-icons text-xs">logout</span>
        {/* Se déconnecter */}
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
