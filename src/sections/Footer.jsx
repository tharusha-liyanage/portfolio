import React from "react";
import { HERO_DATA } from "../data/hero";


export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-[#5a3a7b]/30 py-6"> {/* Updated colors */}
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {HERO_DATA.name}. Built with React & Tailwind CSS.
        </div>
    </footer>
  );
}
