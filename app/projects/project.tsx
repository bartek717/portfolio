import React from 'react';
import styles from './Project.module.css';

// Define the type for the props
type ProjectProps = {
  title: string;
  description: string;
  githubLink?: string; // Optional prop
};

const Project: React.FC<ProjectProps> = ({ title, description, githubLink }) => {
  return (
    <div className={styles.projectContainer}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      {githubLink && (
        <a href={githubLink} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default Project;
