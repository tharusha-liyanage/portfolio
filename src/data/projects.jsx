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
        title: "Personalized micro tutor (AI/RAG)",
        description: "Develop an AI-powered microtutor system capable of providing personalized learning support using Generative AI, RAG, and LLMs.",
        technologies: ["Generative AI", "Agentic AI", "RAG", "LLMs"],
        github: "#",
        imageSrc: img4, // Updated image
    },
    {
        title: "CoralStay (Hotel & Tour Booking)",
        description: "A web application for hotel rooms and coral reef tour bookings, featuring virtual reef experiences and a full admin panel.",
        technologies: ["React", "Node.js", "Next.js", "MongoDB"],
        github: "https://github.com/github-link/Coral-Stay_Frontend",
        imageSrc: img5, // Updated image
    },
    {
        title: "Mahinda Trade Center (E-commerce)",
        description: "Full-stack e-commerce website for managing products, customers, and orders.",
        technologies: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/tharusha-liyanage/cloth-frontend",
        imageSrc: img9, // Updated image
    },
    {
        title: "LifeLine (Donation System)",
        description: "Platform enabling users to view verified medical cases, make secure donations, and engage volunteers, ensuring transparency.",
        technologies: ["PHP", "Bootstrap", "MySQL"],
        github: "https://github.com/github-link/Life-Line",
        imageSrc: img6, // Updated image
    },
    {
        title: "The Food Hub (Pastry Shop)",
        description: "Created a responsive and visually appealing front-end project using CSS and React components.",
        technologies: ["React", "Vite", "CSS"],
        github: "https://github.com/tharusha-liyanage/foodHub",
        imageSrc: img7, // Added 5th project
    },
    {
        title: "TourGuide(Travel website)",
        description: "Developed a travel website that includes User friendly Home Page, an Informative Destination Page, a Convenient Hotel Page, and an Up to date News Page",
        technologies: ["PHP", "Bootstrap", "MySQL"],
        github: "https://github.com/tharusha-liyanage/foodHub",
        imageSrc: img8, // Added 5th project
    },
];
