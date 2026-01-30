"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface AboutUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUs({ isOpen, onClose }: AboutUsProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal content - Mobile: slide from bottom, Desktop: centered */}
      <div className="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50">
        <div className="relative bg-white/95 rounded-t-xl sm:rounded-xl shadow-2xl ring-1 ring-black/5 animate-[slideUp_0.5s_ease-out] sm:animate-[fadeIn_0.3s_ease-out] h-[90vh] sm:max-h-[85vh] w-full sm:max-w-5xl sm:mx-4 overflow-hidden flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-noir/70 hover:text-quater transition-colors z-10 rounded-full p-2 hover:bg-black/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Drag indicator - mobile only */}
          <div className="flex justify-center pt-3 pb-4 sm:hidden">
            <div className="w-12 h-1.5 bg-gray-300/80 rounded-full" />
          </div>

          {/* Content - Compact clear layout */}
          <div className="flex flex-col gap-6 px-5 pb-6 sm:p-8 overflow-y-auto flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-linear-to-br from-primary/20 via-white to-second/20 ring-1 ring-black/10 shadow-sm flex items-center justify-center">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white shadow-inner flex items-center justify-center">
                    <Image
                      src="/logo/Logo-bleu.png"
                      alt="Blablabook Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl sm:text-3xl font-bold text-noir">
                    À propos
                  </h1>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-xl border border-black/5 bg-white shadow-sm p-4 sm:p-5 space-y-3 text-noir/90">
                <p className="text-sm sm:text-base leading-relaxed">
                  Découvrez Blablabook, votre plateforme de partage et
                  d&apos;échange.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
                  dolorum repellat deleniti nesciunt beatae modi doloribus porro
                  rem. Nobis ullam, sint tempore aperiam dolorum aliquid
                  officiis. Ad tenetur reiciendis ipsam optio obcaecati
                  explicabo doloribus necessitatibus quibusdam consectetur.
                  Illum vero fuga quasi mollitia!
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
                  dolorum repellat deleniti nesciunt beatae modi doloribus porro
                  rem.
                </p>
              </div>

              <div className="rounded-xl border border-black/5 bg-white shadow-sm p-4 sm:p-5 space-y-3 text-noir/90">
                <p className="text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
                  dolorum repellat deleniti nesciunt beatae modi doloribus porro
                  rem. Nobis ullam, sint tempore aperiam dolorum aliquid
                  officiis. Ad tenetur reiciendis ipsam optio obcaecati
                  explicabo doloribus necessitatibus quibusdam consectetur.
                  Illum vero fuga quasi mollitia!
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
                  dolorum repellat deleniti nesciunt beatae modi doloribus porro
                  rem. Nobis ullam, sint tempore aperiam dolorum aliquid
                  officiis. Ad tenetur reiciendis ipsam optio obcaecati
                  explicabo doloribus necessitatibus quibusdam consectetur.
                  Illum vero fuga quasi mollitia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
