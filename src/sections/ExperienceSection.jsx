import React from 'react'
import { GraduationCap } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/experience";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../data/card";
import TimelineItem from "./TimelineItem";



export default function ExperienceSection() {
  return (
     <section id="experience" className="py-16 bg-[#2a1a3e]/50"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            <SectionTitle icon={<GraduationCap className="w-6 h-6" />} title="Education " />
            <div className="max-w-4xl mx-auto space-y-6">
                {EXPERIENCE_DATA.map((item, index) => (
                    <TimelineItem key={index} data={item} delay={index * 150} />
                ))}
                
            </div>
        </div>
    </section>
  )
}
