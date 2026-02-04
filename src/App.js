import React, { useEffect, useState, useCallback } from 'react';
import { Layout, Menu, Typography, Avatar, Drawer, Button } from 'antd';
import { UserOutlined, MenuOutlined, CodeOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import 'antd/dist/reset.css'; // Importe les styles de base d'Ant Design

// Importe les composants des différentes sections du portfolio
import ProjectList from './components/ProjectList';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Importe les données des projets
import projects from './data/projects.json';

import './App.css'; // Importe les styles spécifiques à l'application

// Destructure les composants de mise en page d'Ant Design
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Définit les éléments du menu de navigation avec icônes
const menuItems = [
    { key: 'about', icon: <UserOutlined />, label: <a href="#about">À propos</a> },
    { key: 'skills', icon: <CodeOutlined />, label: <a href="#skills">Compétences</a> },
    { key: 'projects', icon: <ProjectOutlined />, label: <a href="#projects">Projets</a> },
    { key: 'contact', icon: <MailOutlined />, label: <a href="#contact">Contact</a> },
];

// Options de configuration pour l'arrière-plan animé (tsparticles)
const particlesOptions = {
    background: {
        color: {
            value: 'transparent', // Le fond est transparent pour laisser apparaître le body
        },
    },
    fpsLimit: 60, // Limite le nombre d'images par seconde
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse', // Les particules s'éloignent au survol de la souris
            },
            resize: true, // Les particules s'adaptent au redimensionnement de la fenêtre
        },
        modes: {
            repulse: {
                distance: 100, // Distance de répulsion
                duration: 0.4, // Durée de l'effet de répulsion
            },
        },
    },
    particles: {
        color: {
            value: '#888888', // Couleur des particules (gris neutre pour visibilité sur les deux thèmes)
        },
        links: {
            color: '#888888', // Couleur des liens entre particules
            distance: 150, // Distance maximale pour créer un lien
            enable: true, // Active les liens
            opacity: 0.5, // Opacité des liens
            width: 1, // Largeur des liens
        },
        collisions: {
            enable: true, // Active les collisions entre particules
        },
        move: {
            direction: 'none', // Direction de mouvement aléatoire
            enable: true, // Active le mouvement
            outModes: {
                default: 'bounce', // Les particules rebondissent sur les bords
            },
            random: false, // Mouvement non aléatoire
            speed: 2, // Vitesse de mouvement
            straight: false, // Mouvement non linéaire
        },
        number: {
            density: {
                enable: true,
                area: 800, // Zone de densité des particules
            },
            value: 80, // Nombre de particules
        },
        opacity: {
            value: 0.5, // Opacité des particules
        },
        shape: {
            type: 'circle', // Forme des particules
        },
        size: {
            value: { min: 1, max: 5 }, // Taille des particules
        },
    },
    detectRetina: true, // Détecte les écrans Retina pour un meilleur rendu
};

