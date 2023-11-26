import React from 'react'
import Header from '../Header'
import styles from './projects.module.css'

function page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <h1 className={styles.header}>
              Projects
            </h1>
            <p className={styles.mainText}>
              I've done a variety of projects, spanning from machine learning models to full stack web apps.
            </p>
            <p className={styles.mainText}>
              Here you can see them all with (some) github links. 
            </p>
          </div>
          <div className={styles.contentSection}>
            <div>
              project1
            </div>
            <div>
              project2
            </div>
            <div>
              project3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page