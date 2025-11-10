import React from "react";
import { SERVICES_DATA } from "../data/services";
const SERVICES = SERVICES_DATA;
import { Briefcase, ChevronDown } from "lucide-react";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../data/card";


export default function ServicesSection() {
  return (
     <section id="services" className="py-16 bg-[#2a1a3e]/50"> {/* Updated bg */}
        <div className="container mx-auto px-4">
            <SectionTitle icon={<Briefcase className="w-6 h-6" />} title="What I Do" />
            <div className="grid md:grid-cols-2 gap-8">
                {SERVICES.map((service, index) => (
                    <Card key={service.title} delay={index * 150} className="hover:scale-[1.02] hover:bg-[#3a294b]/90 transition duration-300"> {/* Updated hover bg */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 bg-[#3a294b] rounded-lg flex-shrink-0"> {/* Updated bg */}
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-4">{service.description}</p>
                                <ul className="text-sm space-y-1 text-gray-400">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <ChevronDown className="w-4 h-4 mr-2 text-[#c084fc] transform rotate-180" /> {/* Updated color */}
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
