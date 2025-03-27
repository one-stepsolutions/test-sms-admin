import React from "react";
import styles from "../styles/professionalExperience.module.css";

const ProfessionalExperience = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Professional Experience</h3>
      <form className={styles.experienceForm}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Total Years of Experience</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
          <label className={styles.inputLabel}>Designation</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Previous Employer Name</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Subjects Taught (if applicable)</label>
          <input type="text" placeholder="Write here" className={styles.inputField} />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Reason for Leaving Previous Job</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
      </form>
    </div>
  );
};

export default ProfessionalExperience;
