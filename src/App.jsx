import React, { useEffect, useState, useCallback } from 'react';
import { Layout, Menu, Typography, Avatar, Drawer, Button } from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  CodeOutlined,
  ProjectOutlined,
  MailOutlined,
  SunOutlined,
  MoonOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import 'antd/dist/reset.css';

import ProjectList from './components/ProjectList';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import projects from './data/projects.json';
import './App.css';
import Reveal from './components/Reveal';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const { t, i18n } = useTranslation();
  const [init, setInit] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [current, setCurrent] = useState('about');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');

  const navItems = [
    { key: 'about', href: '#about', icon: <UserOutlined />, label: t('menu.about') },
    { key: 'skills', href: '#skills', icon: <CodeOutlined />, label: t('menu.skills') },
    { key: 'projects', href: '#projects', icon: <ProjectOutlined />, label: t('menu.projects') },
    { key: 'contact', href: '#contact', icon: <MailOutlined />, label: t('menu.contact') },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isDarkMode = theme === 'system'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : theme === 'dark';

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');

    // On applique toujours une classe spécifique, même en mode 'system'
    // pour éviter les états mixtes/gris
    if (isDarkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.add('light-theme');
    }

    localStorage.setItem('theme', theme);
  }, [theme, isDarkMode]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Options des particules déplacées ici pour être dynamiques
  const particlesOptions = {
    background: {
      color: {
        value: isDarkMode ? '#121212' : '#f5f5f5', // Couleur de fond dynamique
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#888888' },
      links: { color: '#888888', distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 2, straight: false },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  const drawerMenuItems = navItems.map(item => ({
    key: item.key,
    icon: item.icon,
    label: <a href={item.href}>{item.label}</a>
  }));

  const showDrawer = () => setDrawerVisible(true);
  const onCloseDrawer = () => setDrawerVisible(false);

  const handleScroll = useCallback(() => {
    const headerOffset = 150;
    const scrollPosition = window.scrollY + headerOffset;
    const sectionIds = navItems.map(item => item.key).reverse();

    let newCurrent = 'about';
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPosition) {
        newCurrent = id;
        break;
      }
    }
    setCurrent(newCurrent);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const translatedProjects = projects.map((project, index) => ({
    ...project,
    title: t(`projects.list.${index}.title`),
    description: t(`projects.list.${index}.description`)
  }));

  return (
    <Layout className="layout">
      {init && <Particles id="tsparticles" options={particlesOptions} />}

      <Header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <Avatar size={40} src="/images/profil.webp" alt="Mamadou FOFANA" />
            <h1 className="header-title">Mamadou FOFANA</h1>
          </div>

          <div className="header-center desktop-only">
            <nav className="custom-header-nav">
              {navItems.map(item => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`custom-nav-item ${current === item.key ? 'active' : ''}`}
                >
                  <span className="custom-nav-icon">{item.icon}</span>
                  <span className="custom-nav-label">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="header-right">
            <div className="header-actions">
              <Button
                type="text"
                onClick={() => changeLanguage(i18n.language.startsWith('fr') ? 'en' : 'fr')}
                icon={<GlobalOutlined />}
                style={{ fontWeight: '500' }}
              >
                {i18n.language.startsWith('fr') ? 'FR' : 'EN'}
              </Button>

              <Button
                type="text"
                onClick={toggleTheme}
                icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
              />

              <Button className="mobile-only" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
            </div>
          </div>
        </div>
      </Header>

      <Drawer
        title={t('menu.about')}
        placement="right"
        onClose={onCloseDrawer}
        open={drawerVisible}
        width={280}
        styles={{
          header: { background: 'var(--header-background)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-color)' },
          body: { padding: 0, background: 'var(--header-background)', backdropFilter: 'blur(10px)' },
          mask: { background: 'rgba(0, 0, 0, 0.25)' }
        }}
      >
        <Menu
          theme={isDarkMode ? 'dark' : 'light'}
          mode="vertical"
          items={drawerMenuItems}
          selectedKeys={[current]}
          onClick={onCloseDrawer}
          style={{ background: 'transparent', borderRight: 'none' }}
        />
      </Drawer>

      <Content className="app-content">
        <div className="site-layout-content">
          <div id="about" style={{ paddingTop: '70px', marginTop: '-70px' }}><About /></div>
          <div id="skills" style={{ paddingTop: '70px', marginTop: '-70px' }}><Skills /></div>
          <div id="projects" style={{ paddingTop: '70px', marginTop: '-70px' }}>
            <Reveal><Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>{t('projects.title')}</Title></Reveal>
            <ProjectList projects={translatedProjects} />
          </div>
          <div id="contact" style={{ paddingTop: '70px', marginTop: '-70px' }}><Reveal><Contact /></Reveal></div>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', zIndex: 0, background: 'transparent' }}>
        {t('footer.rights', { year: new Date().getFullYear() })}
      </Footer>
    </Layout>
  );
}

export default App;
