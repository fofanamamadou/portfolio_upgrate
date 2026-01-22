import React from 'react';
import { Typography, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

/**
 * Composant About
 * Représente la section "À propos de moi" du portfolio.
 */
const About = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Row align="middle" gutter={[32, 32]}>
        {/* Colonne pour la photo/avatar */}
        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          <Avatar size={150} src="https://i.ibb.co/W4JdQgPf/Mypicture.jpg" />
        </Col>

        {/* Colonne pour le texte de présentation */}
        <Col xs={24} sm={16}>
          <Title level={2}>À propos de moi</Title>
          <Paragraph>
            Bonjour ! Je suis <strong>Mamadou FOFANA</strong>, 
            développeur full-stack avec <strong>3 ans d'expérience</strong> 
            en développement web et mobile, diplômé d'une licence en Génie Logiciel. 
            Je conçois des applications modernes, performantes et intuitives, alliant 
            <em>efficacité</em>, <em>expérience utilisateur</em> et <em>scalabilité</em>.
          </Paragraph>
          <Paragraph>
            Je maîtrise des technologies comme <strong>React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, <strong>Django</strong>, <strong>Node.js</strong>, <strong>Spring Boot (Java/Hibernate)</strong>, et les bases de données <strong>MySQL</strong> et <strong>PostgreSQL</strong>. Je développe des APIs REST sécurisées (JWT) et intègre des interfaces web et mobiles.
          </Paragraph>
          <Paragraph>
            Curieux, rigoureux et passionné par les solutions innovantes, j'aime relever des défis techniques, apprendre en continu et collaborer en équipe pour livrer des produits à fort impact. Je m'intéresse également à la <strong>cybersécurité</strong> et au partage de connaissances.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
