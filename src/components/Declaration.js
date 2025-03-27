import React from "react";
import styles from "../styles/declaration.module.css"; // New CSS file for styling

const Declaration = () => {
  return (
    <div className={styles.declarationContainer}>
      {/* Declaration Section Title */}
      <h3 className={styles.sectionTitle}>Declaration</h3>

      <div className={styles.declarationContent}>
        {/* Checkbox for agreement */}
        <input type="checkbox" id="agree" className={styles.declarationCheckbox} required />
        <label htmlFor="agree" className={styles.declarationText}>
          I hereby declare that the information provided is true to the best of my knowledge. 
          I agree to abide by the school’s rules and regulations.
        </label>
      </div>
    </div>
  );
};

export default Declaration;
