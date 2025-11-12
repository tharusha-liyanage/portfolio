import React from "react";
import { PROJECTS_DATA } from "../data/projects";
import { Github } from "lucide-react";
import { Card } from "../data/card";

const PROJECTS = PROJECTS_DATA;

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-transparent w-full">
      <div className="px-6 sm:px-10 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-10 text-center relative">
          <span className="font-serif italic text-gray-300">My</span>{" "}
          <span className="text-[#8e2489ff]">recent works</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#a949a8ff] rounded-full mt-4"></div>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.title}
              delay={index * 100}
              className="!bg-[#2a2a2a]/80 border border-[#4a4a4a]/50 
                         hover:translate-y-[-5px] hover:shadow-[#f755e7ff]/40 
                         hover:border-[#a955f7] transition duration-300 
                         !p-0 overflow-hidden rounded-2xl backdrop-blur-md"
            >
              {/* Project Image */}
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-55 object-cover"
              />

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-[#86277fff]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 bg-[#a02b8aff]/80 text-white rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#b41ca9ff] hover:text-[#ffb0fcff] 
                               transition-colors duration-300 text-sm font-semibold pt-2"
                  >
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
