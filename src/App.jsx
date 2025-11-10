import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./sections/Footer";

export default function App() {
  return (
     <div className="min-h-screen bg-transparent text-white font-sans animate-gradient-flow"> {/* Updated bg and added animation */}
            <style>
                {`
                    /* Global Font Setting */
                    body {
                        font-family: 'Inter', sans-serif;
                        /* Animated gradient background */
                        background: linear-gradient(-45deg, #2a0e4a, #1a0b2c, #3b0f5a, #1a0b2c);
                        background-size: 400% 400%;
                        animation: gradient-flow 20s ease infinite;
                    }
                    /* Custom Keyframes for motion effects */
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes slideInLeft {
                        from { transform: translateX(-50px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes slideInRight {
                        from { transform: translateX(50px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    /* Subtle pulse for contact buttons */
                    @keyframes pulse-subtle {
                        0%, 100% { box-shadow: 0 0 0 0 rgba(169, 85, 247, 0.4); }
                        50% { box-shadow: 0 0 8px 4px rgba(169, 85, 247, 0.6); }
                    }
                    /* Floating animation for icons */
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                        100% { transform: translateY(0px); }
                    }
                    /* Animated gradient background */
                    @keyframes gradient-flow {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    
                    .animate-fadeIn {
                        animation: fadeIn 1s ease-out forwards;
                    }
                    .animate-slideInLeft {
                        animation: slideInLeft 0.8s ease-out forwards;
                    }
                    .animate-slideInRight {
                        animation: slideInRight 0.8s ease-out forwards;
                    }
                    .animate-pulse-subtle {
                        animation: pulse-subtle 3s infinite ease-in-out;
                    }
                    .animate-float {
                        animation: float 4s ease-in-out infinite;
                    }
                    /* Delay helpers */
                    .delay-100 { animation-delay: 0.1s; }
                    .delay-300 { animation-delay: 0.3s; }
                    .delay-500 { animation-delay: 0.5s; }
                    .delay-700 { animation-delay: 0.7s; }
                `}
            </style>
            <Nav />
            <main className="pt-16">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ServicesSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
  );
}
