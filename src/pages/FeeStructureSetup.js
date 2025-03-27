import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Feessidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/feeStructure.module.css";

const FeeStructureSetup = () => {
  const navigate = useNavigate();
  const [feeCategories, setFeeCategories] = useState([""]);

  const handleAddField = () => {
    setFeeCategories([...feeCategories, ""]);
  };

  const handleRemoveField = (index) => {
    const updatedCategories = feeCategories.filter((_, i) => i !== index);
    setFeeCategories(updatedCategories);
  };

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Fees Management</h2>
        <h3 className={styles.sectionTitle}>Fee Structure Setup</h3>

        <div className={styles.formContainer}>
          <div className={styles.tabs}>
            <span className={styles.activeTab}>Define Fee Categories</span>
            <span className={styles.clickableTab} 
                onClick={() => navigate("/assign-fees")}>Assign Fees to Standards</span>
          </div>

          {feeCategories.map((category, index) => (
            <div key={index} className={styles.inputGroup}>
              <input type="text" placeholder="Enter Fee Category" className={styles.inputField} />
              <button className={styles.addButton} onClick={handleAddField}>+</button>
              {feeCategories.length > 1 && (
                <button className={styles.removeButton} onClick={() => handleRemoveField(index)}>-</button>
              )}
            </div>
          ))}

          <button className={styles.saveButton} onClick={() => navigate("/fees-management")}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default FeeStructureSetup;
