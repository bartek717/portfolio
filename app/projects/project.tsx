import React from 'react';
import styles from './project.module.css';

type ProjectProps = {
  title: string;
  description: string;
  technologies?:string;
  image?: string;
  githubLink?: string; 
  websiteLink?: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, image, technologies, githubLink, websiteLink }) => {
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
            {technologies && (
                <p className={styles.projectDescription}>{technologies}</p>
            )}
            {githubLink && (
              <a href={githubLink} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
            {websiteLink && (
              <a href={websiteLink} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                Website Link
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Project;