import React from "react";
import styles from "../styles/roleDepartmentDetails.module.css";

const RoleDepartmentDetails = () => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Role & Department Details</h3>
      <form className={styles.roleForm}>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Position Applied For</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
          <label className={styles.inputLabel}>Department</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Preferred Grades/Classes</label>
          <input type="text" placeholder="Write here" className={styles.inputField} required />
        </div>
        <div className={styles.inputRow}>
          <label className={styles.inputLabel}>Joining Date</label>
          <input type="date" className={styles.inputField} required />
        </div>
      </form>
    </div>
  );
};

export default RoleDepartmentDetails;
