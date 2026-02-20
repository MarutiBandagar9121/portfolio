import { useState } from "react";
import {RiMenuLine} from "@remixicon/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-950 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Maruti.Bandagar</h1>
        <div className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <RiMenuLine size={24} />
        </button>
      </div>
    </nav>
  );
}
