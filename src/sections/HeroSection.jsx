// src/components/HeroSection.jsx
import React, { useState } from "react";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pt-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* ================= CSS ANIMATIONS ================= */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #c084fc, #e879f9, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* 1. Main Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#1a0b2e] to-black z-0" />

      {/* 2. Animated "Lightning" Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse delay-700" />

      {/* 3. Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
            
            {/* Intro Tag */}
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md animate-fadeIn">
              <span className="text-purple-300 font-medium tracking-wide text-sm sm:text-base">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Name & Roles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-slideInLeft">
                Hi, I'm <br className="hidden lg:block" />
                <span className="text-gradient">{HERO_DATA.name}</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400 animate-slideInLeft delay-100 h-[50px]">
                I am a{" "}
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold text-cyan-400"
                />
              </h2>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Building seamless web experiences with modern technologies. 
              Let's turn your ideas into reality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-fadeIn delay-700">
              {/* Primary Button */}
              <a
                href="#projects"
                className="group relative px-8 py-3.5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* Secondary Button */}
              <a
                href={HERO_DATA.cvLink}
                download
                className="relative px-8 py-3.5 text-white font-semibold rounded-full overflow-hidden group border border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105 bg-white/5 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                   Download CV <Download className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-gray-400">
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077b5] transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.5)]"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="w-full lg:w-2/5 flex justify-center relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Image Container with Glow/Lightning Border */}
            <div className="relative animate-float">
              {/* The Glow Effect behind image */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur opacity-70 transition-opacity duration-500 ${isHovering ? "opacity-100 blur-md" : "opacity-70"}`}></div>
              
              {/* The Image Itself */}
              <div className="relative rounded-full p-1 bg-[#1a0b2e]">
                <img
                  src={HERO_DATA.imageSrc}
                  alt={HERO_DATA.name}
                  className={`w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-white/10 shadow-2xl transition-transform duration-500 ${
                    isHovering ? "scale-105 grayscale-0" : "grayscale-[10%]"
                  }`}
                />
              </div>

              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}