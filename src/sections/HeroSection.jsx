import React, { useRef, useState } from "react";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HERO_DATA } from "../data/hero";
import { TypeAnimation } from "react-type-animation";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nameLine = ".hero-name";
    const role = ".hero-role";
    const description = ".hero-description";
    const buttons = ".hero-actions > a, .hero-socials > a";
    const portrait = ".hero-portrait";

    gsap.set([role, description, buttons, portrait], {
      autoAlpha: 0,
      y: 32,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(nameLine, { autoAlpha: 0, y: 50 }, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(role, { autoAlpha: 1, y: 0, duration: 0.7 })
      .to(description, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.35")
      .to(portrait, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, "-=0.35")
      .to(buttons, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15 });

    const orb = ".hero-orb";
    gsap.to(orb, {
      yPercent: 10,
      xPercent: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 9,
      stagger: 0.5,
    });
    gsap.to(".hero-ring", {
      rotate: 360,
      duration: 32,
      repeat: -1,
      ease: "none",
    });
  }, { scope: sectionRef });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="section-shell relative flex min-h-screen items-center overflow-hidden bg-white pb-16 pt-20 dark:bg-[#0B0F19] sm:pt-24 md:pt-28"
    >
      <div className="hero-orb absolute -left-20 top-8 h-64 w-64 rounded-full bg-violet-300/35 blur-[120px]" />
      <div className="hero-orb absolute bottom-10 right-[-3rem] h-72 w-72 rounded-full bg-cyan-200/45 blur-[120px]" />
      <div className="hero-background absolute inset-0" />
      <div className="hero-ring pointer-events-none absolute right-[8%] top-[18%] hidden h-80 w-80 rounded-full border border-dashed border-violet-300/30 lg:block" />
      <div className="hero-ring pointer-events-none absolute right-[12%] top-[22%] hidden h-64 w-64 rounded-full border border-cyan-300/25 lg:block" />
      <div className="hero-grid-pattern absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-10">
          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <div className="hero-intro inline-flex items-center rounded-full border border-violet-300/50 bg-white/75 px-4 py-2 shadow-[0_8px_28px_rgba(117,68,216,0.11)] backdrop-blur-md">
              <span className="text-sm font-medium tracking-[0.12em] text-violet-700 uppercase">Welcome to my portfolio</span>
            </div>

            <div className="mt-6 space-y-3">
              <h1 className="hero-name text-4xl font-black tracking-[-0.06em] text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I&apos;m <br className="hidden lg:block" />
                <span className="text-gradient">{HERO_DATA.name}</span>
              </h1>

              <h2 className="hero-role flex min-h-[3rem] items-center justify-center gap-2 text-xl font-light text-slate-600 sm:text-2xl md:text-3xl lg:justify-start">
                <span>I am a</span>
                <TypeAnimation
                  sequence={["Software Engineer", 2000, "Full-Stack Developer", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold text-cyan-700"
                />
              </h2>
            </div>

            <p className="hero-description mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:mx-0">
              Building seamless web experiences with modern technologies. Let&apos;s turn your ideas into reality.
            </p>

            <div className="hero-actions mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(117,68,216,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_36px_rgba(117,68,216,0.3)]"
              >
                My Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={HERO_DATA.cvLink}
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-violet-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-violet-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-violet-500/0 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative inline-flex items-center gap-2">Download CV <Download className="h-4 w-4" /></span>
              </a>
            </div>

            <div className="hero-socials mt-8 flex items-center justify-center gap-5 lg:justify-start">
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-violet-200 bg-white/75 p-3 text-violet-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50"
                aria-label="GitHub profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-200 bg-white/75 p-3 text-cyan-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hero-portrait relative flex w-full items-center justify-center lg:w-2/5">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.18),_rgba(34,211,238,0.12),_transparent_65%)] blur-2xl" />
            <div className="float-gently relative overflow-hidden rounded-full border border-violet-200 bg-white/80 p-2 shadow-[0_18px_55px_rgba(117,68,216,0.18)]">
              <img
                src={HERO_DATA.imageSrc}
                alt={HERO_DATA.name}
                className={`h-64 w-64 rounded-full object-cover border border-white/80 transition-all duration-500 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] ${
                  isHovering ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}