// src/components/ExperienceSection.jsx
import React from "react";
import { EXPERIENCE_DATA } from "../data/experience";
import { GraduationCap, Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-[#1b0416ff] overflow-hidden">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Purple Glow (Top Left) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[128px]" />
        {/* Blue Glow (Bottom Right) */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]" />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* ================= TIMELINE CONTAINER ================= */}
        <div className="relative">
          
          {/* THE VERTICAL LINE (SPINE) */}
          {/* Hidden on mobile, centered on desktop */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#4b0e3fff] rounded-full opacity-30"></div>

          <div className="space-y-12 md:space-y-20">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem key={index} data={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= SUB-COMPONENT: THE TIMELINE CARD =================
function TimelineItem({ data, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. THE CONTENT CARD (Width 50%) */}
      <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
        <div className="group relative">
            
          {/* LIGHTNING HOVER EFFECT (The Glow Behind) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
          
          {/* THE CARD ITSELF */}
          <div className="relative p-6 sm:p-8 bg-[#12071f] border border-white/10 rounded-2xl shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl">
            
            {/* Date Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-4">
              <Calendar className="w-3 h-3" />
              {data.date}
            </div>

            {/* Title & Institution */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base mb-4">
              {data.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              <span>{data.institution}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                 <MapPin className="w-3 h-3" /> {data.location || "Sri Lanka"}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-purple-500/30 pl-4">
              {data.description}
            </p>

          </div>
          
          {/* Little Arrow pointing to center */}
          <div className={`hidden md:block absolute top-8 w-4 h-4 bg-[#12071f] border-t border-l border-white/10 transform rotate-45 z-20 ${
            isEven ? "-right-2 border-r-0 border-b-0" : "-left-2 border-t border-l"
          }`}></div>
        </div>
      </div>

      {/* 2. THE CENTER NODE (The Dot) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0a0a0a] z-20 shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
        {/* Pulsing Ring */}
        <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* 3. EMPTY SPACE (Width 50%) - For Layout Balance */}
      <div className="hidden md:block w-1/2"></div>
      
    </motion.div>
  );
}