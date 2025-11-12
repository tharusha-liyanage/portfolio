import React from "react";
import { Send, Mail, Smartphone, Github, Linkedin } from "lucide-react";
import { HERO_DATA } from "../data/hero";
import { SectionTitle } from "../data/SectionTitle";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle icon={<Send className="w-6 h-6" />} title="Get In Touch" />
        </motion.div>

        <div className="max-w-xl mx-auto text-center space-y-6">
          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I am actively seeking opportunities as a Software Engineer. Feel free to connect or send me an email!
          </motion.p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                text: HERO_DATA.contactEmail,
                link: `mailto:${HERO_DATA.contactEmail}`,
                color: "bg-[#861b77ff]/50 border-[#a955f7]/50 hover:bg-[#ad20b2ff]/70",
              },
              {
                icon: <Smartphone className="w-5 h-5" />,
                text: HERO_DATA.contactPhone,
                link: `tel:${HERO_DATA.contactPhone}`,
                color: "bg-[#861b77ff]/50 border-[#a955f7]/50 hover:bg-[#ad20b2ff]/70",
              },
              {
                icon: <Github className="w-5 h-5" />,
                text: "GitHub",
                link: HERO_DATA.github,
                color: "bg-[#584f57ff] border-gray-500/30 hover:bg-gray-600/50",
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                text: "LinkedIn",
                link: HERO_DATA.linkedin,
                color: "bg-[#1b1facff] border-blue-500/30 hover:bg-blue-600/50",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 border text-white rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03] ${item.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
