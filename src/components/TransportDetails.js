import React from "react";
import styles from "../styles/transportDetails.module.css";

const TransportDetails = () => {
  return (
    <div className={styles.transportContainer}>
      {/* Section Title */}
      <h3 className={styles.sectionTitle}>Travelling Facility</h3>

      {/* Transport Service Selection */}
      <div className={styles.inputRow}>
        <label className={styles.inputLabel}>Do you require school transportation services?</label>
        <select className={styles.selectField} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Pickup & Drop Point */}
      <div className={styles.fullWidthInput}>
        <label className={styles.inputLabel}>Preferred Pickup/Drop Point</label>
        <input type="text" placeholder="Enter Pickup/Drop Location" className={styles.inputField} required />
      </div>

      {/* Distance & Mode of Transport */}
      <div className={styles.twoColumnRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Distance from School:</label>
          <input type="text" placeholder="Enter Distance (in KM)" className={styles.inputField} required />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Mode of Transport (if not using school transport)</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Car">Car</option>
            <option value="Walking">Walking</option>
            <option value="Public Transport">Public Transport</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TransportDetails;
