import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typewriter from 'typewriter-effect';
import profileTransparent from '../images/profile-transparent-455x455.png';
import styles from './HomePage.module.css';


const HomePage = () => {
  return (
    <div className={styles.homePage}>

      <div className={styles.profileContainer}>
        <img className={styles.profileImg} src={profileTransparent} alt=':)' />
      </div>

      <section className={styles.typewriterSection}>
        <div className={styles.typewriter}>
          I am Kevin the <Typewriter options={{
            strings: ['<span style="color: #FF9277;">frontend</span> developer'],
            autoStart: true,
            loop: true,
          }} />
        </div>
      </section>
      <section className={styles.developmentSection}>
        <div className={styles.developmentHeading}>
          <h2 className={styles.sectionTitle}>
            The core tools I use for development
          </h2>
        </div>

        <div className={styles.bottomLine} />

        <div className={styles.processContainer}>
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

    </div>
  );
};

export default HomePage;