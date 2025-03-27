import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Feessidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/assignFees.module.css";

const AssignFees = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* Page Title */}
      <Sidebar />
      <Topbar />
      <h2 className={styles.pageTitle}>Fees Management</h2>

      {/* Tabs */}
      <div className={styles.tabsContainer}>
        <span 
          className={styles.clickableTab} 
          onClick={() => navigate("/fee-structure")}
        >
          Define Fee Categories
        </span>
        <span className={styles.activeTab}>Assign Fees to Standards</span>
      </div>

      {/* Standard Selection */}
      <div className={styles.standardContainer}>
        <label className={styles.standardLabel}>Std:</label>
        <select className={styles.dropdown}>
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

      {/* Fees Table */}
      <div className={styles.tableContainer}>
        <table className={styles.feeTable}>
          <thead>
            <tr>
              <th>Fee Categories</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tuition Fee</td>
              <td>₹5000</td>
            </tr>
            <tr>
              <td>Library Fee</td>
              <td>₹2000</td>
            </tr>
            <tr>
              <td>Sports Fee</td>
              <td>₹1500</td>
            </tr>
            <tr className={styles.totalRow}>
              <td>Total</td>
              <td>₹8500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <div className={styles.buttonContainer}>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default AssignFees;
