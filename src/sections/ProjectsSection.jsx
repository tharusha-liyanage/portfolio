import React, { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Github } from "lucide-react";
import { PROJECTS_DATA } from "../data/projects";

gsap.registerPlugin(Flip, ScrollTrigger);

const PROJECT_FILTERS = ["All", "Full-Stack", "AI/Research", "Front-End"];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const flipStateRef = useRef(null);
  const previousProjectsRef = useRef(PROJECTS_DATA);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = PROJECTS_DATA.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(".project-card", { autoAlpha: 0, y: 50 });
    gsap.set(".project-filters", { autoAlpha: 0, y: 16 });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    })
      .to(".project-filters", { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
      .to(".project-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
  }, { scope: sectionRef });

  useLayoutEffect(() => {
    const flipState = flipStateRef.current;
    if (!flipState) return;

    const previousTitles = new Set(previousProjectsRef.current.map((project) => project.title));
    const enteringCards = Array.from(sectionRef.current.querySelectorAll(".project-card"))
      .filter((card) => !previousTitles.has(card.dataset.projectTitle));

    Flip.from(flipState, {
      duration: 0.6,
      ease: "power2.inOut",
      absolute: true,
      onEnter: (elements) => gsap.fromTo(
        elements,
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.05, ease: "power2.out" }
      ),
    });

    if (enteringCards.length) {
      gsap.fromTo(
        enteringCards,
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.35, stagger: 0.05, ease: "power2.out" }
      );
    }

    previousProjectsRef.current = visibleProjects;
    flipStateRef.current = null;
  }, [activeFilter, visibleProjects]);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;

    const cardsToRemove = Array.from(sectionRef.current.querySelectorAll(".project-card"))
      .filter((card) => filter !== "All" && card.dataset.category !== filter);

    const applyFilter = () => {
      flipStateRef.current = Flip.getState(".project-card");
      setActiveFilter(filter);
    };

    if (cardsToRemove.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(cardsToRemove, {
        autoAlpha: 0,
        scale: 0.95,
        duration: 0.25,
        stagger: 0.03,
        onComplete: applyFilter,
      });
    } else {
      applyFilter();
    }
  };

  const handleCardMouseEnter = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = event.currentTarget;
    gsap.to(card, {
      y: -10,
      boxShadow: "0 28px 60px rgba(54, 50, 91, 0.22)",
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(card.querySelector(".project-image"), {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleCardMouseLeave = (event) => {
    const card = event.currentTarget;
    gsap.to(card, {
      y: 0,
      boxShadow: "0 18px 48px rgba(54, 50, 91, 0.08)",
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(card.querySelector(".project-image"), {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const renderProjectLink = (project, type) => {
    const isSource = type === "Source Code";
    const href = isSource ? project.github : project.liveDemo;
    const className =
      "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition " +
      (href
        ? "border-violet-200 bg-white/80 text-violet-800 hover:border-violet-400 hover:bg-violet-50"
        : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400");

    if (!href) {
      return (
        <button key={type} type="button" className={className} disabled>
          {type}
        </button>
      );
    }

    return (
      <a
        key={type}
        href={href}
        data-magnetic
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {type}
        {isSource ? <Github className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </a>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-speed="-0.035"
      className="section-shell relative overflow-hidden py-20 lg:py-28"
    >
      <div data-speed="0.14" className="absolute right-[-2rem] top-0 h-80 w-80 rounded-full bg-violet-600/12 blur-[120px]" />
      <div data-speed="-0.12" className="absolute left-[-3rem] bottom-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="section-heading mb-10">
          <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="project-filters mb-10 flex flex-wrap justify-center gap-3">
          {PROJECT_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => handleFilterChange(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-violet-600 bg-violet-600 text-white shadow-md"
                  : "border-violet-200 bg-white/80 text-violet-800 hover:border-violet-400 hover:bg-violet-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              data-project-title={project.title}
              data-category={project.category}
              className="project-card light-card group relative flex h-full flex-col overflow-hidden rounded-[28px] transition-[border-color] duration-300 hover:border-violet-300"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 via-transparent to-cyan-100/50 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="relative h-60 overflow-hidden border-b border-violet-100 bg-violet-50">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="project-image h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition duration-300 group-hover:text-violet-700">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {renderProjectLink(project, "Source Code")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/tharusha-liyanage"
            data-magnetic
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-7 py-3 text-sm font-semibold text-violet-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50"
          >
            See More on GitHub <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
