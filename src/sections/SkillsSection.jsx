import React from "react";
import { SKILLS_DATA } from "../data/skills";
const SKILLS = SKILLS_DATA;
import { Code } from "lucide-react";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../components/Card";
import TechIcon from "../data/techicon";


export default function SkillsSection() {
  return (
     <section id="skills" className="py-16 bg-transparent"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            <SectionTitle icon={<Code className="w-6 h-6" />} title="My Tech Stack" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {SKILLS.map((skill, index) => (
                    <Card key={skill.name} delay={index * 100} className="hover:scale-[1.05] hover:rotate-1 hover:shadow-[#a955f7]/30 transition duration-300"> {/* Updated shadow color */}
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <div className="transition-transform duration-500 hover:scale-125 animate-float" style={{ animationDelay: `${index * 150}ms` }}> {/* Added float animation */}
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
