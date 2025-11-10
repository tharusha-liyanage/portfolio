import React from 'react'

export default function ExperienceSection() {
  return (
     <section id="experience" className="py-16 bg-[#2a1a3e]/50"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            <SectionTitle icon={<GraduationCap className="w-6 h-6" />} title="Education & Achievements" />
            <div className="max-w-4xl mx-auto space-y-6">
                {EXPERIENCE.map((item, index) => (
                    <TimelineItem key={index} data={item} delay={index * 150} />
                ))}
                <Card delay={450}>
                    <h3 className="text-xl font-bold text-white mb-2">Certifications Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                        <li>Advanced React (Meta)</li>
                        <li>Spring Framework for Java Development (SkillUp)</li>
                        <li>Build RAG Applications (IBM)</li>
                        <li>Developing Back-End Apps with Node.js and Express (IBM)</li>
                    </ul>
                </Card>
            </div>
        </div>
    </section>
  )
}
