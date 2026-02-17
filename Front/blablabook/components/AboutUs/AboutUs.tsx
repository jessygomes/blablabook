"use client";

import Image from "next/image";
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

          {/* Content */}
          <div className="flex flex-col gap-8 px-6 pb-8 sm:p-12 overflow-y-auto flex-1">
            
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-3xl bg-linear-to-br from-primary/10 via-transparent to-second/10 flex items-center justify-center ring-1 ring-black/5">
                <Image
                  src="/logo/Logo-bleu.png"
                  alt="Blablabook Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-noir tracking-tight">
                  À propos
                </h1>
                <div className="h-1 w-12 bg-primary rounded-full mt-2" />
              </div>
            </div>

            {/* Main Text Content */}
            <div className="max-w-5xl space-y-6 text-noir/80">
              <p className="text-lg sm:text-xl leading-relaxed font-medium text-noir">
                Découvrez Blablabook, l&apos;écrin numérique de votre bibliothèque et le point de rencontre des amoureux des mots.
              </p>
              
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                <p>
                  Sur <span className="font-semibold text-primary">BlaBlaBook</span>, nous sommes convaincus que les livres ne sont pas de simples objets destinés à prendre la poussière, mais des invitations à l&apos;évasion qui ne demandent qu&apos;à être partagées. Notre mission est double : vous offrir un outil intuitif pour organiser votre collection personnelle, tout en créant un pont entre vos lectures et celles de toute une communauté de passionnés.
                </p>
                <p>
                  Plus besoin de chercher des heures le titre de ce roman qui vous a marqué. En quelques clics, recherchez et répertoriez vos ouvrages pour constituer une bibliothèque qui vous ressemble. Mais l&apos;expérience ne s&apos;arrête pas à vos propres étagères : BlaBlaBook vous ouvre les portes des collections d&apos;autres lecteurs.
                </p>
                <p>
                  Parce qu&apos;un livre n&apos;est vraiment achevé que lorsqu&apos;il est discuté, exprimez votre ressenti, laissez vos critiques et laissez-vous guider par les recommandations de la communauté. Que vous soyez amateur de polars haletants, de poésie délicate ou de récits d&apos;apprentissage, vous trouverez ici le compagnon idéal pour votre prochaine nuit de lecture.
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
