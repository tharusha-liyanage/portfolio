import React, { lazy, Suspense, useRef } from "react";
import { BrainCircuit, Code2, Database, Server } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import techOrbAnimation from "../data/tech-orb.json";

gsap.registerPlugin(ScrollTrigger);

const LottieSvg = lazy(() =>
  import("lottie-react").then(({ LottieSvg: LottieComponent }) => ({
    default: LottieComponent,
  }))
);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const tiltXRef = useRef(null);
  const tiltYRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    timeline
      .fromTo(
        [".about-header", ".about-copy"],
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        ".about-skill-card",
        { y: 30, scale: 0.9, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".about-image",
        { x: 50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }
      );

    gsap.to(".about-image-float", {
      y: -15,
      duration: 2.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
    gsap.to(".about-work-badge", {
      scale: 1.05,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    tiltXRef.current = gsap.quickTo(sceneRef.current, "rotationX", {
      duration: 0.6,
      ease: "power3.out",
    });
    tiltYRef.current = gsap.quickTo(sceneRef.current, "rotationY", {
      duration: 0.6,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  const handleSceneMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltXRef.current?.(y * -14);
    tiltYRef.current?.(x * 14);
  };

  const resetSceneTilt = () => {
    tiltXRef.current?.(0);
    tiltYRef.current?.(0);
  };

  return (
    <section id="about" ref={sectionRef} data-speed="-0.035" className="section-shell relative overflow-hidden py-20 lg:py-28">
      <div data-speed="0.14" className="absolute left-[-4rem] top-20 h-80 w-80 rounded-full bg-violet-600/15 blur-[120px]" />
      <div data-speed="-0.1" className="absolute bottom-0 right-[-5rem] h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div data-speed="-0.04" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.09),transparent_20%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.08),transparent_18%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="about-header mb-8">
              <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                About <span className="text-gradient">Me</span>
              </h2>
           </div>

            <div className="about-copy space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                I am a Computer Science and Technology undergraduate at Uva Wellassa University (CGPA: 3.72/4.00), passionate about solving complex problems through innovative software solutions. My experience spans full-stack enterprise applications and specialized research in Agentic AI and multi-agent RAG systems.
              </p>
            </div>

            <div className="about-cards mt-8 grid grid-cols-2 gap-4">
              <div className="about-skill-card light-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50">
                <Code2 className="mb-3 h-8 w-8 text-violet-600" />
                <h4 className="mb-1 text-xl font-semibold text-slate-900">Frontend Magic</h4>
                <p className="text-sm text-slate-300">React, Tailwind, Bootstrap</p>
              </div>

              <div className="about-skill-card light-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50">
                <Server className="mb-3 h-8 w-8 text-cyan-700" />
                <h4 className="mb-1 text-xl font-semibold text-slate-900">Backend Logic</h4>
                <p className="text-sm text-slate-300">Spring Boot, PHP, MERN</p>
              </div>

              <div className="about-skill-card light-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-violet-50">
                <Database className="mb-3 h-8 w-8 text-cyan-700" />
                <h4 className="mb-1 text-xl font-semibold text-slate-900">Databases</h4>
                <p className="text-sm text-slate-300">PostgreSQL, MongoDB, MySQL</p>
              </div>

              <div className="about-skill-card light-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50">
                <BrainCircuit className="mb-3 h-8 w-8 text-violet-600" />
                <h4 className="mb-1 text-xl font-semibold text-slate-900">AI &amp; Tools</h4>
                <p className="text-sm text-slate-300">FastAPI ,Agentic AI, Git</p>
              </div>
            </div>

            <p className="about-quote mt-8 border-l-2 border-violet-400 pl-4 text-slate-600 italic">
              &ldquo;I enjoy problem-solving, teamwork, and learning new tools to build efficient software solutions.&rdquo;
            </p>
          </div>

          <div data-speed="0.08" className="about-image order-1 flex justify-center lg:order-2">
            <div className="about-image-float relative w-full max-w-md" style={{ perspective: "900px", transformStyle: "preserve-3d" }}>
              <div data-speed="0.06" className="absolute inset-6 rounded-[28px] bg-gradient-to-tr from-violet-600/50 via-transparent to-cyan-500/30 blur-2xl" />
              <div data-speed="0.04" className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-3xl border-l-4 border-t-4 border-violet-400/50" />
              <div data-speed="-0.04" className="absolute -bottom-4 -right-4 h-20 w-20 rounded-br-3xl border-b-4 border-r-4 border-cyan-400/50" />
              <div
                ref={sceneRef}
                onMouseMove={handleSceneMouseMove}
                onMouseLeave={resetSceneTilt}
                className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_24px_60px_rgba(54,50,91,0.16)] backdrop-blur-md dark:border-slate-700/70 dark:bg-[#0B0F19]/80"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.2),transparent_62%)]" />
                <Suspense fallback={<div aria-hidden="true" className="relative z-10 aspect-square w-[92%]" />}>
                  <LottieSvg
                    src={techOrbAnimation}
                    autoplay={!window.matchMedia("(prefers-reduced-motion: reduce)").matches}
                    loop
                    aria-hidden="true"
                    className="relative z-10 aspect-square w-[92%] max-w-[440px]"
                  />
                </Suspense>
                <p className="absolute top-6 text-xs font-semibold uppercase tracking-[0.3em] text-violet-700 dark:text-violet-300">
                </p>
                <div className="about-work-badge absolute bottom-5 left-5 rounded-xl border border-violet-100 bg-white/90 px-4 py-2 shadow-md backdrop-blur-md">
                  <p className="text-sm font-medium text-slate-800">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}