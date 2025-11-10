import { Code, Zap } from "lucide-react";
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
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "AI/ML Solutions (RAG)",
        description: "Building intelligent applications using Generative AI, LLMs, and Retrieval-Augmented Generation (RAG).",
        details: ["Prompt Engineering", "RAG Architecture Implementation", "Micro-tutor Systems"]
    },
];
