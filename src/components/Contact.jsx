import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// J'importe le composant 'message' d'Ant Design pour de plus belles notifications
import { Typography, Form, Input, Button, Row, Col, Space, message as antdMessage } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined, TikTokOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com'; // Importation de la bibliothèque EmailJS

// Destructure les composants de Typography et Input
const { Title } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Fonction appelée lors de la soumission du formulaire
  const onFinish = (values) => {
    setLoading(true);
    // Les clés sont lues depuis les variables d'environnement (fichier .env)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Ces paramètres seront envoyés à votre modèle EmailJS
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };

    // Appel de la fonction d'envoi d'EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        antdMessage.success(t('contact.success'));
        form.resetFields(); // Réinitialise le formulaire après envoi réussi
      })
      .catch((err) => {
        console.log('FAILED...', err);
        antdMessage.error(t('contact.error'));
      })
      .finally(() => {
        setLoading(false); // Réactive le bouton et retire le spinner
      });
  };

  return (
    // Conteneur principal de la section avec un padding vertical
    <div style={{ padding: '50px 0' }}>
      {/* Titre de la section "Me Contacter" */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>{t('contact.title')}</Title>

      {/* Utilise la grille d'Ant Design pour organiser le formulaire et les liens */}
      <Row gutter={[32, 32]}>
        {/* Colonne pour le formulaire d'envoi de message */}
        <Col xs={24} md={12}>
          <Title level={4}>{t('contact.form_title')}</Title>
          {/* Formulaire Ant Design avec validation */}
          <Form form={form} name="contact" onFinish={onFinish} layout="vertical">
            {/* Champ pour le nom */}
            <Form.Item
              name="name"
              label={t('contact.name')}
              rules={[{ required: true, message: t('contact.name_required') }]}
            >
              <Input />
            </Form.Item>
            {/* Champ pour l'email */}
            <Form.Item
              name="email"
              label={t('contact.email')}
              rules={[{ required: true, type: 'email', message: t('contact.email_required') }]}
            >
              <Input />
            </Form.Item>
            {/* Champ pour le message (zone de texte) */}
            <Form.Item
              name="message"
              label={t('contact.message')}
              rules={[{ required: true, message: t('contact.message_required') }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            {/* Bouton de soumission du formulaire */}
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                {t('contact.send')}
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* Colonne pour les liens vers les profils sociaux */}
        <Col xs={24} md={12}>
          <Title level={4}>{t('contact.social_title')}</Title>
          {/* Utilise Space pour espacer horizontalement les icônes */}
          <Space size="large">
            {/* Lien LinkedIn avec icône */}
            <a href="https://www.linkedin.com/in/mamadou-fofana1/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            {/* Lien LinkedIn avec icône */}
            <a href="https://www.tiktok.com/@fofanadev" target="_blank" rel="noopener noreferrer">
              <TikTokOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            {/* Lien GitHub avec icône */}
            <a href="https://github.com/fofanamamadou" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
            {/* Lien Email avec icône */}
            <a href="mailto:madoufof94@gmail.com">
              <MailOutlined style={{ fontSize: '40px', color: 'var(--text-color)' }} />
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
