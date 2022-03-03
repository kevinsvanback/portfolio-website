import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typewriter from 'typewriter-effect';
import profileImg from '../images/profile.jpg';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={styles.typewriterSection}>
        <div className={styles.profileContainer}>
          <img className={styles.profileImg} src={profileImg} alt=':)' />
        </div>

        <div className={styles.typewriter}>
          <p>I am Kevin the </p> <Typewriter options={{
            strings: ['frontend developer'],
            autoStart: true,
            loop: true,
          }} />
        </div>
      </section>
      <section className={styles.developmentSection}>
        <h2 className={styles.sectionTitle}>
          The Tools I Use For Development
        </h2>

        <div className={styles.bottomLine}></div>
        <p className={styles.lead}>
          My front-end development is created using:
        </p>
        <div className={styles.process}>
          <div className={styles.processChunk}>
            <div className={styles.processIcon}>
              <FontAwesomeIcon icon={faHtml5} size='4x' />
              <div className={styles.procesStep}>1</div>
            </div>
            <h3>HTML</h3>
          </div>
          <div className={styles.processChunk}>
            <div className={styles.processIcon}>
              <FontAwesomeIcon icon={faCss3Alt} size='4x' />
              <div className={styles.procesStep}>2</div>
            </div>
            <h3>CSS</h3>
          </div>
          <div className={styles.processChunk}>
            <div className={styles.processIcon}>
              <FontAwesomeIcon icon={faJs} size='4x' />
              <div className={styles.procesStep}>3</div>
            </div>
            <h3>JavaScript</h3>
          </div>
          <div className={styles.processChunk}>
            <div className={styles.processIcon}>
              <FontAwesomeIcon icon={faReact} size='4x' />
              <div className={styles.procesStep}>4</div>
            </div>
            <h3>React</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;