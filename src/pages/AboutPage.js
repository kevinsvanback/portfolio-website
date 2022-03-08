import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.x}>AboutPage</div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          // date="2011 - present"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">2013: Ekonomi</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Nyköping</h4> */}
          <p>
            Studied economics in high school.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2010 - 2011"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">2017: Tekniskt basår</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Norrköping</h4> */}
          <p>
            Preparation for university.
            <br />
            - Physics
            <br />
            - Mathematics
            <br />
            - Chemistry
            <br />
            - Computer science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2008 - 2010"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">2018: Systemvetenskap</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Örebro Universitet</h4> */}
          <p>
            Began my university studies in information systems.
            <br />
            - Informatik med systemvetenskaplig inriktning, grundkurs
            <br />
            - Interaktionsdesign
            <br />
            - Kravhantering
            <br />
            - Objektorienterad analys och design
            <br />
            - Systemutvecklingsprojekt med Scrum och Extreme Programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // date="2006 - 2008"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">2019: Systemvetenskap, second year</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Örebro Universitet</h4> */}
          <p>
            Continued my studies.
            <br />
            - Databashantering med SQL Server
            <br />
            - Klientprogrammering för webbsystem
            <br />
            - Objektorienterad programmering med C#
            <br />
            - Webbsystem med .NET
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="April 2013"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">2020: Systemvetenskap, third year</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Örebro Universitet</h4> */}
          <p>
            Continued my studies.
            <br />
            - Retorik och kommunikativt ledarskap
            <br />
            - Måltidskunskap och värdskap
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="November 2012"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">2021: Systemvetenskap, end of third year</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Örebro Universitet</h4> */}
          <p>
            Continued my studies.
            <br />
            - Informatik med systemvetenskaplig inriktning, kandidatkurs
            <br />
            - Informatik, Systemutvecklingsprojekt
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Today: Self-education</h3>
          <div className={styles.bottomLine}></div>
          {/* <h4 className="vertical-timeline-element-subtitle">Udemy.com</h4> */}
          <p>
            Udemy.com.
            <br />
            - HTML
            <br />
            - CSS
            <br />
            - JavaScript
            <br />
            - React
          </p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: '#39D4D5', color: '#fff' }}
        // icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  );
};

export default AboutPage;