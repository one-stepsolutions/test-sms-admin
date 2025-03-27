import React from "react";
import styles from "../styles/addressDetails.module.css";

const AddressDetails = () => {
  return (
    <div className={styles.addressContainer}>
      {/* Section Title */}
      <h3 className={styles.sectionTitle}>Address Information</h3>

      {/* Address Field */}
      <div className={styles.fullWidthInput}>
        <label className={styles.inputLabel}>Address</label>
        <input type="text" placeholder="Eg: 728 Clearview Drive" className={styles.inputField} required />
      </div>

      <div className={styles.fullWidthInput}>
        <input type="text" placeholder="Additional Address (Optional)" className={styles.inputField} />
      </div>

      {/* City, Postal Code, District */}
      <div className={styles.threeColumnRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>City</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Postal Code</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>District</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
          </select>
        </div>
      </div>

      {/* State & Country */}
      <div className={styles.twoColumnRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>State</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Country</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
