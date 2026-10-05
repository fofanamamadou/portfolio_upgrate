import React from 'react';
import { Tag, Typography, Button } from 'antd';
import { FiArrowUpRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

/**
 * Composant ProjectCard
 * Disposition non-encadrée pour le texte, avec l'image dans un cadre indépendant.
 * Inclut la ligne de métadonnées avec le numéro du projet, l'année et la catégorie.
 */
const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;
  const projectNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
  const yearTag = project.year || '2026';
  const categoryTag = project.category || 'System';

  return (
    <div className={`project-row-item ${isEven ? 'row-normal' : 'row-reversed'}`}>
      {/* Cadre de l'image indépendant */}
      <div className="project-row-image-wrapper">
        <div className="project-row-image-frame">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="project-row-image"
          />
        </div>
      </div>

      {/* Contenu textuel (directement sur le fond du site, aligné en haut) */}
      <div className="project-row-content">
        <div className="project-meta-line">
          {yearTag} · {categoryTag}
        </div>

        <Title level={2} className="project-row-title">
          {project.title}
        </Title>

        <Paragraph className="project-row-description">
          {project.description}
        </Paragraph>

        <div className="project-row-techs">
          {project.technologies.map(tech => (
            <Tag key={tech} className="project-tech-pill">{tech}</Tag>
          ))}
        </div>

        {project.siteUrl && (
          <div className="project-action-wrapper" style={{ marginTop: '16px' }}>
            <Button
              type="primary"
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              {t('projects.visit_site') || 'Visiter le site'}
              <FiArrowUpRight />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
