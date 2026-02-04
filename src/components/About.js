import React from 'react';
import { Typography, Row, Col, Avatar } from 'antd'; // Importe les composants Typography, Row, Col, Avatar d'Ant Design
import { UserOutlined } from '@ant-design/icons'; // Importe l'icône UserOutlined d'Ant Design

// Destructure les composants Title et Paragraph de Typography
const { Title, Paragraph } = Typography;

/**
 * Composant About
 * Représente la section "À propos de moi" du portfolio.
 * Affiche une photo/avatar et une description personnelle.
 */
const About = () => {
  return (
    // Conteneur principal de la section avec un padding vertical
    <div style={{ padding: '50px 0' }}>
      {/* Utilise la grille d'Ant Design pour une disposition flexible */}
      <Row align="middle" gutter={[32, 32]}>
        {/* Colonne pour la photo/avatar */}
        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          {/* Composant Avatar d'Ant Design, avec une taille de 150px et une icône par défaut */}
          <Avatar size={150} src="https://i.ibb.co/W4JdQgPf/Mypicture.jpg" />
        </Col>

        {/* Colonne pour le texte de présentation */}
        <Col xs={24} sm={16}>
          {/* Titre de la section */}
          <Title level={2}>À propos de moi</Title>
          {/* Paragraphes de description personnelle */}
          <Paragraph>
            Bonjour ! Je suis <strong>Mamadou FOFANA</strong>, développeur full-stack passionné,
            spécialisé dans la création d’applications web et mobiles modernes, performantes et
            intuitives. Mon objectif est de concevoir des solutions qui allient
            <em> efficacité</em>, <em> expérience utilisateur</em> et <em> scalabilité</em>.
          </Paragraph>
          <Paragraph>
            J’ai travaillé avec plusieurs technologies comme <strong>Next.js</strong>, <strong>React.js</strong>,
            <strong> React Native</strong>, <strong>Django</strong>, <strong>Node.js</strong>,
            <strong> Spring Boot (Java)</strong> et <strong>PostgreSQL/MySQL</strong>. Je conçois des
            APIs REST sécurisées (authentification JWT) et j’intègre les frontends web/mobile.
          </Paragraph>
          <Paragraph>
            Curieux et rigoureux, j’aime relever des défis techniques, apprendre en continu et
            travailler en équipe pour livrer des produits impactants. Je m’intéresse également à la
            <strong> cybersécurité</strong> et au partage de connaissances.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
