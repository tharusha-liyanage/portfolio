// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/img3.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 bg-[#551252ff]/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 relative inline-block text-center md:text-left">
              <span className="font-serif italic text-gray-300">About</span>{" "}
              <span className="text-[#8e2489ff]">me</span>
              <div className="absolute left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 w-20 sm:w-24 h-1 bg-[#a949a8ff] rounded-full mt-2"></div>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base sm:text-lg text-center md:text-left">
              <p>
                I am an undergraduate in Computer Science and Technology,
                passionate about becoming a software engineer.
              </p>
              <p>
                I have a solid understanding of full-stack development through
                academic projects and self-learning, using technologies like
                PHP, React, MERN stack, and Spring Boot. I enjoy problem-solving,
                teamwork, and learning new tools to build efficient and
                user-friendly software solutions.
              </p>
            </div>
          </motion.div>

          {/* Right Content: Image with hover effect */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 40px rgba(169, 73, 168, 0.6)",
              filter: "brightness(1.1) saturate(1.2)",
            }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#5a3a7b]/50 shadow-2xl shadow-[#a955f7]/20 max-w-[85%] sm:max-w-[70%] md:max-w-full mx-auto">
              <img
                src={img2}
                alt="About Me Illustration"
                className="rounded-xl w-full h-auto object-cover transition-all duration-500 ease-out"
              />
              {/* Colored overlay for hover tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8e2489ff]/30 to-[#a949a8ff]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
