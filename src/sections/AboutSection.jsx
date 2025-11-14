// src/components/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import img2 from "../assets/img3.png";
import { Code2, Database, BrainCircuit } from "lucide-react";

export default function AboutSection() {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 overflow-hidden bg-[#290527ff]"
    >
      {/* ================= BACKGROUND EFFECTS ("Lightning") ================= */}
      {/* Purple Glow (Left) */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
      {/* Pink/Cyan Glow (Right) */}
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="mx-auto px-6 sm:px-10 lg:px-16 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ================= LEFT CONTENT (Text) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="relative mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
            </motion.div>

            {/* Description Text */}
            <motion.div variants={itemVariants} className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                I am an undergraduate in <span className="text-white font-medium">Computer Science and Technology</span>,
                passionate about becoming a software engineer. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                I have a solid understanding of <span className="text-purple-400">full-stack development</span> through
                academic projects and self-learning. My journey involves mastering technologies like:
              </p>
            </motion.div>

            {/* Feature/Skill Cards (New Addition) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Code2 className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold">Frontend Magic</h4>
                <p className="text-sm text-gray-400">React, Tailwind, Bootstrap</p>
              </div>
              
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Database className="w-8 h-8 text-pink-400 mb-2" />
                <h4 className="text-white font-semibold">Backend Logic</h4>
                <p className="text-sm text-gray-400">Spring Boot, PHP, MERN</p>
              </div>
            </motion.div>

            {/* Quote / Final thought */}
            <motion.p variants={itemVariants} className="mt-8 text-gray-400 italic border-l-4 border-purple-500 pl-4">
              "I enjoy problem-solving, teamwork, and learning new tools to build efficient software solutions."
            </motion.p>
          </motion.div>

          {/* ================= RIGHT CONTENT (Image) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            {/* Background Card Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20 transform rotate-6 scale-90 animate-pulse"></div>

            {/* Main Glass Card Container */}
            <div className="relative group w-full max-w-md">
               {/* Top-Left Corner Decoration */}
               <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-purple-500/50 rounded-tl-3xl z-20"></div>
               {/* Bottom-Right Corner Decoration */}
               <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-pink-500/50 rounded-br-3xl z-20"></div>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                <img
                  src={img2}
                  alt="About Me Illustration"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Text on Image */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <p className="text-white font-medium text-sm">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}