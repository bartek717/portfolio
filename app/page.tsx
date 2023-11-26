import Image from 'next/image'
import Header from './Header'
import styles from './page.module.css'

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
            </div>
            <div className={styles.socialLinks}>
              <a className={styles.link} href="https://github.com/bartek717" target="_blank" rel="noopener noreferrer">
                <Image src='/github.png' width={33} height={33} alt='GitHub' />
              </a>
              <a className={styles.link} href="https://www.linkedin.com/in/bartek-kowalski-68117b1ab/" target="_blank" rel="noopener noreferrer">
                <Image src='/linkedin.png' width={33} height={33} alt='LinkedIn' />
              </a>
              <a className={styles.link} href="https://medium.com/@bartekmkowalski" target="_blank" rel="noopener noreferrer">
                <Image src='/medium.png' width={33} height={33} alt='Medium' />
              </a>
              <a className={styles.link} href="https://twitter.com/bartekkowalski_" target="_blank" rel="noopener noreferrer">
                <Image src='/twitter.png' width={33} height={33} alt='Twitter' />
              </a>
              <a className={styles.link} href="mailto:bartekkowalski465@gmail.com">
                <Image src='/email.png' width={33} height={25} alt='Email' />
              </a>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.picture}>
              <Image src='/meinqubateheadshots.jpg' width={608} height={778} alt='image of Bartek Kowalski'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
