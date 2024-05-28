import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} ${styles.container}`}>
        <p>Copyright &copy; <span style={{color: '#FF9277'}}>{currentYear}</span>. All rights reserved.</p>
        <div className={styles.social}>
          <a href="https://www.instagram.com/kevinsvanback/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/kevinsvanback/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
          <a href="https://www.github.com/kevinsvanback/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;