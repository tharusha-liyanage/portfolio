import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const spine = section.querySelector(".timeline-spine");

    gsap.fromTo(spine, { height: 0 }, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    section.querySelectorAll(".timeline-item").forEach((item) => {
      const direction = item.dataset.side === "right" ? 1 : -1;

      gsap.fromTo(
        item,
        { x: direction * 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="experience" ref={sectionRef} data-speed="-0.035" className="section-shell relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-20">
      <div data-speed="0.14" className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div data-speed="-0.12" className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="section-heading mb-16">
          <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Education & <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-spine absolute left-8 top-0 h-0 w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/60 via-cyan-500/60 to-transparent md:left-1/2" />

          <div className="space-y-10 md:space-y-16">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem
                key={`${item.title}-${index}`}
                data={item}
                index={index}
                side={index % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ data, index, side }) {
  const isEven = index % 2 === 0;

  return (
    <div data-side={side} className={`timeline-item relative flex flex-col items-center md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}>
      <div className="w-full pb-2 pl-16 md:w-1/2 md:px-12 md:pb-0">
        <div className="light-card relative rounded-[24px] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 md:p-8">
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-violet-100/70 via-transparent to-cyan-100/70 opacity-0 transition duration-300 hover:opacity-100" />
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-800">
              <Calendar className="h-3.5 w-3.5" />
              {data.date}
            </div>

            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">{data.title}</h3>
            <div className="mb-4 text-sm text-slate-300">
              <div className="flex flex-wrap items-center gap-2">
                {data.type === "work" ? <Briefcase className="h-4 w-4 text-cyan-300" /> : <GraduationCap className="h-4 w-4 text-violet-300" />}
                <span>{data.institution}</span>
                {data.location && (
                  <>
                    <span className="hidden sm:inline text-slate-500">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {data.location}
                    </span>
                  </>
                )}
              </div>
              {data.cgpa && <p className="mt-1 pl-6">{data.cgpa}</p>}
            </div>

            {Array.isArray(data.description) ? (
              <ul className="list-disc space-y-1 border-l-2 border-violet-300 pl-8 text-sm leading-relaxed text-slate-600 sm:text-base">
                {data.description.map((point) => <li key={point}>{point}</li>)}
              </ul>
            ) : (
              <p className="border-l-2 border-violet-300 pl-4 text-sm leading-relaxed text-slate-600 sm:text-base">{data.description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="absolute left-8 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center md:left-1/2">
        <div className="h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow-[0_0_18px_rgba(8,145,178,0.3)]" />
        <div className="absolute h-9 w-9 animate-ping rounded-full border border-cyan-500/25 bg-cyan-400/10" />
      </div>

      <div className="hidden w-1/2 md:block" />
    </div>
  );
}