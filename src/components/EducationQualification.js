import React from "react";
import styles from "../styles/educationalQualification.module.css";

const EducationalQualification = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Educational Qualification</h3>
      <form className={styles.educationForm}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Highest Qualification</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
          <label className={styles.inputLabel}>Year of Passing</label>
          <input type="text" placeholder="YYYY" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Specialization/Subject Expertise</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Additional Certifications (if any)</label>
          <input type="text" placeholder="Write here" className={styles.inputField} />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>University/Institution Name</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
      </form>
    </div>
  );
};

export default EducationalQualification;
