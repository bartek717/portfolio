import Image from 'next/image'
import Header from './Header'
import styles from './page.module.css'
import SocialLinks from './SocialLinks'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContainer}>
          <div className={styles.textSection}>
            <div>
              <h1 className={styles.header}>Bartek Kowalski</h1>
              <p className={styles.mainText}>I'm a dedicated Founder, Machine Learning Developer,
                 Student out of Queens University.</p>
              <p className={styles.mainText}>My interests ly in the fields of NLP, Reinforcement
                 Learning and Autonomous Agents.</p>
              {/* add link here */}
              <a className={styles.mainText} href="https://drive.google.com/file/d/1wSOdVZG3JGyQnbGnfPBxd64uHV8CmeZt/view?usp=sharing" target="_blank">View My Resume</a>
            </div>
            <SocialLinks/>
            
          </div>
          <div className={styles.imageSection}>
            <div className={styles.picture}>
              <img src='/meinqubateheadshots.jpg' alt='image of Bartek Kowalski'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
