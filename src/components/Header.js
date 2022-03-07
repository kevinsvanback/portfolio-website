import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.mainNav}>
          <NavLink className={styles.logo} to={'/'}>KS</NavLink>
          <ul>
            <li><NavLink className={(navData) => navData.isActive ? `${styles.currentPage} ${styles.link}` : styles.link} to={'/'}>Home</NavLink></li>
            {/* <li><NavLink className={`${styles.link} ${({ isActive }) => (isActive ? styles.currentPage : '')}`} to={'/'}>Home</NavLink></li> */}
            <li><NavLink className={(navData) => navData.isActive ? `${styles.currentPage} ${styles.link}` : styles.link} to={'/about'}>About</NavLink></li>
            {/* <li><NavLink className={(navData) => navData.isActive ? `${styles.currentPage} ${styles.link}` : styles.link} to={'/timeline'}>Timeline</NavLink></li> */}
            <li><NavLink className={(navData) => navData.isActive ? `${styles.currentPage} ${styles.link}` : styles.link} to={'/projects'}>Projects</NavLink></li>
            <li><NavLink className={(navData) => navData.isActive ? `${styles.currentPage} ${styles.link}` : styles.link} to={'/contact'}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;