import React, { useState } from "react";
import styles from "../styles/teachersAllocation.module.css";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";

const TeachersAllocation = () => {
  // Mock Data (This will be replaced with actual API calls later)
  const [teachers, setTeachers] = useState([
    { english: "Mr. A", maths: "Mr. X", science: "Ms. M" },
    { english: "Mr. B", maths: "Mr. Y", science: "Ms. N" },
    { english: "Mr. C", maths: "Mr. Z", science: "Ms. O" }
  ]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Academic Management</h2>

        <div className={styles.formGroup}>
          <label className={styles.label}>Std</label>
          <select className={styles.select}>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
          </select>
        </div>

        <h3 className={styles.tableTitle}>Teachers Allocation</h3>
        <table className={styles.teachersTable}>
          <thead>
            <tr>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((row, index) => (
                <tr key={index}>
                  <td>{row.english}</td>
                  <td>{row.maths}</td>
                  <td>{row.science}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No teacher data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersAllocation;
