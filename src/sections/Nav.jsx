import React from 'react'
import { useState, useEffect } from 'react';


function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a0b2c]/95 backdrop-blur-md shadow-xl border-b border-[#5a3a7b]/50' : 'bg-transparent'}`}> {/* Updated colors */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-[#8e2489ff] hover:text-white transition-colors"> {/* Updated color */}
                    TL<span className="text-white">.Dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href}
                            className="text-gray-300 font-medium hover:text-[#e0b0ff] transition-colors relative group"> {/* Updated hover color */}
                            {item.name}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#a955f7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> {/* Updated color */}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1a0b2c]/95 border-t border-[#5a3a7b]/50 pb-2`}> {/* Updated colors */}
                <div className="flex flex-col space-y-2 px-4">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-2 text-gray-300 hover:bg-[#a955f7]/50 rounded-md transition-colors font-medium"> {/* Updated hover color */}
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
  )
}

export default Nav
