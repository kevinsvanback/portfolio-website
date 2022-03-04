import styles from './ProjectsPage.module.css';


const ProjectsPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.projectContainer}>
        <div className={`${styles.project} ${styles.project1}`}></div>
        <div className={`${styles.project} ${styles.project2}`}></div>
      </div>
    </div>
  );
};

export default ProjectsPage;