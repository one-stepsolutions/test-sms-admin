import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Feessidebar";
import Topbar from "../components/Topbar";
import SearchBar from '../components/SearchBar'
import styles from "../styles/feesDashboard.module.css";

const FeesDashboard = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/fees-structure");
  };

  return (
    <div className={styles.dashboardContainer}>
  <Sidebar />
  <div className={styles.mainContent}>
    <Topbar />

    {/* Header Container */}
    <div className={styles.headerContainer}>

      {/* Left Section (Title + SearchBar) */}
      <div className={styles.headerLeft}>
        <h2 className={styles.pageTitle}>Fees Management</h2>
        <SearchBar placeholder="Search Student" />
      </div>

      {/* Add Button stays on the right */}
      <button className={styles.addButton} onClick={handleAddClick}>
        Add
      </button>

    </div>

    {/* Fee Dashboard Section */}
    <h3 className={styles.sectionTitle}>Fee Dashboard</h3>
    <div className={styles.tableContainer}>
      <table className={styles.feesTable}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Standard</th>
            <th>Division</th>
            <th>Total Fees</th>
            <th>Paid Amount</th>
            <th>Remaining Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>5</td>
            <td>A</td>
            <td>5000</td>
            <td>3000</td>
            <td>2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default FeesDashboard;
