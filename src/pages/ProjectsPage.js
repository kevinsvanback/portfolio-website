import styles from './ProjectsPage.module.css';


const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <div className={styles.projectCard}>
        <div className={`${styles.project} ${styles.project1}`}></div>
        <div className={styles.projectInfoContainer}>
          <h1>Crypto tracker</h1>
          <p>React crypto tracker app displays cryptocurrency prices by market cap.</p>
          <div className={styles.buttonContainer}>
            <a href={'https://kevinsvanback-react-crypto-tracker.netlify.app/'} target='_blank' rel='noopener noreferrer' className={styles.button}>Live demo</a>
            <a href={'https://github.com/kevinsvanback/react-crypto-tracker'} target='_blank' rel='noopener noreferrer' className={styles.button}>Source code</a>
          </div>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={`${styles.project} ${styles.project2}`}></div>
        <div className={styles.projectInfoContainer}>
          <h1>Google chat room</h1>
          <p>React chat room app with Google authentication.</p>
          <div className={styles.buttonContainer}>
            <a href={'https://kevinsvanback-react-chat-room.netlify.app/'} target='_blank' rel='noopener noreferrer' className={styles.button}>Live demo</a>
            <a href={'https://github.com/kevinsvanback/chat-room-app'} target='_blank' rel='noopener noreferrer' className={styles.button}>Source code</a>
          </div>
        </div>
      </div>
      <div className={styles.projectCard}>
        <div className={`${styles.project} ${styles.project3}`}></div>
        <div className={styles.projectInfoContainer}>
          <h1>Perssons måleri i Trosa</h1>
          <p>Contact page for local painter company.</p>
          <div className={styles.buttonContainer}>
            <a href={'https://perssonsmaleri.se/'} target='_blank' rel='noopener noreferrer' className={styles.button}>Live demo</a>
            <a href={'https://github.com/kevinsvanback/perssonsMaleri'} target='_blank' rel='noopener noreferrer' className={styles.button}>Source code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;