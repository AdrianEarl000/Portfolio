import styles from './Style/Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Copyright Text */}
        <p className={styles.copyright}>
          Copyright &copy; 2026 All rights reserved | 
          <span className={styles.heart}> <FaHeart /> </span>
          
        </p>

        {/* Circular Social Icons */}
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedinIn />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;