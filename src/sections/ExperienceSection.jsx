import React from "react";
import { GraduationCap } from "lucide-react";
import { EXPERIENCE_DATA } from "../data/experience";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../data/card";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-[#2a1a3e]/50">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionTitle
          icon={<GraduationCap className="w-6 h-6" />}
          title="Education"
        />
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <TimelineItem data={item} delay={index * 150} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
