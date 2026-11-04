import { Github } from "lucide-react";
import React from "react";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";


export const PROJECTS_DATA = [
  {
    title: "Personalized Learning Companion for G.C.E. (O/L) Mathematics",
    description:
      "Develop an AI-powered microtutor system capable of providing personalized learning support using Generative AI, RAG, and LLMs.",
    technologies: ["React", "FastAPI", "CrewAI", "Pinecone", "LangChain"],
    category: "AI/Research",
    imageSrc: img4,
  },
  {
    title: "CoralStay (Hotel & Tour Booking)",
    description:
      "A web application for hotel rooms and coral reef tour bookings, featuring virtual reef experiences and a full admin panel.",
    technologies: ["React", "Node.js", "Next.js", "MongoDB"],
    category: "Full-Stack",
    github: "https://github.com/Maheesha-Nethmina/Coral-Stay_Frontend",
    imageSrc: img5,
  },
  {
    title: "Mahinda Trade Center (E-commerce)",
    description:
      "Full-stack e-commerce website for managing products, customers, and orders.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack",
    github: "https://github.com/tharusha-liyanage/cloth-frontend",
    imageSrc: img9,
  },
  {
    title: "LifeLine",
    description:
      "Platform enabling users to view verified medical cases, make secure donations, and engage volunteers, ensuring transparency.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    category: "Full-Stack",
    github: "https://github.com/Maheesha-Nethmina/Life-Line",
    imageSrc: img6,
  },
  {
    title: "Pastry Shop",
    description:
      "A responsive pastry shop experience built with React and Vite.",
    technologies: ["React", "Vite"],
    category: "Front-End",
    github: "https://github.com/tharusha-liyanage/foodHub",
    imageSrc: img7,
  },
  {
    title: "TourGuide (Travel Website)",
    description:
      "A travel website with an informative destination page, hotel listings, and up-to-date travel news.",
    technologies: ["PHP", "Bootstrap", "MySQL"],
    category: "Full-Stack",
    github: "https://github.com/tharusha-liyanage/TourGuide-Srilanka",
    imageSrc: img8,
  },
];
