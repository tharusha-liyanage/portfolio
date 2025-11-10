import { FaReact, FaNodeJs,FaPython } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiPhp, SiBootstrap  } from "react-icons/si";
import { SiMysql } from "react-icons/si";


 const TechIcon = ({ name, className }) => {
  const icons = {
    React: <FaReact className={className} />,
    "Node.js": <FaNodeJs className={className} />,
    "Spring Boot": <SiSpringboot className={className} />,
    "MongoDB": <SiMongodb className={className} />,
    "PostgreSQL": <SiPostgresql className={className} />,
    "Next.js": <SiNextdotjs className={className} />,
    "Tailwind CSS": <SiTailwindcss className={className} />,
    MySQL: <SiMysql className={className}  />,
    Bootstrap: <SiBootstrap  className={className}  />,
    Python: <FaPython className={className}  />,
    PHP: <SiPhp className={className} />,
  };

  return icons[name] || <FaReact className={className} />;
};

export default TechIcon;