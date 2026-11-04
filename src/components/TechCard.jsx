import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TechIcon from "../data/TechIcon";

export default function TechCard({ skill }) {
  const cardRef = useRef(null);
  const rotateXRef = useRef(null);
  const rotateYRef = useRef(null);

  useGSAP(() => {
    rotateXRef.current = gsap.quickTo(cardRef.current, "rotationX", {
      duration: 0.25,
      ease: "power2.out",
    });
    rotateYRef.current = gsap.quickTo(cardRef.current, "rotationY", {
      duration: 0.25,
      ease: "power2.out",
    });
  }, []);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--pointer-x", `${x * 100}%`);
    card.style.setProperty("--pointer-y", `${y * 100}%`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    rotateXRef.current?.((0.5 - y) * 30);
    rotateYRef.current?.((x - 0.5) * 30);
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    card.style.setProperty("--glare-opacity", "0.15");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(card, { scaleX: 1.05, scaleY: 1.05, duration: 0.25, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.setProperty("--glare-opacity", "0");
    rotateXRef.current?.(0);
    rotateYRef.current?.(0);
    gsap.to(card, { scaleX: 1, scaleY: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      className="skill-card tech-card group relative isolate rounded-2xl border border-gray-200 bg-white p-4 transition-colors duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:p-5"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tech-card-glare pointer-events-none absolute inset-0 rounded-[inherit]" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 transition-colors duration-300 group-hover:scale-110 dark:border-slate-600 dark:bg-slate-700">
          <TechIcon name={skill} className="h-10 w-10" />
        </div>
        <p className="text-base font-semibold text-slate-800">{skill}</p>
      </div>
    </div>
  );
}
