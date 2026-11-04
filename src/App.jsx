import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import ThemeToggle from "./components/ThemeToggle";
import GlobalEffects from "./components/GlobalEffects";

export default function App() {
  return (
    <div className="relative isolate min-h-screen bg-transparent text-slate-900 antialiased selection:bg-violet-500/20">
      <Nav />
      <main className="pt-16 sm:pt-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
      <GlobalEffects />
    </div>
  );
}
