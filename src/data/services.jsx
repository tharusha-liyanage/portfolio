import { Code, Zap } from "lucide-react";
import { Layout } from "lucide-react";
import { Server } from "lucide-react";

export const SERVICES_DATA = [
  {
        icon: <Code className="w-6 h-6 text-[#c084fc]" />, // Updated color
        title: "Full-Stack Development",
        description: "Writing clean, maintainable code and delivering responsive, high-performance applications.",
        details: [
            "Frontend: React, Next.js, Bootstrap, Tailwind CSS",
            "Backend: Node.js, PHP, Spring Boot",
            "Database: MongoDB, MySQL, PostgreSQL",
        ]
    },
    {
    icon: <Layout className="w-6 h-6 text-[#38bdf8]" />, // sky blue
    title: "Front-End Development",
    description:
      "Building visually appealing, responsive, and user-friendly interfaces using modern frameworks and tools.",
    details: [
      "Languages & Tools: HTML, CSS, JavaScript",
      "Frameworks: React, Next.js",
      "Styling: Tailwind CSS, Bootstrap",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-[#34d399]" />, // green tone
    title: "Back-End Development",
    description:
      "Designing robust APIs and managing databases to ensure secure, efficient, and scalable server-side solutions.",
    details: [
      "Languages & Frameworks: Node.js, PHP, Spring Boot",
      "Databases: MySQL, PostgreSQL, MongoDB",
      "Concepts: REST APIs, Authentication, MVC Architecture",
    ],
  },
];
