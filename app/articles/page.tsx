import React from 'react'
import Header from '../Header'
import styles from './articles.module.css'

function page() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.contentWrapper}>
          <div className={styles.mainContainer}>
          
          hi!
          </div>
        </div>
      </div>
    )
  }

  export default page