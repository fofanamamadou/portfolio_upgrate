import React, { useMemo, useRef } from 'react';
import { Avatar, Button } from 'antd';
import { useTranslation } from 'react-i18next';

// Mots affichés en arrière-plan (style "Cloudflare Registrar")
const WORDS = [
  'react', 'nextjs', 'django', 'spring', 'java', 'python', 'api', 'rest', 'jwt', 'aws', 'cloud', 'vps',
  'docker', 'postgres', 'mysql', 'mobile', 'web', 'saas', 'design', 'ux', 'deploy', 'scalable', 'secure',
  'fast', 'payment', 'dashboard', 'backend', 'frontend', 'fullstack', 'git', 'devops', 'startup', 'business',
  'ecommerce', 'platform', 'freelance', 'solution', 'data', 'auth', 'tenant', 'hosting', 'seo', 'app',
];

const WordGrid = () => {
  const ref = useRef(null);
  // Liste pseudo-aléatoire stable, suffisamment longue pour remplir la section
  const words = useMemo(
    () => Array.from({ length: 420 }, (_, i) => WORDS[(i * 7 + (i % 5) * 3) % WORDS.length]),
    []
  );

  // Un halo suit la souris : les mots proches du curseur deviennent plus visibles
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div className="word-grid" ref={ref} onMouseMove={onMove} aria-hidden="true">
      {words.map((w, i) => <span key={i}>{w}</span>)}
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <WordGrid />
      <div className="hero-content">
        <Avatar size={120} src="/images/profil.webp" alt="Mamadou FOFANA" className="hero-avatar" />
        <span className="hero-badge">{t('about.badge')}</span>
        <h2 className="hero-title">{t('about.title')}</h2>
        <p className="hero-text" dangerouslySetInnerHTML={{ __html: t('about.summary') }} />
        <div className="hero-actions">
          <Button type="primary" size="large" href="#contact">{t('about.cta_contact')}</Button>
          <Button size="large" href="#projects">{t('about.cta_projects')}</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
