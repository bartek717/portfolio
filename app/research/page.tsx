import React from 'react'
import Header from '../Header'
import styles from './research.module.css'
import SocialLinks from '../SocialLinks'
import Project from './project'

function page() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <div>
              <h1 className={styles.header}>
                Research
              </h1>
              <p className={styles.mainText}>
                Machine Learning research is currently one of my main focuses. 
              </p>
              <p className={styles.mainText}>
                Here are some of my developing papers, with more to be added over the coming months.
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Project 
              title="Effecient Fine Tuning of LLM's using coreset selection methods." 
              description="I am currently working on this paper. The idea is to use specific subsets of data to tune the model, selected based on different coreset selection methods." 
              paperLink="https://drive.google.com/file/d/1IfwUNqBIgRo-SQ_JeLR_gn6TTh12475q/view?usp=sharing" 
              image='/finetune.png'
              />
            </div>
            <div>
              <Project 
              title="DCL Crowd Counting" 
              description="My team and I worked with a Kenyan university to solve the problem of long ATM lines in Kenya. We employed numerous strategies, such as Yolov8 and Deep CNN's to solve this problem." 
              paperLink='https://drive.google.com/file/d/1p5JQlSMlYR9nM-ugCZPRVRmhzSVAtnKY/view?usp=sharing'
              image='dcl.png'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page