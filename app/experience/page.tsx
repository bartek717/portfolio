import React from 'react'
import Header from '../Header'
import styles from './experience.module.css'
import SocialLinks from '../SocialLinks'
import Job from './job'

function page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <div>
              <h1 className={styles.header}>
                Experience
              </h1>
              <p className={styles.mainText}>
                I have verious exxperience within AI research and software development
              </p>
              <p className={styles.mainText}>
                Included are my club positions within Queens University
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Job 
              title="Project 1" 
              description="Description of Project 1" 
              githubLink="https://github.com/link-to-project-1" 
              image='/memoria.png'
              />
            </div>
            <div>
              <Job 
              title="Project 2" 
              description="Description of Project 1" 
              githubLink="https://github.com/link-to-project-1" 
              />
            </div>
            <div>
              <Job 
              title="Project 3" 
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