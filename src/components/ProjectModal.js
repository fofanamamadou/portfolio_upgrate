import React from 'react';
import { Modal, Button, Tag } from 'antd'; // Importe les composants Modal, Button, Tag d'Ant Design
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'; // Importe les icônes GitHub et Lien

/**
 * Composant ProjectModal
 * Affiche les détails d'un projet dans une fenêtre modale.
 * Inclut une vidéo ou une image, une description, les technologies et des liens.
 */
const ProjectModal = ({ project, visible, onClose }) => {
  // Si aucun projet n'est fourni, ne rend rien
  if (!project) return null;

  return (
    // Composant Modal d'Ant Design
    <Modal
      title={project.title} // Titre de la modale (titre du projet)
      open={visible} // Contrôle la visibilité de la modale
      onCancel={onClose} // Fonction appelée lors de la fermeture de la modale (clic en dehors ou sur la croix)
      footer={null} // Supprime le pied de page par défaut de la modale
      width={800} // Largeur de la modale
    >
      {/* Affiche une vidéo si videoHtml est présent, sinon affiche l'image */}
      {project.videoHtml ? (
        <div dangerouslySetInnerHTML={{ __html: project.videoHtml }} />
      ) : (
        <img src={project.imageUrl} alt={project.title} style={{ width: '100%', borderRadius: '8px' }} />
      )}

      {/* Description du projet */}
      <p style={{ marginTop: '24px', fontSize: '16px' }}>{project.description}</p>

      {/* Section des technologies */}
      <div style={{ margin: '24px 0' }}>
        <strong>Technologies:</strong><br /> {/* Titre "Technologies" */}
        {/* Mappe sur les technologies pour afficher des Tags */}
        {project.technologies.map(tech => (
          <Tag key={tech} style={{ marginTop: '8px' }}>{tech}</Tag> // Tag Ant Design pour chaque technologie
        ))}
      </div>

      {/* Section des boutons d'action (GitHub et Site Live) */}
      <div className="project-modal-links">
        {/* Bouton "Code Source" si githubUrl est présent */}
        {project.githubUrl_front && (
          <Button 
            href={project.githubUrl_front} // Lien vers le dépôt GitHub
            target="_blank" // Ouvre dans un nouvel onglet
            icon={<GithubOutlined />} // Icône GitHub
          >
            Code Source frontend
          </Button>
        )}
        {project.githubUrl_back && (
          <Button 
            href={project.githubUrl_back} // Lien vers le dépôt GitHub
            target="_blank" // Ouvre dans un nouvel onglet
            icon={<GithubOutlined />} // Icône GitHub
          >
            Code Source backend
          </Button>
        )}
        {/* Bouton "Visiter le Site" si siteUrl est présent */}
        {project.siteUrl && (
          <Button 
            href={project.siteUrl} // Lien vers le site live
            target="_blank" // Ouvre dans un nouvel onglet
            icon={<LinkOutlined />} // Icône de lien
            type="primary" // Style de bouton primaire d'Ant Design
          >
            Visiter le Site
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ProjectModal;
