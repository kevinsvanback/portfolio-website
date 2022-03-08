import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            {/* <i class="fas fa-envelope fa-2x"></i> */}
            <h3>Email</h3>
            <p>kevin.svanback@gmail.com</p>
          </div>
          <div className={styles.contactInfo}>
            {/* <i class="fas fa-phone fa-2x"></i> */}
            <h3>Phone</h3>
            <p>076-3060772</p>
          </div>
          <div className={styles.contactInfo}>
            {/* <i class="fas fa-address-card fa-2x"></i> */}
            <h3>Address</h3>
            <p>Apelvägen 9, 619 91 Trosa</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;