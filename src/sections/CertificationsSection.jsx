import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const CERTIFICATION_PLATFORMS = [
  { name: "IBM", description: "Professional Certifications", accent: "text-blue-700 dark:text-blue-400" },
  { name: "Coursera", description: "Courses & Certificates", accent: "text-blue-600 dark:text-blue-400" },
  { name: "LinkedIn Learning", description: "Learning Certificates", accent: "text-sky-700 dark:text-sky-400" },
  { name: "SLIIT", description: "Stage 1 Certification", accent: "text-orange-600 dark:text-orange-400" },
  { name: "University of Moratuwa", description: "CODL Certificate", accent: "text-purple-700 dark:text-purple-400" },
];

export const CERTIFICATIONS = [
  { title: "Spring Framework for Java Development", platform: "SkillUp, Coursera" },
  { title: "Developing Back-End Apps with Node.js and Express", platform: "IBM, Coursera" },
  { title: "Agile Software Development", platform: "LinkedIn Learning" },
  { title: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep", platform: "LinkedIn Learning" },
  { title: "AI/ML Engineer Stage 1", platform: "SLIIT" },
  { title: "Develop Generative AI Applications", platform: "IBM, Coursera" },
  { title: "Build RAG Applications", platform: "IBM, Coursera" },
  { title: "Generative AI: Prompt Engineering Basics", platform: "IBM, Coursera" },
  { title: "Learning Docker", platform: "LinkedIn Learning" },
  { title: "Build REST APIs with FastAPI", platform: "LinkedIn Learning" },
  { title: "Front-End Web Development", platform: "CODL, University of Moratuwa" },
  { title: "Python for beginners", platform: "CODL, University of Moratuwa" },
];

// Helper to match the certificate's platform string to the platform's accent color
const getPlatformAccent = (platformString) => {
  const platform = CERTIFICATION_PLATFORMS.find((p) => 
    platformString.includes(p.name) || 
    (p.name === "University of Moratuwa" && platformString.includes("Moratuwa"))
  );
  return platform ? platform.accent : "text-slate-600 dark:text-slate-400";
};

function CertificationGroup({ duplicate = false }) {
  return (
    <div
      className="certification-marquee-group flex w-max shrink-0 gap-5 pr-5"
      aria-hidden={duplicate}
    >
      {CERTIFICATIONS.map((cert, index) => (
        <div
          key={`${cert.title}-${index}`}
          className="flex w-80 shrink-0 flex-col justify-center gap-2 rounded-2xl px-6 py-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 hover:shadow-lg transition-shadow duration-300"
        >
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {cert.title}
          </span>
          <span className={`text-sm font-semibold ${getPlatformAccent(cert.platform)}`}>
            {cert.platform}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CertificationsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Pauses animation on hover for better readability
    const marqueeAnimation = gsap.to(".certification-marquee-group", {
      xPercent: -100,
      duration: 35, // Adjusted for a slower, smoother read
      ease: "none",
      repeat: -1,
    });

    const marqueeContainer = sectionRef.current.querySelector(".marquee-container");
    
    marqueeContainer.addEventListener("mouseenter", () => marqueeAnimation.pause());
    marqueeContainer.addEventListener("mouseleave", () => marqueeAnimation.play());

    return () => {
      marqueeContainer.removeEventListener("mouseenter", () => marqueeAnimation.pause());
      marqueeContainer.removeEventListener("mouseleave", () => marqueeAnimation.play());
    };
  }, { scope: sectionRef });

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="services-heading section-heading mb-16">
          <h2 data-speed="0.06" className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
             Certifications <span className="text-gradient">& Learning</span>
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="marquee-container overflow-hidden" role="region" aria-label="Certifications">
          <div className="flex w-max">
            <CertificationGroup />
            <CertificationGroup duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}