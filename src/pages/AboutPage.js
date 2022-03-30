import { faFilePdf, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myCV from '../images/CV-kevin-svanback.pdf';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.buttonContainer}>
        <a className={styles.button} download href={myCV} rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} icon={faFilePdf} />Download CV</a>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2013: Economics</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Studied economics in high school.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2017: Technical Preparatory Year</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Preparation for university.
          </p>
          <p>
            - Physics
            <br />
            - Mathematics
            <br />
            - Chemistry
            <br />
            - Computer science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2018: Information Systems</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Began my university studies in information systems.
          </p>
          <p>
            - Informatics with a specialization in systems science, basic course
            <br />
            - Interaction design
            <br />
            - Requirements management
            <br />
            - Object-oriented analysis and design
            <br />
            - System development project with Scrum and Extreme Programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2019: Information Systems, second year</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Continued my studies.
          </p>
          <p>
            - Database management with SQL Server
            <br />
            - Client programming for web systems
            <br />
            - Object-oriented programming with C#
            <br />
            - Web development with .NET MVC
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2020: Information Systems, third year</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Continued my studies.
          </p>
          <p>
            - Rhetoric and communicative leadership
            <br />
            - Meal knowledge and hospitality, wine knowledge
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">2021: Information Systems, end of third year</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Continued my studies.
          </p>
          <p>
            - Informatics with a specialization in systems science, bachelor's course
            <br />
            - Informatics, Frontend development project
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" iconStyle={{ background: '#39D4D5', color: '#fff' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <h3 className="vertical-timeline-element-title">Today: Self-education</h3>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Udemy.com.
          </p>
          <p>
            - HTML
            <br />
            - CSS
            <br />
            - JavaScript
            <br />
            - React
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AboutPage;