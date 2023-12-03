import React from 'react'
import Header from '../Header'
import styles from './articles.module.css'
import SocialLinks from '../SocialLinks'
import Project from './tab'

function page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <div>
              <h1 className={styles.header}>
                Articles
              </h1>
              <p className={styles.mainText}>
                LOruM IPSUM LOruM IPSUM LOruM IPSUM LOruM IPSUM LOruM IPSUM
              </p>
              <p className={styles.mainText}>
                LOruM IPSUM LOruM IPSUM LOruM IPSUM LOruM IPSUM LOruM IPSUM
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Project 
              title="Paper 1" 
              description="Description of Project 1" 
              githubLink="https://github.com/link-to-project-1" 
              />
            </div>
            <div>
              <Project 
              title="Project 2" 
              description="Description of Project 1" 
              githubLink="https://github.com/link-to-project-1" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page