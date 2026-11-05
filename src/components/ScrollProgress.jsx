import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 24;

export default function ScrollProgress() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useGSAP(() => {
    gsap.set(circleRef.current, { strokeDasharray: CIRCLE_CIRCUMFERENCE });
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: CIRCLE_CIRCUMFERENCE },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      <svg
        className="pointer-events-none absolute -inset-1 h-16 w-16 -rotate-90"
        viewBox="0 0 56 56"
        aria-hidden="true"
      >
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-300/70 dark:text-slate-700"
        />
        <circle
          ref={circleRef}
          cx="28"
          cy="28"
          r="24"
          fill="none"
          stroke="url(#scroll-progress-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="scroll-progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <button
        type="button"
        aria-label="Back to top"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-violet-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:scale-105 hover:border-violet-400 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
