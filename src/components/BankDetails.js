import React from "react";
import styles from "../styles/bankDetails.module.css"; // Import the module CSS

const BankSalaryDetails = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Bank & Salary Details</h3>
      
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Bank Name:</label>
          <input type="text" placeholder="Enter Bank Name" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Branch Name:</label>
          <input type="text" placeholder="Enter Branch Name" className={styles.inputField} required />
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Account Number:</label>
          <input type="text" placeholder="Enter Account Number" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>IFSC Code:</label>
          <input type="text" placeholder="Enter IFSC Code" className={styles.inputField} required />
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>PAN Number (or Tax ID):</label>
          <input type="text" placeholder="Enter PAN Number" className={styles.inputField} required />
        </div>
      </div>
      
    </div>
  );
};

export default BankSalaryDetails;
