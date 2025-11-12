// src/components/HeroSection.jsx
import React, { useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { SKILLS_DATA as SKILLS } from "../data/skills";
import TechIcon from "../data/TechIcon";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="home"
      className="pt-20 pb-16 md:py-28 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-5 sm:space-y-6">
            <div className="text-2xl sm:text-3xl text-[#8e2489ff] font-semibold animate-fadeIn">
              Hi, I'm
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-slideInLeft">
              {HERO_DATA.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 animate-slideInLeft delay-100">
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
                className="text-2xl sm:text-3xl text-[#be9abdff] font-semibold"
              />
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 animate-fadeIn delay-700">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#fff8f8eb] to-[#a51b83d0] backdrop-blur-md rounded-full text-black font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                My Work
              </a>
              <a
                href={HERO_DATA.cvLink}
                download
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[#9c2089eb] to-[#e063c1d0] backdrop-blur-md text-white font-semibold rounded-full hover:bg-[#a955f7]/90 transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6 animate-fadeIn delay-700">
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 backdrop-blur-md bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg border border-[#a955f7]/30"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 backdrop-blur-md bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="w-full flex justify-center lg:w-2/5"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative p-2 bg-[#8e2489ff]/30 rounded-full transition-all duration-500 hover:ring-8 hover:ring-[#a955f7]/20">
              <img
                src={HERO_DATA.imageSrc}
                alt={HERO_DATA.name}
                className={`w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-[#1a0b2c] transition-transform duration-500 ${
                  isHovering ? "scale-105 shadow-2xl shadow-[#a955f7]/50" : ""
                }`}
              />
              {/* Animated Skills */}
              {SKILLS.slice(0, 4).map((skill, index) => (
                <div
                  key={skill.name}
                  className={`absolute p-2 rounded-full bg-[#1a0b2c] border border-[#5a3a7b]/50 transition-all duration-500 ${
                    isHovering
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  } hidden sm:flex`}
                  style={{
                    top: ["10%", "50%", "50%", "80%"][index],
                    left: ["20%", "10%", "80%", "70%"][index],
                    transform: `translate(${isHovering ? 0 : 50}px, ${
                      isHovering ? 0 : 50
                    }px) rotate(${isHovering ? 0 : 45}deg)`,
                  }}
                >
                  <TechIcon
                    name={skill.name}
                    className={`w-6 h-6 md:w-8 md:h-8 ${skill.color}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
