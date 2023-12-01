import React from 'react'
import Image from 'next/image'
import styles from './SocialLinks.module.css'

function SocialLinks() {
  return (
               
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
  )
}

export default SocialLinks