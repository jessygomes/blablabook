"use client";

import { useState } from "react";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="wrapper">
				<p className="font-one bg-quater">
					Le texte est bon ? LE TEXTE EST BON !{" "}
				</p>
				<p className="text-primary bg-tertiary p-2 font-bold font-one">
					Le texte est bon ?{" "}
				</p>
				<button
					onClick={() => setIsModalOpen(true)}
					className="text-quater underline cursor-pointer"
				>
					En savoir plus
				</button>
			</div>

			<AboutUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
