// src/components/ServicesSection.jsx
import React from "react";
import { SERVICES_DATA } from "../data/services";
import { Briefcase, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Card } from "../data/card";

const SERVICES = SERVICES_DATA;

export default function ServicesSection() {
  return (
    <section 
      id="services" 
      className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* Pink/Purple Glow (Center-Left) */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
      {/* Blue/Cyan Glow (Bottom-Right) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]" />
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="mx-auto px-6 sm:px-10 lg:px-16 relative z-10 max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Do Best</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* ================= CARDS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={service.title}
              delay={index * 150}
              className="group relative overflow-hidden rounded-3xl bg-[#12071f] border border-white/5 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-2"
            >
              {/* Hover Gradient Effect inside Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-8 flex flex-col h-full z-10">
                
                {/* Top Row: Icon & Arrow */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {/* Render the icon passed in data, styling it dynamically */}
                    <div className="text-purple-400 group-hover:text-white transition-colors">
                       {/* If service.icon is a component, we clone it to add classes, 
                           or you can just wrap it in a div styled with text color */}
                       {service.icon}
                    </div>
                  </div>
                  
                  {/* Decorative Arrow */}
                  <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-purple-500/30 transition-colors"></div>

                {/* Features List - Pushed to bottom */}
                <ul className="mt-auto space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-purple-500/70 group-hover:text-purple-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}