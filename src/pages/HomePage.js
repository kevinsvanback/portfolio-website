import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.typewriter}>
        <p>I am Kevin the </p> <Typewriter options={{
          strings: ['frontend developer'],
          autoStart: true,
          loop: true,
        }} />
      </div>
    </section>
  );
};

export default HomePage;