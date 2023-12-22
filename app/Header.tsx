'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {/* Hamburger icon */}
        <span>Menu</span>
      </div>

      <div className={`${styles.mobileLinks} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>Close</button>
        <Link href='/' onClick={toggleMenu}>Home</Link>
        <Link href='/projects' onClick={toggleMenu}>Projects</Link>
        <Link href='/research' onClick={toggleMenu}>Research</Link>
        <Link href='/articles' onClick={toggleMenu}>Articles</Link>  
        <Link href='/experience' onClick={toggleMenu}>Experience</Link>
        {/* <Link href='/mindmap' onClick={toggleMenu}>Mindmap</Link> */}
        <Link href='/contact' onClick={toggleMenu}>Contact</Link>
      </div>

      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/research'>Research</Link>
        <Link href='/articles'>Articles</Link>  
        <Link href='/experience'>Experience</Link>
        {/* <Link href='/mindmap'>Mindmap</Link> */}
        <Link href='/contact'>Contact</Link>
      </div>
    </header>
  );
}

export default Header;