function App() {
  // État pour vérifier si le moteur de particules est initialisé
  const [ init, setInit ] = useState(false);
  // État pour contrôler la visibilité du tiroir de navigation (menu mobile)
  const [drawerVisible, setDrawerVisible] = useState(false);
  // État pour suivre la section actuellement visible (pour le scrollspy)
  const [current, setCurrent] = useState('about');

  // Fonction pour afficher le tiroir de navigation
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Fonction pour masquer le tiroir de navigation
  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  // Gère le défilement de la page pour mettre à jour la section active du menu (scrollspy)
  const handleScroll = useCallback(() => {
    // Offset pour déclencher le changement de section un peu plus tôt que le haut de la section
    const headerOffset = 150;
    const scrollPosition = window.scrollY + headerOffset;
    // Récupère les IDs des sections et les inverse pour vérifier de bas en haut
    const sectionIds = menuItems.map(item => item.key).reverse();

    let newCurrent = 'about'; // Section par défaut si aucune autre n'est détectée
    // Parcourt les sections de bas en haut
    for (const id of sectionIds) {
        const section = document.getElementById(id);
        // Si la section existe et que son haut est atteint ou dépassé par le défilement
        if (section && section.offsetTop <= scrollPosition) {
            newCurrent = id;
            break; // Arrête la boucle dès qu'une correspondance est trouvée
        }
    }
    setCurrent(newCurrent); // Met à jour l'état de la section active
  }, []); // Dépendances vides car menuItems est constant

  // Effet de bord pour l'initialisation des particules et l'écouteur de défilement
  useEffect(() => {
      // Initialise le moteur de particules
      initParticlesEngine(async (engine) => {
          await loadFull(engine); // Charge toutes les fonctionnalités de tsparticles
      }).then(() => {
          setInit(true); // Marque le moteur comme initialisé
      });

      // Ajoute un écouteur d'événement pour le défilement de la fenêtre
      window.addEventListener('scroll', handleScroll);
      // Fonction de nettoyage pour retirer l'écouteur lors du démontage du composant
      return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Dépend de handleScroll pour s'assurer que l'écouteur est toujours à jour

  return (
    // Composant de mise en page principal d'Ant Design
    <Layout className="layout" style={{ background: 'transparent' }}>
      {/* Affiche l'arrière-plan animé si le moteur de particules est initialisé */}
      {init && <Particles id="tsparticles" options={particlesOptions} />}

      {/* En-tête de l'application */}
      <Header className="app-header">
        <div className="header-content">
          <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Avatar de l'utilisateur dans l'en-tête */}
              <Avatar size={40} src="https://i.ibb.co/W4JdQgPf/Mypicture.jpg" style={{ marginRight: '15px' }}/>
              <h1 className="header-title">Mamadou FOFANA</h1>
          </div>

          {/* Menu de navigation pour les écrans larges (desktop-only) */}
          <div className="desktop-only">
              <Menu
                  className="header-menu"
                  mode="horizontal"
                  items={menuItems}
                  selectedKeys={[current]} // Met en surbrillance l'élément de menu actif
              />
          </div>

          {/* Bouton du menu burger pour les écrans mobiles (mobile-only) */}
          <Button className="mobile-only" type="text" onClick={showDrawer} style={{color: 'var(--header-text-color)'}}>
              <MenuOutlined />
          </Button>
        </div>
      </Header>

      {/* Tiroir de navigation (menu mobile) */}
      <Drawer
          title="Menu"
          placement="right"
          onClose={onCloseDrawer}
          open={drawerVisible}
          width={280}
          styles={{
            header: { 
              background: 'rgba(25, 25, 25, 0.5)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--border-color)' 
            },
            body: { 
              padding: 0, 
              background: 'rgba(25, 25, 25, 0.5)',
              backdropFilter: 'blur(10px)'
            },
            mask: { 
              background: 'rgba(0, 0, 0, 0.25)'
            }
          }}
      >
          {/* Menu vertical à l'intérieur du tiroir */}
          <Menu
              theme="dark"
              mode="vertical"
              items={menuItems}
              selectedKeys={[current]} // Met en surbrillance l'élément de menu actif
              onClick={onCloseDrawer} // Ferme le tiroir lors du clic sur un élément de menu
              style={{ background: 'transparent', borderRight: 'none' }}
          />
      </Drawer>

      {/* Contenu principal de l'application */}
      <Content className="app-content">
        <div className="site-layout-content">
          {/* Section "À propos de moi" */}
          <div id="about" style={{paddingTop: '70px', marginTop: '-70px'}}><About /></div>
          {/* Section "Compétences" */}
          <div id="skills" style={{paddingTop: '70px', marginTop: '-70px'}}><Skills /></div>
          {/* Section "Projets" */}
          <div id="projects" style={{paddingTop: '70px', marginTop: '-70px'}}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Mes Projets</Title>
            <ProjectList projects={projects} />
          </div>
          {/* Section "Contact" */}
          <div id="contact" style={{paddingTop: '70px', marginTop: '-70px'}}><Contact /></div>
        </div>
      </Content>

      {/* Pied de page de l'application */}
      <Footer style={{ textAlign: 'center', zIndex: 0, background: 'transparent' }}>
        ©2025 Mamadou FOFANA. Tous droits réservés.
      </Footer>
    </Layout>
  );
}

export default App;
