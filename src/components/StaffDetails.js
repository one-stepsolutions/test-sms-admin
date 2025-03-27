import React from "react";
import styles from "../styles/staffDetails.module.css";

const StaffDetails = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Staff Details</h3>
      <div className={styles.headerContainer}>
        <div className={styles.profileContainer}>
          <img className={styles.profileImage} src="https://via.placeholder.com/80" alt="Profile" />
        </div>
      </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Name</label>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First Name" className={styles.inputField} required />
            <input type="text" placeholder="Middle Name" className={styles.inputField} required />
            <input type="text" placeholder="Last Name" className={styles.inputField} required />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Date of Birth</label>
            <input type="date" className={styles.inputField} required />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Marital Status</label>
            <input type="text" placeholder="Write here" className={styles.inputField} required />
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Blood Group</label>
            <select className={styles.selectField} required>
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Gender</label>
            <select className={styles.selectField} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Nationality</label>
            <select className={styles.selectField} required>
              <option value="">Select</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Category</label>
            <select className={styles.selectField} required>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="SC/ST">SC/ST</option>
            </select>
          </div>
        </div>

        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Aadhar Card No.</label>
          <input type="text" placeholder="020202020202" className={styles.inputField} required />
        </div>
    </div>
  );
};

export default StaffDetails;
