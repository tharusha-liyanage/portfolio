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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/85 backdrop-blur-xl border-b border-violet-100 shadow-[0_10px_35px_rgba(54,50,91,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="group flex items-center gap-1 text-2xl font-black tracking-tight text-slate-900">
          <span className="text-gradient">Tharusha</span>
          <span className="text-slate-900">Liyanage</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-violet-800" : "text-slate-600 hover:text-violet-800"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 w-full rounded-full transition-all duration-300 ${
                    isActive ? "bg-gradient-to-r from-violet-500 to-cyan-400" : "scale-x-0 bg-transparent group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-violet-100 bg-white/80 p-2 text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-4 mb-4 rounded-2xl border border-violet-100 bg-white/95 p-3 shadow-lg backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-xl px-3 py-2 text-sm font-medium transition ${
                activeSection === item.href.replace("#", "") ? "bg-violet-50 text-violet-800" : "text-slate-600 hover:bg-violet-50 hover:text-violet-800"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Nav;
