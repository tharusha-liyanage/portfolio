import React from "react";
import { SKILLS_DATA } from "../data/skills";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../data/card";
import TechIcon from "../data/TechIcon";

const SKILLS = SKILLS_DATA;

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-transparent w-full">
      {/* Full width wrapper */}
      <div className="px-6 sm:px-10 lg:px-16">
        <SectionTitle title="My Tech Stack" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 ">
          {SKILLS.map((skill, index) => (
            <Card
              key={skill.name}
              delay={index * 100}
              className="hover:scale-[1.05] hover:rotate-1 hover:shadow-[#df55f7ff]/30 
                         transition duration-300 bg-[#551252ff] backdrop-blur-lg border border-white/10 
                         rounded-2xl p-6"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div
                  className="transition-transform duration-500 hover:scale-125 animate-float"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <TechIcon name={skill.name} className={`w-12 h-12 ${skill.color}`} />
                </div>
                <p className="text-lg font-semibold text-white">{skill.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
