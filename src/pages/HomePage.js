import { faCss3Alt, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
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

      <section className={styles.floatingSectionWrapper}>
        <h1>My Expertise</h1>


        <div className={styles.floatingSection}>
          <div className={styles.floatingWrapper}>
            <div className={styles.floatingHeaderWrapper}>
              <svg className={styles.floatinHeaderSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
              <h1 className={styles.floatingHeader}>Frontend</h1>
            </div>
            <div className={styles.floatingContainer}>
              <div className={`${styles.floating} ${styles.floating1}`}>
                <FontAwesomeIcon icon={faHtml5} className={styles.floatingIcon} />
                <p>HTML</p>
              </div>
              <div className={`${styles.floating} ${styles.floating2}`}>
                <FontAwesomeIcon icon={faCss3Alt} className={styles.floatingIcon} />
                <p>CSS</p>
              </div>
              <div className={`${styles.floating} ${styles.floating3}`}>
                <FontAwesomeIcon icon={faReact} className={styles.floatingIcon} />
                <p>React</p>
              </div>
            </div>
          </div>

          <div className={styles.floatingWrapper}>
            <div className={styles.floatingHeaderWrapper}>
              <svg className={styles.floatinHeaderSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 258.2c0 2.7-1 5.2-4.2 8c-3.8 3.1-10.1 5.8-17.8 5.8H344c-53 0-96 43-96 96c0 6.8 .7 13.4 2.1 19.8c3.3 15.7 10.2 31.1 14.4 40.6l0 0c.7 1.6 1.4 3 1.9 4.3c5 11.5 5.6 15.4 5.6 17.1c0 5.3-1.9 9.5-3.8 11.8c-.9 1.1-1.6 1.6-2 1.8c-.3 .2-.8 .3-1.6 .4c-2.9 .1-5.7 .2-8.6 .2C141.1 464 48 370.9 48 256S141.1 48 256 48s208 93.1 208 208c0 .7 0 1.4 0 2.2zm48 .5c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48h97.9c36.5 0 69.7-24.8 70.1-61.3zM160 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
              <h1 className={styles.floatingHeader}>Design</h1>
            </div>
            <div className={styles.floatingContainer}>
              <div className={`${styles.floating} ${styles.floating4}`}>
                <svg className={styles.floatingIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"/></svg>
                <p>Figma</p>
              </div>
              <div className={`${styles.floating} ${styles.floating5}`}>
                <svg className={styles.floatingIcon} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="192px" height="192px">    <path d="M 3 3 L 3 21 L 21 21 L 21 3 L 3 3 z M 6.890625 8 L 9.5898438 8 C 11.915844 8 12.193359 10.140469 12.193359 10.605469 C 12.192359 12.465469 10.891641 13.115234 9.6816406 13.115234 L 8.5644531 13.115234 L 8.5644531 15.90625 L 6.890625 15.90625 L 6.890625 8 z M 8.5644531 9.3027344 L 8.5644531 11.814453 L 9.6816406 11.814453 C 10.425641 11.814453 10.611328 11.256469 10.611328 10.605469 C 10.612328 9.9534687 10.333641 9.3027344 9.6816406 9.3027344 L 8.5644531 9.3027344 z M 15.169922 9.953125 C 16.564922 9.953125 17.308594 10.791453 17.308594 11.814453 L 15.728516 11.814453 C 15.728516 11.349453 15.541922 11.070312 15.169922 11.070312 C 14.890922 11.070312 14.611328 11.256906 14.611328 11.628906 C 14.611328 12.558906 17.310547 12.279172 17.310547 14.326172 C 17.309547 15.721172 15.913922 16 15.169922 16 C 13.681922 16 12.9375 14.976875 12.9375 14.046875 L 14.425781 14.046875 C 14.425781 14.790875 14.983922 14.884766 15.169922 14.884766 C 15.541922 14.884766 15.820313 14.698172 15.820312 14.326172 C 15.820312 13.489172 13.121094 13.581703 13.121094 11.720703 C 13.121094 10.325703 14.424922 9.953125 15.169922 9.953125 z"/></svg>
                <p>Photoshop</p>
              </div>
              <div className={`${styles.floating} ${styles.floating6}`}>
                <svg className={styles.floatingIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="192px" height="192px"><path d="M21,3H3v18h18V3z M9.79,9.302H8.674v2.512H9.79c0.744,0,0.93-0.558,0.93-1.209C10.721,9.953,10.442,9.302,9.79,9.302z M9.79,13.116H8.674V16H7V8h2.698c2.326,0,2.605,2.14,2.605,2.605C12.302,12.465,11,13.116,9.79,13.116z M16.835,11.6 c-0.074-0.008-0.473-0.047-0.551-0.047c-0.637,0-0.842,0.402-0.92,0.598V16H13.7v-6h1.564l0.047,0.686 c0.125-0.254,0.459-0.803,1.084-0.803c0.274,0,0.402,0.053,0.457,0.076L16.835,11.6z" /></svg>
                <p>Premiere Pro</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* <section className={styles.developmentSection}>
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
      </section> */}

    </div>
  );
};

export default HomePage;