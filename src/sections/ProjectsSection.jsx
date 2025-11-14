// src/components/ProjectsSection.jsx
import React from "react";
import { PROJECTS_DATA } from "../data/projects";
import { Github, ExternalLink, Layers, ArrowRight } from "lucide-react";
import { Card } from "../data/card";

const PROJECTS = PROJECTS_DATA;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-10 lg:py-28 bg-[#290527ff] overflow-hidden"
    >
      {/* ================= BACKGROUND LIGHTNING EFFECTS ================= */}
      {/* Purple Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      {/* Cyan Glow (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="mx-auto px-6 sm:px-10 lg:px-16 relative z-10 max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
           
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.title}
              delay={index * 150}
              className="group relative rounded-2xl bg-[#12071f] border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
            >
              {/* --- LIGHTNING HOVER BORDER EFFECT --- */}
              {/* Hidden by default, appears as a blurred glowing rim on hover */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500" />
              {/* Dark background to cover the center of the glow */}
              <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-2xl z-10" />

              {/* --- CARD CONTENT --- */}
              <div className="relative z-20 flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-xl border-b border-white/5">
                  <img
                    src={project.imageSrc} // Changed from project.image to project.imageSrc based on your code
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                    {/* Floating Action Buttons */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 p-3 bg-white text-black rounded-full hover:bg-cyan-400 hover:scale-110 shadow-lg"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {/* If you have a live demo link in your data, add it here similarly */}
                  </div>
                </div>

                {/* Text Content Area */}
                <div className="p-6 flex flex-col flex-grow bg-[#0a0a0a]">
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-cyan-200 bg-cyan-900/20 border border-cyan-500/20 rounded-md hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Link (View Project) */}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      View Project 
                      <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Optional 'Show More' Button at bottom */}
        <div className="mt-16 text-center">
            <a 
                href="https://github.com/YOUR_GITHUB_USERNAME" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:scale-105 backdrop-blur-md"
            >
                See More on GitHub <Github className="w-4 h-4" />
            </a>
        </div>

      </div>
    </section>
  );
}