import React from "react";
import styles from "../styles/admissionDetails.module.css";

const AdmissionDetails = () => {
  return (
    <div className={styles.admissionFormContainer}>
      {/* Section Title */}
      <h3 className={styles.sectionTitle}>Admission Details</h3>

      <form className={styles.admissionForm}>
        {/* Admission for Grade/Standard */}
        <div className={styles.fullWidthInput}>
          <label className={styles.inputLabel}>Admission for Grade/Standard</label>
          <input type="text" placeholder="Enter Grade or Standard" className={styles.inputField} required />
        </div>

        {/* Academic Year & Admission Type */}
        <div className={styles.twoColumnRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Academic Year:</label>
            <input type="text" placeholder="YYYY-YYYY" className={styles.inputField} required />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Admission Type:</label>
            <select className={styles.selectField} required>
              <option value="">Select</option>
              <option value="Regular">Regular</option>
              <option value="Transfer">Transfer</option>
              <option value="Scholarship">Scholarship</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionDetails;
