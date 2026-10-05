import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaNodeJs, FaJava, FaDocker, FaAws, FaServer, FaCreditCard,
  FaPython
} from 'react-icons/fa';
import { IoLogoJavascript, IoMail } from 'react-icons/io5';
import { SiDjango, SiSpringboot, SiPostgresql, SiPostman, SiAntdesign, SiReact, SiJsonwebtokens, SiNextdotjs, SiHibernate, SiMysql, SiGitlab } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { MdDesignServices, MdOutlinePhoneIphone, MdOutlineAccountTree } from "react-icons/md";

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
    { name: "Responsive Design", icon: <MdDesignServices /> },
  ],
  "Backend": [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Hibernate", icon: <SiHibernate /> },
    { name: "API REST", icon: <TbApi /> },
    { name: "Intégration APIs Paiement", icon: <FaCreditCard /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens /> },
    { name: "Email Services", icon: <IoMail /> },
    { name: "Multi-tenancy", icon: <MdOutlineAccountTree /> },
  ],
  "Database": [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ],
  "Cloud & DevOps": [
    { name: "AWS Cloud", icon: <FaAws /> },
    { name: "Cloud VPS & Hosting", icon: <FaServer /> },
    { name: "Docker", icon: <FaDocker /> },
  ],
  "Outils": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "GitLab", icon: <SiGitlab /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};


const Skills = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>{t('skills.title')}</Title>

      {Object.entries(skills).map(([category, list]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <Title level={4} style={{ marginBottom: '20px' }}>{t(`skills.categories.${category}`)}</Title>
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
