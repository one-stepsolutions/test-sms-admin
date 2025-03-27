import React from "react";
import styles from "../styles/parentDetails.module.css";

const GuardianParentDetails = () => {
  return (
    <div className={styles.parentGuardianContainer}>
      {/* Section Title */}
      <h3 className={styles.sectionTitle}>Parent/Guardian Details</h3>

      {/* Form Container */}
      <div className={styles.formContainer}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Father’s Name</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Mother’s Name</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Guardian’s Name</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Relationship with Student</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>

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

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Occupation of Parent/Guardian</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Annual Income</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
      </div>
    </div>
  );
};

export default GuardianParentDetails;
