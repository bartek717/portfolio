import React from 'react';
import styles from './tab.module.css';

type ProjectProps = {
  title: string;
  description: string;
  technologies?:string;
  image?: string;
  githubLink?: string; 
};

const Job: React.FC<ProjectProps> = ({ title, description, image, technologies, githubLink }) => {
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
          </div>
        </div>
      </div>
    );
  };

  export default Job;