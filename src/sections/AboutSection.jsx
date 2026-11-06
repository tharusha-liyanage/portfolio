import React, { useRef } from "react";
import { BrainCircuit, Code2, Database, Server } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Helper to wrap words in spans for advanced staggered text animation
const AnimatedText = ({ text, className }) => {
  return (
    <div className={`animated-text-container ${className}`}>
      {text.split(" ").map((word, i) => (
        <div key={i} className="inline-block overflow-hidden pb-1 pr-1.5">
          <span className="animated-word inline-block translate-y-[120%] opacity-0">
            {word}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    // Reveal Header
    tl.fromTo(
      ".about-header-line",
      { width: 0, autoAlpha: 0 },
      { width: "100px", autoAlpha: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ".about-title",
      { y: 30, autoAlpha: 0, rotateX: -20 },
      { y: 0, autoAlpha: 1, rotateX: 0, duration: 0.8, ease: "back.out(1.5)" },
      "-=0.5"
    );

    // Staggered Word Reveal for the expanded paragraph
    tl.to(
      ".animated-word",
      { y: "0%", opacity: 1, duration: 0.6, stagger: 0.015, ease: "power3.out" },
      "-=0.4"
    );

    // Reveal Quote
    tl.fromTo(
      ".about-quote",
      { x: -20, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );

    // Stagger the 4 cards on the right side
    tl.fromTo(
      ".bento-skill-card",
      { y: 40, scale: 0.9, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.2)" },
      "-=0.6"
    );

  }, { scope: sectionRef });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-slate-50 py-24 transition-colors duration-500 dark:bg-[#0A0F1C]"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-multiply dark:mix-blend-screen">
        <div className="absolute -left-20 top-20 h-[30rem] w-[30rem] rounded-full bg-violet-400/20 blur-[100px] dark:bg-violet-600/10" />
        <div className="absolute bottom-0 right-10 h-[25rem] w-[25rem] rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* lg:items-stretch ensures both columns are exactly the same height */}
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="flex h-full flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="mb-8">
                <h2 className="about-title text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl" style={{ transformPerspective: 1000 }}>
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-purple-500">Me</span>
                </h2>
              </div>

              {/* Expanded Paragraph */}
              <AnimatedText 
                text="I am a Computer Science and Technology undergraduate at Uva Wellassa University of Sri Lanka (CGPA: 3.72/4.00), aspiring to build a career as a Software Engineer. I possess a strong foundation in full-stack development, gained through rigorous academic projects and hands-on industry experience. I am passionate about problem-solving, collaborative teamwork, and continuously exploring new technologies to design innovative, high-performance, and user-centric software solutions. My current focus bridges scalable enterprise applications with specialized research in Agentic AI and multi-agent RAG systems."
                className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-300"
              />
            </div>

          </div>

          {/* Right Column: 4 Bento Cards */}
          {/* h-full and content-center stretch the grid to match the left column's height */}
          <div className="order-1 grid h-full grid-cols-1 content-center gap-5 sm:grid-cols-2 lg:order-2">
            
            <div className="bento-skill-card group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-cyan-400/30">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-300 group-hover:bg-cyan-400/40" />
              <Code2 className="mb-4 h-10 w-10 text-cyan-600 dark:text-cyan-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Frontend Magic</h4>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">React, Tailwind, Bootstrap, Next.js</p>
            </div>

            <div className="bento-skill-card group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-violet-400/30">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl transition-all duration-300 group-hover:bg-violet-400/40" />
              <Server className="mb-4 h-10 w-10 text-violet-600 dark:text-violet-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Backend Logic</h4>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Spring Boot, Node.js, PHP</p>
            </div>

            <div className="bento-skill-card group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-emerald-400/30">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl transition-all duration-300 group-hover:bg-emerald-400/40" />
              <Database className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Data Systems</h4>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">PostgreSQL, MongoDB, MySQL</p>
            </div>

            <div className="bento-skill-card group relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none dark:hover:border-rose-400/30">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-rose-400/20 blur-2xl transition-all duration-300 group-hover:bg-rose-400/40" />
              <BrainCircuit className="mb-4 h-10 w-10 text-rose-600 dark:text-rose-400" />
              <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">AI & Architecture</h4>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">FastAPI, Agentic AI, RAG Systems</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}