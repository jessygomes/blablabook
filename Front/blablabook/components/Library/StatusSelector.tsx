"use client";

import React, { useState } from "react";
import { updateUserBookStatus } from "@/lib/actions/userbook.action";

export type StatusType = "READ" | "READING" | "NOT_READ" | string;

function getStatusPreset(status: StatusType) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full text-[12px] font-normal whitespace-nowrap cursor-pointer transition-colors truncate";
  switch (status) {
    case "READING":
      return {
        label: "En cours",
        className: `${base} bg-yellow-200 text-yellow-800 hover:bg-yellow-100`,
      };
    case "READ":
      return {
        label: "Lu",
        className: `${base} bg-green-200 text-green-800 hover:bg-green-100`,
      };
    case "NOT_READ":
      return {
        label: "À lire",
        className: `${base} bg-blue-200 text-blue-800 hover:bg-blue-100`,
      };
    default:
      return {
        label: String(status),
        className: `${base} bg-gray-200 text-gray-800 hover:bg-gray-100`,
      };
  }
}

interface StatusSelectorProps {
  token: string | null;
  userBookId: number | null;
  status: StatusType;
  onUpdated: (newStatus: StatusType) => void;
  onToast?: (message: string, type: "success" | "error") => void;
  triggerClassName?: string;
}

export default function StatusSelector({
  token,
  userBookId,
  status,
  onUpdated,
  onToast,
  triggerClassName = "",
}: StatusSelectorProps) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const handleStatusSelect = async (newStatus: StatusType) => {
    if (!token || !userBookId) {
      onToast?.(
        "Veuillez vous connecter pour gérer votre bibliothèque",
        "error"
      );
      return;
    }
    try {
      setPending(true);
      const result = await updateUserBookStatus(
        userBookId,
        String(newStatus),
        token
      );
      if (result.success) {
        onUpdated(String(newStatus));
        onToast?.(
          result?.message ?? "Statut mis à jour avec succès",
          "success"
        );
        setOpen(false);
      } else {
        onToast?.(result.error ?? "Une erreur est survenue", "error");
      }
    } finally {
      setPending(false);
    }
  };

  const preset = getStatusPreset(status);

  return (
    <>
      <button
        disabled={!userBookId || pending}
        onClick={() => setOpen((v) => !v)}
        className={`${preset.className} ${triggerClassName}`}
      >
        {preset.label}
      </button>

      <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
        {open && (
          <div
            className="absolute inset-0 bg-black/50 transition-opacity rounded-md pointer-events-auto"
            onClick={() => setOpen(false)}
          />
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl transform transition-transform duration-300 pointer-events-auto max-h-full overflow-y-auto ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-noir mb-4">
              Marquer comme
            </h3>
            <div className="space-y-2">
              {[
                { value: "READ", label: "Lecture terminée" },
                { value: "READING", label: "Lecture en cours" },
                { value: "NOT_READ", label: "Pas encore lu" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  disabled={pending}
                  onClick={() => handleStatusSelect(opt.value)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                    status === opt.value
                      ? "border-quater bg-quater/10"
                      : "border-gray-200 hover:border-quater"
                  }`}
                >
                  <span className="font-medium text-noir text-sm">
                    {opt.label}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      status === opt.value
                        ? "border-quater bg-quater"
                        : "border-gray-300"
                    }`}
                  >
                    {status === opt.value && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-full mt-4 p-2 rounded-lg bg-gray-100 text-noir font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
