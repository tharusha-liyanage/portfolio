import React from 'react'

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-transparent"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            <SectionTitle icon={<Send className="w-6 h-6" />} title="Get In Touch" />
            <div className="max-w-xl mx-auto text-center space-y-6">
                <p className="text-xl text-gray-300 mb-8">
                    I am actively seeking opportunities as a Software Engineer. Feel free to connect or send me an email!
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    <a href={`mailto:${HERO_DATA.contactEmail}`}
                        className="p-4 bg-[#a955f7]/50 border border-[#a955f7]/50 text-white rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-[#a955f7]/70 hover:shadow-xl hover:scale-[1.02] animate-pulse-subtle"> {/* Updated colors */}
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">{HERO_DATA.contactEmail}</span>
                    </a>
                    <a href={`tel:${HERO_DATA.contactPhone}`}
                        className="p-4 bg-[#a955f7]/50 border border-[#a955f7]/50 text-white rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-[#a955f7]/70 hover:shadow-xl hover:scale-[1.02] animate-pulse-subtle"> {/* Updated colors */}
                        <Smartphone className="w-5 h-5" />
                        <span className="font-medium">{HERO_DATA.contactPhone}</span>
                    </a>
                    <a href={HERO_DATA.github} target="_blank" rel="noopener noreferrer"
                        className="p-4 bg-gray-700/30 border border-gray-500/30 text-white rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-gray-600/50 hover:shadow-xl hover:scale-[1.02]"> {/* Updated colors */}
                        <Github className="w-5 h-5" />
                        <span className="font-medium">GitHub</span>
                    </a>
                    <a href={HERO_DATA.linkedin} target="_blank" rel="noopener noreferrer"
                        className="p-4 bg-blue-700/30 border border-blue-500/30 text-white rounded-lg flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-blue-600/50 hover:shadow-xl hover:scale-[1.02]"> {/* Updated colors */}
                        <Linkedin className="w-5 h-5" />
                        <span className="font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection
