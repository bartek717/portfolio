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
                I have various experience within AI research and software development
              </p>
              <p className={styles.mainText}>
                Included are my club positions within Queens University, where I lead teams within QMIND and InQUbate.
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Job 
              title="Distributive - Software Engineering Intern" 
              description="I worked on the frontend of the main Distributive website, as well as implementing a backend for user authentication and messaging. Used React, Typescript and NodeJS" 
              image='/dist.jpg'
              />
            </div>
            <div>
              <Job 
              title="QMIND - Director of AI Research" 
              description="I lead AI research at QMIND, Canada's largest undergraduate organization on AI. My division outputs four research intensive papers every year, spanning from Semantic Contextualization of 3D Environments, to Bias Modelling of Large Datasets." 
              image='qmind.png'
              />
            </div>
            <div>
              <Job 
              title="University of Toronto - Research Intern" 
              description="During my time at the University of Toronto, i created a guassian naive bayes program to classify corrupted number data. This was my first real intro into machine learning." 
              image='uoft.png'
              />
            </div>
            <div>
              <Job 
              title="CallSmart - Full Stack Developer" 
              description="I was the lead developer at a startup offering missed call solutions to Dental Clinics. I developed a way to retain information from clients, even if their calls were missed with Python. Also developed a frontend using NextJs." 
              image='call.png'
              />
            </div>
            <div>
              <Job 
              title="InQUbate - Engineering Lead" 
              description="I support the development of two student run startups, advising them on technical decisions and assist with the entire development pipeline." 
              image='inqubate.jpg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page