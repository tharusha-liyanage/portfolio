import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILL_CATEGORIES } from "../data/skills";
import TechCard from "../components/TechCard";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(".skill-category-heading", { autoAlpha: 0, y: 12 });
    gsap.set(".skill-card", { autoAlpha: 0, scaleX: 0.8, scaleY: 0.8 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    timeline
      .to(
        ".skill-category-heading",
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }
      )
      .to(
        ".skill-card",
        {
          autoAlpha: 1,
          scaleX: 1,
          scaleY: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
  }, { scope: sectionRef });

  return (
    <section id="skills" ref={sectionRef} data-speed="-0.035" className="section-shell relative overflow-hidden py-20 lg:py-28">
      <div data-speed="0.14" className="absolute left-[-5rem] top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div data-speed="-0.12" className="absolute bottom-0 right-[-4rem] h-80 w-80 rounded-full bg-violet-500/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="section-heading">
          <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="mt-10 space-y-10">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name}>
              <h3 className="skill-category-heading mb-4 text-xl font-semibold text-slate-800 sm:text-2xl">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6">
                {category.skills.map((skill) => (
                  <TechCard key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}