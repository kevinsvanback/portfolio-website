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
              <button>Live Demo</button>
              <button>Source Code</button>
            </div>
          </div>
        </div>
        <div className={styles.projectCard}>
          <div className={`${styles.project} ${styles.project2}`}></div>
          <div className={styles.projectInfoContainer}>
            <h1>Food Order App</h1>
            <p>React food order app.</p>
            <div className={styles.buttonContainer}>
              <button>Live Demo</button>
              <button>Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;