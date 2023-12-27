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
                I occasionally write about topics in Machine Learning and AI.
              </p>
              <p className={styles.mainText}>
                Writing allows me to dig deep into areas that interest me, and convey information in interesting ways. If you have any thoughts about my writing, please feel free to contact me!
              </p>
            </div>
            <SocialLinks/>
          </div>
          <div className={styles.contentSection}>
            <div>
              <Project 
                title="The Rise and Potential of Open Source Large Language Models in AI" 
                description="Over the past couple of months, we have seen the emergence of Large Language models that begin to compete with the state of the art. Where does this go next?" 
                mediumLink='https://medium.com/@bartekmkowalski/the-rise-and-potential-of-open-source-large-language-models-in-ai-0d30450f8b3c'
                image='brain2.png'
              />
              <Project 
              title="ChatGPT: Is the Education Industry Ready?" 
              description="Over the past year or so I've seen the education landscape completely transform. Its impact on the next generation of students will be profound, and limit their creativity and problem solving. What can we do about this?" 
              mediumLink='https://medium.com/qmind-ai/chatgpt-is-the-education-industry-ready-df8bd7575371'
              image='school.png'
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page