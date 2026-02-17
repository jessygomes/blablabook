"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
  confirmText?: string;
  cancelText?: string;
  isDangerous?: boolean;
  children?: ReactNode;
}

export default function Modal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  isLoading = false,
  confirmText = "Confirmer",
  cancelText = "Annuler",
  isDangerous = false,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-md transition-all duration-300">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-4 p-8 animate-fade-in border border-quater/10">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-quater font-one">{title}</h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">{message}</p>

        {children && <div className="mb-8">{children}</div>}

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="cursor-pointer px-6 py-2.5 rounded-lg bg-second hover:bg-second/80 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-one"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`cursor-pointer px-6 py-2.5 rounded-lg text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-one ${
              isDangerous
                ? "bg-quater hover:bg-quater/90 shadow-lg hover:shadow-quater/30"
                : "bg-quater hover:bg-quater/90 shadow-lg hover:shadow-quater/30"
            }`}
          >
            {isLoading ? "Chargement..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
