import React from "react";
import { HERO_DATA } from "../data/hero";

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white/75 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} {HERO_DATA.name}. Built with React and Tailwind CSS.
      </div>
    </footer>
  );
}
