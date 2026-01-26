import { useState } from "react";
import AboutUs from "./AboutUs";

export default function AboutUsBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-white cursor-pointer bg-linear-to-r from-primary to-secondary hover:bg-primary tracking-wider rounded-[5px] text-base font-one font-semibold p-2.5 drop-shadow-md"
      >
        En savoir plus
      </button>
      <AboutUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
