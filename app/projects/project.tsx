import React from 'react';
import styles from './Project.module.css';

// Define the type for the props
type ProjectProps = {
  title: string;
  description: string;
  image?: string;
  githubLink?: string; // Optional prop
};

const Project: React.FC<ProjectProps> = ({ title, description, image, githubLink }) => {
    return (
      <div className={styles.projectContainer}>
        <div className={styles.projectContent}>
          {image && (
            <div className={styles.imageWrapper}>
              <img src={image} alt={title} className={styles.projectImage} />
            </div>
          )}
          <div className={styles.textWrapper}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            {githubLink && (
              <a href={githubLink} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Project;