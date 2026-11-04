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

const TechIcon = ({ name, className }) => {
  const Icon = icons[name] ?? SiReact;
  return <Icon className={className} aria-hidden="true" />;
};

export default TechIcon;
