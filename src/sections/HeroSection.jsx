import React from "react";
import { Github, Linkedin, Download } from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { SKILLS_DATA as SKILLS } from "../data/skills";
import TechIcon from "../data/techicon";
import { useState } from "react";


export default function HeroSection() {
      const [isHovering, setIsHovering] = useState(false);

  return (
     <section id="home" className="pt-24 pb-12 md:py-32 bg-transparent relative overflow-hidden"> {/* Updated bg */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="md:w-3/5 text-center md:text-left space-y-6">
                        <div className="text-xl text-[#c084fc] font-semibold transition-opacity duration-1000 delay-300 opacity-100 animate-fadeIn"> {/* Updated color */}
                            Hi, I'm
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-slideInLeft">
                            {HERO_DATA.name}
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-gray-300 animate-slideInLeft delay-100">
                            {HERO_DATA.tagline}
                        </h2>
                        {/* Removed the <p> description from here */}
                        <div className="flex justify-center md:justify-start space-x-4 pt-6 animate-fadeIn delay-700">
                            {/* Updated buttons to match Figma */}
                            <a href="#projects"
                                className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                                My Work
                            </a>
                            <a href={HERO_DATA.cvLink} download
                                className="px-6 py-3 bg-[#a955f7] text-white font-semibold rounded-full hover:bg-[#a955f7]/90 transition-all duration-300 transform hover:scale-105 flex items-center">
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div
                        className="mt-10 md:mt-0 md:w-2/5 flex justify-center animate-slideInRight"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className="relative p-2 bg-[#a955f7]/30 rounded-full transition-all duration-500 hover:ring-8 hover:ring-[#a955f7]/20"> {/* Updated colors */}
                            <img
                                src={HERO_DATA.imageSrc}
                                alt={HERO_DATA.name}
                                className={`w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#1a0b2c] transition-transform duration-500 ${isHovering ? 'scale-105 shadow-2xl shadow-[#a955f7]/50' : ''}`}
                            />
                            {/* Animated Skills */}
                            {SKILLS.slice(0, 4).map((skill, index) => (
                                <div key={skill.name} className={`absolute p-2 rounded-full bg-[#1a0b2c] border border-[#5a3a7b]/50 transition-all duration-500 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} // Updated colors
                                    style={{
                                        top: ['10%', '50%', '50%', '80%'][index],
                                        left: ['20%', '10%', '80%', '70%'][index],
                                        transform: `translate(${isHovering ? 0 : 50}px, ${isHovering ? 0 : 50}px) rotate(${isHovering ? 0 : 45}deg)`,
                                    }}
                                >
                                    <TechIcon name={skill.name} className={`w-8 h-8 ${skill.color}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover opacity-10" style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/ffffff?text=Abstract+Lines')" }}></div>
        </section>
  );
}
