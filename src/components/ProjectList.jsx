import React from 'react';
import ProjectCard from './ProjectCard';

/**
 * Composant ProjectList
 * Affiche chaque projet sur une ligne complète avec disposition alternée.
 */
const ProjectList = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;
