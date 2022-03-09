import { faChevronDown, faChevronUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import arrow from '../images/arrow2.png';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [emailIsShown, setEmailIsShown] = useState(false);
  const [phoneIsShown, setPhoneIsShown] = useState(false);
  // const [addressIsShown, setAddressIsShown] = useState(false);

  const showEmailHandler = () => {
    setEmailIsShown(!emailIsShown);
  };
  const showPhoneHandler = () => {
    setPhoneIsShown(!phoneIsShown);
  };
  // const showAddressHandler = () => {
  //   setAddressIsShown(!addressIsShown);
  // };

  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.buttonAndHeadingContainer}>
              <div className={styles.chevronButton} onClick={showEmailHandler}>
                <FontAwesomeIcon className={styles.chevronIcon} icon={!emailIsShown ? faChevronDown : faChevronUp} />
              </div>
              <div className={styles.contactHeading}>
                <h3>Email</h3>
                <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              </div>
            </div>
            <div className={styles.contactContent}>
              {!emailIsShown && <p className={styles.invisible}>kevin.svanback@gmail.com</p>}
              {emailIsShown && <p>kevin.svanback@gmail.com</p>}
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.buttonAndHeadingContainer}>
              <div className={styles.chevronButton} onClick={showPhoneHandler}>
                <FontAwesomeIcon className={styles.chevronIcon} icon={!phoneIsShown ? faChevronDown : faChevronUp} />
              </div>
              <div className={styles.contactHeading}>
                <h3>Phone</h3>
                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              </div>
            </div>
            <div className={styles.contactContent}>
              {!phoneIsShown && <p className={styles.invisible}>076-3060772</p>}
              {phoneIsShown && <p>076-3060772</p>}
            </div>
          </div>
          {/* <div className={styles.contactInfo}>
            <div className={`${styles.buttonAndHeadingContainer} ${styles.lastItem}`}>
              <div className={styles.chevronButton} onClick={showAddressHandler}>
                <FontAwesomeIcon className={styles.chevronIcon} icon={!addressIsShown ? faChevronDown : faChevronUp} />
              </div>
              <div className={styles.contactHeading}>
                <h3>Address</h3>
                <FontAwesomeIcon className={styles.icon} icon={faAddressCard} />
              </div>
            </div>
            <div className={styles.contactContent}>
              {!addressIsShown && <p className={styles.invisible}>Apelvägen 9, Trosa</p>}
              {addressIsShown && <p>Apelvägen 9, Trosa</p>}
            </div>
          </div> */}
        </div>
        <img className={styles.arrowImg} src={arrow} alt=':(' />
      </section>
    </>
  );
};

export default ContactPage;