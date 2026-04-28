import React from 'react';
import { Card, Tag } from 'antd'; // Importe les composants Card et Tag d'Ant Design

// Destructure le composant Meta de Card
const { Meta } = Card;

/**
 * Composant ProjectCard
 * Représente une carte individuelle pour un projet dans la liste.
 * Affiche le titre, une image et les technologies utilisées.
 */
const ProjectCard = ({ project, onClick }) => {
  return (
    // Composant Card d'Ant Design
    <Card
      hoverable // Rend la carte interactive au survol
      onClick={onClick} // Gère le clic sur la carte (pour ouvrir la modale)
      // Image de couverture de la carte
      cover={<img alt={project.title} src={project.imageUrl} style={{ height: 200, objectFit: 'cover' }} />}
    >
      {/* Section Meta de la carte, utilisée pour le titre */}
      <Meta title={project.title} />
      
      {/* Conteneur pour les tags de technologies */}
      <div style={{ marginTop: '16px' }}>
        {/* Mappe sur le tableau des technologies pour créer un Tag pour chaque */}
        {project.technologies.map(tech => (
          <Tag key={tech}>{tech}</Tag> // Tag Ant Design pour chaque technologie
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
