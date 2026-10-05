import React from 'react';
import { Typography, Row, Col, Avatar } from 'antd'; // Importe les composants Typography, Row, Col, Avatar d'Ant Design
import { UserOutlined } from '@ant-design/icons'; // Importe l'icône UserOutlined d'Ant Design

// Destructure les composants Title et Paragraph de Typography
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '50px 0' }}>
      <Row align="middle" gutter={[32, 32]}>
        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          <Avatar size={150} src="/images/profil.webp" alt="Mamadou FOFANA" />
        </Col>

        <Col xs={24} sm={16}>
          <Title level={2}>{t('about.title')}</Title>
          <Paragraph>
            <span dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          </Paragraph>
          <Paragraph>
            <span dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
          </Paragraph>
          <Paragraph>
            <span dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default About;
