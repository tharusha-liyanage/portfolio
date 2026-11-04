import { Bot, Code2, ShieldCheck } from "lucide-react";

export const SERVICES_DATA = [
  {
    icon: <Code2 className="h-6 w-6 text-violet-600" />,
    title: "Full-Stack Web Development",
    description:
      "Building end-to-end scalable web applications with modern frontend and backend technologies.",
    details: [
      "Frontend: React, Next.js",
      "Backend: Node.js, Spring Boot",
    ],
  },
  {
    icon: <Bot className="h-6 w-6 text-cyan-700" />,
    title: "AI & Agentic Systems",
    description:
      "Building intelligent, personalized RAG applications and agentic systems.",
    details: [
      "AI frameworks: LangChain, CrewAI",
      "Vector database and API: Pinecone, FastAPI",
    ],
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-violet-600" />,
    title: "Enterprise Solutions & QA",
    description:
      "Developing secure applications and responsive user interfaces, backed by thorough end-to-end functional testing.",
    details: [
      "Secure, reliable enterprise applications",
      "Responsive user interfaces",
      "End-to-end functional testing",
    ],
  },
];
