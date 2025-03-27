import React from "react";
import styles from "../styles/contactDetails.module.css";

const ContactDetails = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Contact Details</h3>
      <form className={styles.contactForm}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Contact Number (Primary)</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Alternate Contact Number</label>
          <input type="text" placeholder="Write here" className={styles.inputField} />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Email Address</label>
          <input type="email" placeholder="example@gmail.com" className={styles.inputField} required />
        </div>
      </form>
    </div>
  );
};

export default ContactDetails;
