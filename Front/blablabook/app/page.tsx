
"use client";
import BookLists from "@/components/Home/BookLists";
import { useState } from "react";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="wrapper">
			 <BookLists />
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
