import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const { contextSafe } = useGSAP({ scope: rootRef });

  const handleToggle = contextSafe((event) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const bounds = event.currentTarget.getBoundingClientRect();
    const clientX = event.clientX || bounds.left + bounds.width / 2;
    const clientY = event.clientY || bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    );
    const overlayColor = nextTheme === "dark" ? "#10111c" : "#f7f8fc";
    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set([buttonRef.current, overlayRef.current], { clearProps: "all" });
        isAnimatingRef.current = false;
      },
    });

    timeline
      .set(overlayRef.current, {
        backgroundColor: overlayColor,
        clipPath: `circle(0px at ${clientX}px ${clientY}px)`,
      })
      .to(buttonRef.current, {
        rotation: 180,
        scale: 0.82,
        duration: 0.25,
        ease: "power2.in",
      })
      .to(overlayRef.current, {
        clipPath: `circle(${radius}px at ${clientX}px ${clientY}px)`,
        duration: 0.65,
        ease: "expo.inOut",
      }, "<")
      .call(toggleTheme)
      .to(overlayRef.current, {
        clipPath: `circle(0px at ${clientX}px ${clientY}px)`,
        duration: 0.65,
        ease: "expo.inOut",
      })
      .to(buttonRef.current, {
        rotation: 360,
        scale: 1,
        duration: 0.65,
        ease: "back.out(1.7)",
      }, "<");
  });

  return (
    <div ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        aria-label={`Switch to ${nextTheme} mode`}
        aria-pressed={theme === "dark"}
        title={`Switch to ${nextTheme} mode`}
        className="theme-toggle fixed bottom-24 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 bg-white text-slate-700 shadow-lg transition-colors duration-200 hover:bg-violet-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      >
        {theme === "dark" ? (
          <Sun aria-hidden="true" className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon aria-hidden="true" className="h-5 w-5" />
        )}
      </button>
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[60]"
        aria-hidden="true"
      />
    </div>
  );
}
