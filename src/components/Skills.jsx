import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava, FaDocker, FaAws, FaServer, FaCreditCard,
  FaPython
} from 'react-icons/fa';
import { IoLogoJavascript, IoMail } from 'react-icons/io5';
import { SiDjango, SiSpringboot, SiPostgresql, SiPostman, SiAntdesign, SiJsonwebtokens, SiNextdotjs, SiHibernate, SiMysql, SiGitlab } from 'react-icons/si';
import { TbApi } from "react-icons/tb";
import { MdDesignServices, MdOutlinePhoneIphone, MdOutlineAccountTree } from "react-icons/md";

const { Title } = Typography;

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

// Rangée du haut : Frontend + Database + Outils  →  défile vers la gauche
// Rangée du bas  : Backend + Cloud & DevOps       →  défile vers la droite
const withCategory = (cats) =>
  cats.flatMap(cat => skills[cat].map(s => ({ ...s, category: cat })));

const topRow = withCategory(["Frontend", "Database", "Outils"]);
const bottomRow = withCategory(["Backend", "Cloud & DevOps"]);

const MarqueeRow = ({ items, reverse, t }) => (
  <div className="marquee">
    {/* La liste est dupliquée pour une boucle infinie sans saut */}
    <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
      {[...items, ...items].map((skill, i) => (
        <div className="marquee-card" key={`${skill.name}-${i}`} aria-hidden={i >= items.length}>
          <span className="marquee-icon">{skill.icon}</span>
          <div className="marquee-text">
            <span className="marquee-name">{skill.name}</span>
            <span className="marquee-cat">{t(`skills.categories.${skill.category}`)}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '50px 0' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '12px' }}>{t('skills.title')}</Title>
      <p className="section-subtitle">{t('skills.subtitle')}</p>
      <div className="marquee-wrapper">
        <MarqueeRow items={topRow} t={t} />
        <MarqueeRow items={bottomRow} reverse t={t} />
      </div>
    </section>
  );
};

export default Skills;
