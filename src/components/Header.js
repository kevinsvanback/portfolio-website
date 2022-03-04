import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.mainNav}>
          <Link className={styles.logo} to={'/'}>KS</Link>
          <ul>
            <li><Link className={styles.link} to={'/'}>Home</Link></li>
            <li><Link className={styles.link} to={'/about'}>About</Link></li>
            {/* <li><Link className={styles.link} to={'/timeline'}>Timeline</Link></li> */}
            <li><Link className={styles.link} to={'/projects'}>Projects</Link></li>
            <li><Link className={styles.link} to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;