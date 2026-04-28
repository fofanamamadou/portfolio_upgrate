import React, { useState } from 'react'; // Importe React et le hook useState
import { Row, Col } from 'antd'; // Importe les composants Row et Col d'Ant Design (pour la grille)
import ProjectCard from './ProjectCard'; // Importe le composant ProjectCard
import ProjectModal from './ProjectModal'; // Importe le composant ProjectModal

/**
 * Composant ProjectList
 * Affiche une liste de projets sous forme de cartes cliquables.
 * Gère l'ouverture et la fermeture d'une modale pour afficher les détails d'un projet.
 */
const ProjectList = ({ projects }) => {
  // État pour contrôler la visibilité de la modale des détails du projet
  const [modalVisible, setModalVisible] = useState(false);
  // État pour stocker le projet sélectionné à afficher dans la modale
  const [selectedProject, setSelectedProject] = useState(null);

  /**
   * Ouvre la modale des détails du projet.
   * @param {object} project - L'objet projet à afficher dans la modale.
   */
  const openModal = (project) => {
    setSelectedProject(project); // Définit le projet sélectionné
    setModalVisible(true); // Rend la modale visible
  };

  /**
   * Ferme la modale des détails du projet.
   */
  const closeModal = () => {
    setModalVisible(false); // Masque la modale
    setSelectedProject(null); // Réinitialise le projet sélectionné
  };

  return (
    // Fragment React pour regrouper plusieurs éléments sans ajouter de nœud DOM supplémentaire
    <>
      {/* Utilise la grille d'Ant Design pour afficher les cartes de projet */}
      <Row gutter={[32, 32]}> {/* Espacement entre les colonnes et les lignes */}
        {/* Mappe sur le tableau des projets pour créer une ProjectCard pour chaque */}
        {projects.map(project => (
          // Col (colonne) pour chaque carte, avec des tailles responsives
          <Col key={project.id} xs={24} sm={12} md={8}>
            {/* Composant ProjectCard, cliquable pour ouvrir la modale */}
            <ProjectCard project={project} onClick={() => openModal(project)} />
          </Col>
        ))}
      </Row>
      
      {/* Affiche la modale uniquement si un projet est sélectionné */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject} // Passe le projet sélectionné à la modale
          visible={modalVisible} // Contrôle la visibilité de la modale
          onClose={closeModal} // Fonction de rappel pour fermer la modale
        />
      )}
    </>
  );
};

export default ProjectList;
