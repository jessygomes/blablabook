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
				className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-all duration-300 overflow-hidden"
				onClick={onClose}
			/>

			{/* Modal content - Mobile: slide from bottom, Desktop: centered */}
			<div className="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50">
			<div className="relative bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl animate-[slideUp_0.4s_ease-out] sm:animate-[fadeIn_0.3s_ease-out] h-[90vh] sm:max-h-[85vh] w-full sm:max-w-4xl sm:mx-4 overflow-hidden flex flex-col">
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-noir hover:text-quater transition-colors z-10"
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
						<div className="w-12 h-1.5 bg-gray-300 rounded-full" />
					</div>

					{/* Content - Mobile: single column, Desktop: two columns */}
				<div className="flex flex-col sm:flex-row sm:gap-8 px-6 pb-8 sm:p-8 overflow-y-auto flex-1">
						{/* Mobile view */}
						<div className="flex flex-col sm:hidden">
							<h2 className="text-2xl font-bold text-noir mb-6">
								À propos
							</h2>
							<div className="flex flex-col gap-4 w-full">
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
							</div>
              <div className="mt-1">
                <Link href="/mentions-legales" className="text-quater mt-6 underline">Mentions légales</Link>
                <Link href="/politique-de-confidentialite" className="text-quater mt-2 underline ml-4">Politique de confidentialité</Link>
              </div>
						</div>

						{/* Desktop view: two column layout */}
						<div className="hidden sm:flex sm:items-center sm:justify-center sm:flex-1">
							<Image
								src="/logo/Logo-bleu.png"
								alt="Blablabook Logo"
								width={300}
								height={150}
								className="object-contain"
							/>
						</div>

						<div className="hidden sm:block sm:w-px sm:bg-quater" />

						<div className="hidden sm:flex sm:flex-col sm:flex-1 sm:gap-6">
							<h1 className="text-3xl font-bold text-noir">À propos</h1>
							<div className="flex flex-col gap-4">
								<p className="text-noir text-lg leading-relaxed">
									Découvrez Blablabook, votre plateforme de partage et
									d&apos;échange.
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
								</p>
								<p className="text-noir leading-relaxed m-4">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Eaque dolor dolorum reiciendis. Esse, rerum vero neque nihil,
									dolorum repellat deleniti nesciunt beatae modi doloribus porro
									rem. Nobis ullam, sint tempore aperiam dolorum aliquid
									officiis. Ad tenetur reiciendis ipsam optio obcaecati
									explicabo doloribus necessitatibus quibusdam consectetur. Illum
									vero fuga quasi mollitia!
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
