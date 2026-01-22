import React from 'react';
import { Typography } from 'antd';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaJava, FaDocker
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiDjango, SiSpringboot, SiPostgresql, SiPostman, SiAntdesign, SiReact, SiJsonwebtokens } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { MdDesignServices, MdOutlinePhoneIphone } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const { Title } = Typography;

// Nouvelle structure de données incluant les icônes
const skills = {
  "Frontend": [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React Native", icon: <MdOutlinePhoneIphone /> },
    { name: "JavaScript", icon: <IoLogoJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Ant Design", icon: <SiAntdesign /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
    { name: "Responsive Design", icon: <MdDesignServices /> },
  ],
  "Backend": [
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "API REST", icon: <TbApi /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens /> },
    { name: "Email Services", icon: <IoMail /> }, 
    { name: "Multi-tenancy", icon: <MdOutlineAccountTree /> },
  ],
  "Database": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  "Outils": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};


const Skills = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Compétences</Title>
      
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <Title level={4} style={{ marginBottom: '20px' }}>{category}</Title>
          <div className="skills-grid">
            {list.map(skill => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
