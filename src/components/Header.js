import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.mainNav}>
          <h1><Link to={'/'}>KS</Link></h1>
          <ul>
            <li><Link className={styles.link} to={'/'}>Home</Link></li>
            <li><Link className={styles.link} to={'/'}>About</Link></li>
            <li><Link className={styles.link} to={'/'}>Timeline</Link></li>
            <li><Link className={styles.link} to={'/'}>Projects</Link></li>
            <li><Link className={styles.link} to={'/'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;