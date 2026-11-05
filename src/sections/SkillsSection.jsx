import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TagCloud from "TagCloud";

gsap.registerPlugin(ScrollTrigger);

const ALL_SKILLS = [
  "React", "Next.js", "Tailwind CSS", "Bootstrap", "Node.js", 
  "Spring Boot", "PHP", "Java", "Python", "FastAPI", 
  "PostgreSQL", "MongoDB", "MySQL", "LangChain", 
  "CrewAI", "Pinecone", "Git", "GitHub", "JavaScript", "C"
];

const SKILL_CATEGORIES = [
  {
    name: "Frontend & UI",
    color: "bg-cyan-500",
    gradient: "from-cyan-500 to-blue-500",
    glow: "rgba(6, 182, 212, 0.15)", 
    borderHover: "hover:border-cyan-400/60 dark:hover:border-cyan-400/40",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Shadcn UI"]
  },
  {
    name: "Backend & APIs",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-indigo-500",
    glow: "rgba(168, 85, 247, 0.15)",
    borderHover: "hover:border-purple-400/60 dark:hover:border-purple-400/40",
    skills: ["Node.js", "Spring Boot", "FastAPI", "PHP", "Java", "Python"]
  },
  {
    name: "Databases",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16, 185, 129, 0.15)",
    borderHover: "hover:border-emerald-400/60 dark:hover:border-emerald-400/40",
    skills: ["PostgreSQL (Neon)", "MongoDB", "MySQL", "Pinecone"]
  },
  {
    name: "AI & Agentic Systems",
    color: "bg-rose-500",
    gradient: "from-rose-500 to-orange-500",
    glow: "rgba(244, 63, 94, 0.15)",
    borderHover: "hover:border-rose-400/60 dark:hover:border-rose-400/40",
    skills: ["LangChain", "CrewAI", "OpenAI", "RAG Architecture"]
  }
];

// Interactive Bento Card with Dynamic Mouse Tracking and Theme Support
const GlowCard = ({ category }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`glow-card group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none ${category.borderHover}`}
    >
      {/* Dynamic Hover Spotlight */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${category.glow}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 mb-6 flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${category.color} shadow-[0_0_12px_currentColor] animate-pulse`} />
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2.5">
        {category.skills.map((skill, i) => (
          <span 
            key={i} 
            className="skill-pill-item rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:scale-105 hover:bg-white hover:text-slate-900 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Decorative Gradient Line */}
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${category.gradient}`} />
    </div>
  );
};

export default function AdvancedSkillsSection() {
  const sectionRef = useRef(null);
  const sphereRef = useRef(null);
  const cloudInstance = useRef(null);

  // Initialize the 3D Text Sphere
  useEffect(() => {
    if (!sphereRef.current) return;
    
    if (cloudInstance.current) {
      sphereRef.current.innerHTML = "";
    }

    const radius = window.innerWidth < 768 ? 160 : 260;
    
    // itemClass now fully supports light mode (slate-700) and dark mode (slate-300)
    cloudInstance.current = TagCloud(sphereRef.current, ALL_SKILLS, {
      radius: radius,
      maxSpeed: "fast",
      initSpeed: "normal",
      direction: 135,
      keep: true,
      itemClass: "text-slate-800 dark:text-slate-300 hover:text-purple-600 dark:hover:text-cyan-400 cursor-pointer text-sm md:text-lg font-bold transition-colors duration-300 drop-shadow-md",
    });

    return () => {
      if (cloudInstance.current) cloudInstance.current.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    // Reveal main heading
    tl.fromTo(
      ".section-title",
      { autoAlpha: 0, y: -40, scale: 0.9 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.5)" }
    );

    // Animate the 3D sphere spinning in from the left
    tl.fromTo(
      sphereRef.current,
      { autoAlpha: 0, x: -100, scale: 0.5, rotation: -90 },
      { autoAlpha: 1, x: 0, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.7)" },
      "-=0.5"
    );

    // Stagger the glow cards sliding in from the right
    tl.fromTo(
      ".glow-card",
      { autoAlpha: 0, x: 100, rotateY: 15 },
      { autoAlpha: 1, x: 0, rotateY: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=1.2"
    );

    // Pop-in effect for the individual skill pills inside the cards
    tl.fromTo(
      ".skill-pill-item",
      { autoAlpha: 0, scale: 0 },
      { autoAlpha: 1, scale: 1, duration: 0.4, stagger: { amount: 0.5, from: "random" }, ease: "back.out(2)" },
      "-=0.4"
    );

    // Continuous floating animation for the cards (runs infinitely after load)
    gsap.to(".glow-card", {
      y: -8,
      duration: 2.5,
      stagger: { each: 0.2, from: "random", repeat: -1, yoyo: true },
      ease: "sine.inOut",
      delay: 1, // start after entrance animations
    });

    // Ambient floating for background gradient meshes
    gsap.to(".ambient-mesh", {
      rotation: 360,
      scale: 1.2,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="advanced-skills" 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-slate-50 py-24 transition-colors duration-500 dark:bg-[#0A0F1C]"
    >
      {/* Complex Ambient Animated Background (Works in both modes) */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="ambient-mesh absolute left-[-10%] top-[-10%] h-[50vw] w-[50vw] rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/10" />
        <div className="ambient-mesh absolute bottom-[-10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-purple-400/20 blur-[120px] dark:bg-purple-600/10" />
        <div className="ambient-mesh absolute left-[20%] top-[40%] h-[30vw] w-[30vw] rounded-full bg-rose-400/10 blur-[100px] dark:bg-rose-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="services-heading section-heading mb-16">
          <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
             My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          
          {/* Left Side: 3D Interactive Tag Cloud */}
          <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-start">
            <div 
              ref={sphereRef} 
              className="relative flex h-[350px] w-[350px] items-center justify-center md:h-[550px] md:w-[550px]"
            />
          </div>

          {/* Right Side: Categorized Glow Cards */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-1/2 lg:gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
              <GlowCard key={index} category={category} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}