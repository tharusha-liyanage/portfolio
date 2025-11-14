// src/components/ContactSection.jsx
import React from "react";
import { Send, Mail, Smartphone, Github, Linkedin, ArrowRight } from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-[#0a0a0a] overflow-hidden"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* Purple Glow (Center) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
      {/* Cyan Glow (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px]" />
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
             Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Connect</span>
           </h2>
           <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto"></div>
         </div>

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-[#12071f]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          {/* Decorative Background Icon inside the card */}
          <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
            <Send className="w-64 h-64 text-white transform rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
             
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              I am actively seeking opportunities as a <span className="text-white font-semibold">Software Engineer</span>. 
              Feel free to connect or send me an email!
            </p>

            {/* ================= CONTACT GRID ================= */}
            <div className="grid sm:grid-cols-2 gap-5 w-full">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  text: HERO_DATA.contactEmail,
                  sub: "Send me an email",
                  link: `mailto:${HERO_DATA.contactEmail}`,
                  color: "group-hover:text-pink-400",
                  border: "group-hover:border-pink-500/50",
                  bg: "group-hover:bg-pink-500/10",
                },
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  text: HERO_DATA.contactPhone,
                  sub: "Give me a call",
                  link: `tel:${HERO_DATA.contactPhone}`,
                  color: "group-hover:text-cyan-400",
                  border: "group-hover:border-cyan-500/50",
                  bg: "group-hover:bg-cyan-500/10",
                },
                {
                  icon: <Github className="w-6 h-6" />,
                  text: "GitHub",
                  sub: "Check my code",
                  link: HERO_DATA.github,
                  color: "group-hover:text-white",
                  border: "group-hover:border-white/50",
                  bg: "group-hover:bg-white/10",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  text: "LinkedIn",
                  sub: "Let's connect",
                  link: HERO_DATA.linkedin,
                  color: "group-hover:text-blue-400",
                  border: "group-hover:border-blue-500/50",
                  bg: "group-hover:bg-blue-500/10",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 transition-all duration-300 hover:-translate-y-1 ${item.border} ${item.bg}`}
                >
                  <div className={`p-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-gray-400 transition-colors duration-300 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 font-medium mb-0.5">{item.sub}</div>
                    <div className={`text-sm sm:text-base font-bold text-white transition-colors duration-300 ${item.color}`}>
                      {item.text}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

        </motion.div>

        

      </div>
    </section>
  );
}