import React from 'react'
import Header from '../Header'
import styles from './projects.module.css'
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
                Projects
              </h1>
              <p className={styles.mainText}>
                I've done a variety of projects, spanning from machine learning models to full stack web apps.
              </p>
              <p className={styles.mainText}>
                Here you can see them all with (some) github links. 
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Project 
              title="Memoria" 
              description="Memoria is a journaling and self reflection tool powered by gpt4. Simply speak into your phone, all of your thoughts will be accessible via chat." 
              githubLink="https://github.com/Memoria-ai/memoria.live" 
              image='memoria.png'
              />
            </div>
            <div>
              <Project 
              title="Bias Detection within LLM's" 
              description="With todays jump in LLM usage, I wondered how the use of news articles in training data may impact the model. Here, I use DistilBert and BertForMaskedLM to try to find and replace biased words with nuetral ones." 
              githubLink="https://github.com/bartek717/bias_analysis/tree/main" 
              image='llm.png'
              />
            </div>
            <div>
              <Project 
              title="Flight Checker" 
              description="I wanted an automated way to check google flights for cheap flights to a set of specific locations, custom built for the features I wanted. This didnt exist for free, so I built it for personal use." 
              githubLink="https://github.com/bartek717/flight-checker" 
              image='plane.png'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page