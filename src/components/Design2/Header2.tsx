"use client"; // Required for scroll detection

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Style/Header.module.css'; 
import { FaCode, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa6';

const Header2 = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      // 1. Header Background
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);

      // 2. Section Detection
      const sections = ['home', 'portfolio', 'resume', 'about', 'contact'];
      
      // Calculate middle of viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   

  // Helper for smooth scrolling when clicking links
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <Link href="#home" onClick={(e) => handleScrollTo(e, 'home')} className={styles.logo}>
        <span className={styles.logoIconWrapper}>
            <FaCode size={20} color="#ff3333" />
        </span>
        <span>ADRIAN EARL</span>
      </Link>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')}
              className={activeSection === 'home' ? styles.active : ''}
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              onClick={(e) => handleScrollTo(e, 'portfolio')}
              className={activeSection === 'portfolio' ? styles.active : ''}
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              onClick={(e) => handleScrollTo(e, 'resume')}
              className={activeSection === 'resume' ? styles.active : ''}
            >
              RESUME
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')}
              className={activeSection === 'about' ? styles.active : ''}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className={activeSection === 'contact' ? styles.active : ''}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/iesinsins.yesudjdj" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/2miii_ii" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        <a href="https://github.com/AdrianEarl000" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header2;