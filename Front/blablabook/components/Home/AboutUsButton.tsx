"use client";

import { useState } from "react";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutUsButton() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsModalOpen(true)}
				className="text-quater underline cursor-pointer"
			>
				En savoir plus
			</button>

			<AboutUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
}
