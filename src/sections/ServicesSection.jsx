import React from "react";
import { SERVICES_DATA } from "../data/services";
import { Briefcase, ChevronDown } from "lucide-react";
import { SectionTitle } from "../data/SectionTitle";
import { Card } from "../data/card";

const SERVICES = SERVICES_DATA;

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-[#2a1a3e]/50 w-full">
      {/* Full width, consistent padding */}
      <div className="px-6 sm:px-10 lg:px-16">
        <SectionTitle icon={<Briefcase className="w-6 h-6" />} title="What I Do" />

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {SERVICES.map((service, index) => (
            <Card
              key={service.title}
              delay={index * 150}
              className="hover:scale-[1.02] hover:bg-[#3a294b]/90 
                         bg-[#3a294b]/60 border border-white/10 
                         backdrop-blur-md rounded-2xl transition duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#4a2c64]/60 rounded-lg flex-shrink-0 shadow-md">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>

                  <ul className="text-sm space-y-1 text-gray-400">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronDown className="w-4 h-4 mr-2 text-[#c084fc] transform rotate-180" />
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
