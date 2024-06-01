import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import arrow from '../images/arrow.png';
import styles from './ContactPage.module.css';

const ContactPage = () => {

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.buttonAndHeadingContainer}>
              <div className={styles.contactHeading}>
                <h3>Email</h3>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              </div>
            </div>
            <div className={styles.contactContent}>
              <p>kevin.svanback@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.buttonAndHeadingContainer}>
              <div className={styles.contactHeading}>
                <h3>Phone</h3>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              </div>
            </div>
            <div className={styles.contactContent}>
              <p>076-3060772</p>
            </div>
          </div>
        </div>
        <img className={styles.arrowImg} src={arrow} alt=':)' />
      </section>
    </>
  );
};

export default ContactPage;