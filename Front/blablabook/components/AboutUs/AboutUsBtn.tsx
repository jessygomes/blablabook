import { useState } from "react";
import AboutUs from "./AboutUs";

export default function AboutUsBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsModalOpen(true)}
        className="text-quater underline cursor-pointer"
      >
        En savoir plus
      </button>
      <AboutUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
