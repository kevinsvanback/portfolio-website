import { faFilePdf, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import myCV from '../images/CV_kevin_svanback_2024.pdf';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.buttonContainer}>
        <a className={styles.button} download href={myCV} rel='noopener noreferrer'><FontAwesomeIcon className={styles.icon} icon={faFilePdf} />Download CV</a>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#F5F5F5' }} iconStyle={{ background: '#22333B', color: '#FF9277' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <div className={styles.headerWrapper}>
            <h3 className="vertical-timeline-element-title"><span className={styles.timelineDetails}>Today - 2022:</span></h3>
            <h3 className="vertical-timeline-element-title">Software developer<span className={styles.timelineFontStyle}>, Collabodoc AB</span></h3>
          </div>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Software developer.
          </p>
          <p>
            <span className={styles.timelineDetails}>- Frontend Development:</span> Expert in HTML, CSS, JavaScript, React, and TypeScript.
            <br />
            <span className={styles.timelineDetails}>- Design:</span> Utilizes Figma, Adobe Photoshop, and Premiere Pro to create sketches, videos, and images.
            <br />
            <span className={styles.timelineDetails}>- UI Components:</span> Experience in building and documenting components with Storybook.
            <br />
            <span className={styles.timelineDetails}>- Version Control and Collaboration:</span> Works daily with Git and Azure DevOps.
            <br />
            <span className={styles.timelineDetails}>- Fullstack Exposure:</span> Basic knowledge in C#, PostgreSQL, .NET, MVC, and APIs.
            <br />
            <span className={styles.timelineDetails}>- Web Management:</span> Updates and maintains the company's website via Wix.
            <br />
            <span className={styles.timelineDetails}>- Customer Interaction:</span> Participates in meetings with clients to discuss requirements and preferences, and offers technical support.
            <br />
            <span className={styles.timelineDetails}>- Events:</span> Represents the company at company exhibitions and other events.
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" contentStyle={{ background: '#F5F5F5' }} iconStyle={{ background: '#22333B', color: '#FF9277' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <div className={styles.headerWrapper}>
            <h3 className="vertical-timeline-element-title"><span className={styles.timelineDetails}>2021 - 2018:</span></h3>
            <h3 className="vertical-timeline-element-title">Bachelor's degree in Information Systems<span className={styles.timelineFontStyle}>, Örebro university</span></h3>
          </div>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            University studies in information systems.
          </p>
          <p>
            <span className={styles.timelineDetails}>-</span> Informatics with a specialization in systems science.
            <br />
            <span className={styles.timelineDetails}>-</span> Informatics, frontend development project.
          </p>
          <p>
            <span className={styles.timelineDetails}>-</span> Interaction design.
            <br />
            <span className={styles.timelineDetails}>-</span> Requirements management.
            <br />
            <span className={styles.timelineDetails}>-</span> Object-oriented analysis and design.
            <br />
            <span className={styles.timelineDetails}>-</span> Development project with Scrum and Extreme Programming.
          </p>
          <p>
            <span className={styles.timelineDetails}>-</span> Database management with SQL Server.
            <br />
            <span className={styles.timelineDetails}>-</span> Client programming for web systems.
            <br />
            <span className={styles.timelineDetails}>-</span> Object-oriented programming with C#.
            <br />
            <span className={styles.timelineDetails}>-</span> Web development with .NET MVC.
          </p>
          <p>
            <span className={styles.timelineDetails}>-</span> Rhetoric and communicative leadership.
            <br />
            <span className={styles.timelineDetails}>-</span> Meal knowledge and hospitality, including wine knowledge.
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: '#F5F5F5' }} iconStyle={{ background: '#22333B', color: '#FF9277' }} icon={<FontAwesomeIcon icon={faGraduationCap} />}>
          <div className={styles.headerWrapper}>
            <h3 className="vertical-timeline-element-title"><span className={styles.timelineDetails}>2017:</span></h3>
            <h3 className="vertical-timeline-element-title">Technical Preparatory Year</h3>
          </div>
          <div className={styles.bottomLine} />
          <p className={styles.leadParagraph}>
            Preparation for university.
          </p>
          <p>
            <span className={styles.timelineDetails}>-</span> Physics
            <br />
            <span className={styles.timelineDetails}>-</span> Mathematics
            <br />
            <span className={styles.timelineDetails}>-</span> Chemistry
            <br />
            <span className={styles.timelineDetails}>-</span> Computer science
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div >
  );
};

export default AboutPage;