import React from 'react';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

/**
 * Composant ProjectList
 * Affiche chaque projet sur une ligne complète avec disposition alternée.
 * Chaque projet glisse depuis la gauche ou la droite (en alternance) au scroll.
 */
const ProjectList = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Reveal key={project.id} direction={index % 2 === 0 ? 'left' : 'right'}>
          <ProjectCard project={project} index={index} />
        </Reveal>
      ))}
    </div>
  );
};

export default ProjectList;
