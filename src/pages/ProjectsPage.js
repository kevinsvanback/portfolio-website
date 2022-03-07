// import { Link } from 'react-router-dom';
import styles from './ProjectsPage.module.css';


const ProjectsPage = () => {
  return (
    <>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <div className={`${styles.project} ${styles.project1}`}></div>
          <div className={styles.projectInfoContainer}>
            <h1>Crypto Tracker</h1>
            <p>React crypto tracker app displays cryptocurrency prices by market cap.</p>
            <div className={styles.buttonContainer}>
              <a href={'https://kevinsvanback-react-crypto-tracker.netlify.app/'} target='_blank' rel='noopener noreferrer' className={styles.button}>Live Demo</a>
              <a href={'https://github.com/kevinsvanback/react-crypto-tracker'} target='_blank' rel='noopener noreferrer' className={styles.button}>Source Code</a>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.project} ${styles.project2}`}></div>
          <div className={styles.projectInfoContainer}>
            <h1>Food Order App</h1>
            <p>React food order app. Select your items and procees to checkout.</p>
            <div className={styles.buttonContainer}>
              <a href={'https://kevinsvanback-react-food-order-app.netlify.app/'} target='_blank' rel='noopener noreferrer' className={styles.button}>Live Demo</a>
              <a href={'https://github.com/kevinsvanback/react-food-order-app'} target='_blank' rel='noopener noreferrer' className={styles.button}>Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;