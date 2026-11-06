import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Certifications", href: "#certifications" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sectionOffsets = navItems
        .map((item) => ({
          id: item.href.replace("#", ""),
          offset: document.getElementById(item.href.replace("#", ""))?.offsetTop ?? 0,
        }))
        .filter((item) => item.id);

      let current = "home";
      for (const item of sectionOffsets) {
        if (window.scrollY >= item.offset - 160) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <header
      className={`fixed z-[100] transition-all duration-500 ${
        isScrolled
          ? "inset-x-4 top-4 mx-auto max-w-6xl rounded-full border border-white/40 bg-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.07)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-slate-900/40 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "inset-x-0 top-0 border-b border-transparent bg-transparent"
      }`}
    >
      <nav 
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "px-6 py-3 sm:px-8" : "max-w-7xl px-5 py-4 sm:px-8 lg:px-12"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-1 text-2xl font-black tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">Tharusha</span>
          <span className="text-slate-900 transition-colors dark:text-white">Liyanage</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative text-sm font-semibold transition-colors duration-300 ${
                  isActive 
                    ? "text-violet-700 dark:text-cyan-400" 
                    : "text-slate-600 hover:text-violet-700 dark:text-slate-300 dark:hover:text-cyan-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-violet-500 to-cyan-400" 
                      : "scale-x-0 bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button - Liquid Glass styled */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/40 p-2 text-slate-800 shadow-sm backdrop-blur-md transition-all hover:bg-white/60 dark:border-white/10 dark:bg-slate-800/40 dark:text-white dark:hover:bg-slate-800/60 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown - Liquid Glass styled */}
      {/* Mobile Dropdown - True Liquid Glass */}
      <div 
        className={`absolute inset-x-0 top-full mt-3 overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 flex flex-col gap-1 rounded-3xl border border-white/40 bg-white/30 p-3 shadow-[0_8px_32px_rgba(31,38,135,0.1)] backdrop-blur-2xl backdrop-saturate-200 dark:border-white/10 dark:bg-[#0A0F1C]/50 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive 
                    ? "bg-white/50 text-violet-800 shadow-sm dark:bg-white/10 dark:text-cyan-400" 
                    : "text-slate-700 hover:bg-white/40 hover:text-violet-800 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  );
}

export default Nav;