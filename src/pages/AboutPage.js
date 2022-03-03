import React from 'react';
import starStyles from '../components/Stars.module.css';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <div className={styles.x}>AboutPage
        <div className={starStyles.stars} />
        <div className={starStyles.stars2} />
        <div className={starStyles.stars3} />
      </div>



      {/* <div id="home" className={`${styles.intro} ${styles.route} ${styles.bgImage} ${styles.background}`}>
       
        <div className={`${styles.introContent} ${styles.displayTable}`}>
          <div className={`${styles.tableCell}`}>
            <div className={`${styles.container}`}>
              <h1 className={`${styles.introTitle} ${styles.mb4}`}>Hello, I am XYZ</h1>
              <p className={`${styles.introSubtitle}`}>
                <span className={`${styles.textSliderItems}`}></span>
              </p>
              <p className={`${styles.pt3}`}>
                <a
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.jsScroll} ${styles.px4}`}
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}

    </>
  );
};

export default AboutPage;