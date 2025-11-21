// src/components/SkillsSection.jsx
import React from "react";
import { SKILLS_DATA } from "../data/skills";
import { SectionTitle } from "../data/SectionTitle"; // Assuming this component is available
import { Card } from "../data/card"; // Assuming this is a framer-motion component
import TechIcon from "../data/TechIcon";

const SKILLS = SKILLS_DATA;

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* ================= BACKGROUND EFFECTS ("Lightning") ================= */}
      {/* Cyan Glow (Left) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse" />
      {/* Purple Glow (Right) */}
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse delay-700" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="mx-auto px-6 sm:px-10 lg:px-16 relative z-10 max-w-7xl">
        
        {/* Styled Section Title */}
        <div className="relative mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tech Stack</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
        </div>
        {/* Note: If your <SectionTitle> component *already* looks like the one above, 
          you can just use this instead:
          <SectionTitle title="My Tech Stack" />
        */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-10 ">
          {SKILLS.map((skill, index) => (
            <Card
              key={skill.name}
              delay={index * 100} // This delay enables the staggered animation on scroll (mobile-friendly)
              className="group 
                         bg-[#3a0c38ff] backdrop-blur-lg border border-white/10 
                         rounded-2xl p-4 sm:p-6 
                         transition-all duration-300
                         hover:scale-105 hover:bg-[#590a55ff] 
                         hover:shadow-xl hover:shadow-purple-500/30"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div
                  className="transition-transform duration-300 group-hover:scale-125 animate-float"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Icon with dynamic color */}
                  <TechIcon name={skill.name} className={`w-12 h-12 ${skill.color}`} />
                </div>
                <p className="text-base sm:text-lg font-semibold text-white text-center">
                  {skill.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}