import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(".services-heading", { autoAlpha: 0, y: -30 });
    gsap.set(".service-card", { autoAlpha: 0, y: 50 });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    })
      .to(".services-heading", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(".service-card", {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)",
      });
  }, { scope: sectionRef });

  const handleCardMouseEnter = (event) => {
    gsap.to(event.currentTarget, {
      scale: 1.03,
      boxShadow: "0 24px 54px rgba(91, 71, 150, 0.2)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardMouseLeave = (event) => {
    gsap.to(event.currentTarget, {
      scale: 1,
      boxShadow: "0 18px 48px rgba(54, 50, 91, 0.08)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="services" ref={sectionRef} className="section-shell relative overflow-hidden py-20 lg:py-28">
      <div className="absolute left-[-4rem] top-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute bottom-8 right-[-3rem] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="services-heading section-heading mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            What I <span className="text-gradient">Do Best</span>
          </h2>
          <div className="section-heading__bar mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              className="service-card light-card group relative overflow-hidden rounded-[28px] p-8 transition duration-300 hover:border-violet-300"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-transparent to-cyan-100/60 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-100 to-cyan-50 p-4 transition duration-300 group-hover:rotate-3 group-hover:scale-105 group-hover:border-violet-300">
                    {service.icon}
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-slate-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-600" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-violet-700">{service.title}</h3>
                <p className="mb-6 text-base leading-relaxed text-slate-300">{service.description}</p>

                <div className="mb-6 h-px w-full bg-violet-100" />

                <ul className="mt-auto space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}