import React from "react";
import { PROJECTS_DATA } from "../data/projects"; 
import { Github } from "lucide-react";
import { Card } from "../data/card";
const PROJECTS = PROJECTS_DATA;

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-transparent"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            {/* Updated Title to match 'About Me' style */}
            <h2 className="text-4xl font-bold text-white mb-10 text-center md:text-left">
                <span className="font-serif italic text-gray-300">My</span> <span className="text-[#a955f7]">recent works</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <Card 
                        key={project.title} 
                        delay={index * 100} 
                        className="!bg-[#2a2a2a] border border-[#4a4a4a]/50 hover:translate-y-[-5px] hover:shadow-[#a955f7]/40 hover:border-[#a955f7] transition duration-300 !p-0 overflow-hidden" // Override Card style
                    >
                        {/* Project Image */}
                        <img 
                            src={project.imageSrc} 
                            alt={project.title} 
                            className="w-full h-48 object-cover" 
                        />
                        
                        {/* Project Content */}
                        <div className="p-6 space-y-4"> {/* Add padding back for content */}
                            <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-[#c084fc]">{project.title}</h3>
                            <p className="text-gray-400 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="text-xs font-medium px-3 py-1 bg-[#a955f7]/80 text-white rounded-md"> {/* Updated tag style */}
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#c084fc] hover:text-[#e0b0ff] transition-colors duration-300 text-sm font-semibold pt-2"> {/* Added pt-2 for spacing */}
                                    View Code
                                    <Github className="w-4 h-4 ml-2" />
                                </a>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
