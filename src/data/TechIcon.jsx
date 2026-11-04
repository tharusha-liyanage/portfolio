import { FaBrain, FaGitAlt, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiBootstrap,
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

const icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  "Shadcn UI": SiShadcnui,
  "Node.js": FaNodeJs,
  "Spring Boot": SiSpringboot,
  PHP: SiPhp,
  Python: FaPython,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Generative AI": FaBrain,
  LangChain: SiLangchain,
  Git: FaGitAlt,
};

const brandColors = {
  React: { className: "group-hover:text-[var(--react-blue)]", color: "var(--react-blue)" },
  "Next.js": { className: "group-hover:text-white", color: "#ffffff" },
  "Tailwind CSS": { className: "group-hover:text-cyan-400", color: "#22d3ee" },
  Bootstrap: { className: "group-hover:text-[#7952B3]", color: "#7952b3" },
  "Shadcn UI": { className: "group-hover:text-white", color: "#ffffff" },
  "Node.js": { className: "group-hover:text-[#339933]", color: "#339933" },
  "Spring Boot": { className: "group-hover:text-[#6DB33F]", color: "#6db33f" },
  PHP: { className: "group-hover:text-[#777BB4]", color: "#777bb4" },
  Python: { className: "group-hover:text-yellow-500", color: "#eab308" },
  FastAPI: { className: "group-hover:text-[#009688]", color: "#009688" },
  PostgreSQL: { className: "group-hover:text-[#4169E1]", color: "#4169e1" },
  MongoDB: { className: "group-hover:text-[#47A248]", color: "#47a248" },
  MySQL: { className: "group-hover:text-[#4479A1]", color: "#4479a1" },
  "Generative AI": { className: "group-hover:text-violet-400", color: "#a78bfa" },
  LangChain: { className: "group-hover:text-[#1C3C3C]", color: "#1c3c3c" },
  Git: { className: "group-hover:text-[#F05032]", color: "#f05032" },
};

const TechIcon = ({ name, className }) => {
  const Icon = icons[name] ?? SiReact;
  const brandColor = brandColors[name] ?? brandColors.React;
  return (
    <Icon
      className={`${className} tech-icon text-slate-400 grayscale transition-colors duration-300 group-hover:grayscale-0 ${brandColor.className}`}
      style={{ "--tech-brand-color": brandColor.color }}
      aria-hidden="true"
    />
  );
};

export default TechIcon;
