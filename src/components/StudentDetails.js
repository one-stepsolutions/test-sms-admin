import React from "react";
import styles from "../styles/studentDetails.module.css";

const StudentDetails = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <h3 className={styles.sectionTitle}>Student Details</h3>
        <div className={styles.profileContainer}>
          {/* <img
            className={styles.profileImage}
            src="https://via.placeholder.com/80"
            alt="Profile"
          /> */}
        </div>
      </div>

      {/* Name Section */}
      <div className={styles.inputRow}>
        <label className={styles.inputLabel}>Name</label>
        <div className={styles.inputGroup}>
          <input type="text" placeholder="First Name" className={styles.inputField} required />
          <input type="text" placeholder="Middle Name" className={styles.inputField} required />
          <input type="text" placeholder="Last Name" className={styles.inputField} required />
        </div>
      </div>

      {/* Date of Birth & Place of Birth */}
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Date of Birth</label>
          <input type="date" className={styles.inputField} required />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Place of Birth</label>
          <input type="text" placeholder="Enter City Name" className={styles.inputField} required />
        </div>
      </div>

      {/* Blood Group & Gender */}
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Blood Group</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="O+">O Positive</option>
            <option value="A+">A Positive</option>
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

      {/* Nationality & Category */}
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Nationality</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="Indian">Indian</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Category</label>
          <select className={styles.selectField} required>
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
          </select>
        </div>
      </div>

      {/* Aadhar Card */}
      <div className={styles.inputRow}>
        <label className={styles.inputLabel}>Aadhar Card No.</label>
        <input type="text" placeholder="1234-5678-9354" className={styles.inputField} required />
      </div>
    </div>
  );
};

export default StudentDetails;
