import React from "react";
import styles from "../styles/academicDetails.module.css"; // New CSS File

const AcademicDetails = () => {
  return (
    <div className={styles.academicContainer}>
      <h3 className={styles.sectionTitle}>Academic Details</h3>

      <div className={styles.inputRow}>
        {/* Last School Attended */}
        <label className={styles.inputLabel}>Last School Attended</label>
        <input type="text" placeholder="Enter School Name" className={styles.inputField} required />
      </div>

      <div className={styles.inputRow}>
        {/* Last Grade/Standard Completed */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Last Grade/Standard Completed:</label>
          <input type="text" placeholder="Eg: 10" className={styles.smallInput} required />
        </div>

        {/* Board Dropdown */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Board</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State">State Board</option>
          </select>
        </div>
      </div>

      <div className={styles.inputRow}>
        {/* Medium of Instruction */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Medium of Instruction</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Regional">Regional Language</option>
          </select>
        </div>

        {/* TC/LC Number */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>TC/LC Number</label>
          <input type="text" placeholder="Enter Number" className={styles.inputField} required />
        </div>
      </div>
    </div>
  );
};

export default AcademicDetails;
