import React from 'react'
import Link from 'next/link'
import styles from "./Header.module.css"

function header() {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
   
        <Link className='px-4' href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/research'>Research</Link>
        <Link href='/experience'>Experience</Link>
        <Link href='/mindmap'>Mindmap</Link>
        <Link href='/contact'>Contact</Link>
      
      </div>
    </header>
  )
}

export default header