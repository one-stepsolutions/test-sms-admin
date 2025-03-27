import React from "react";
import styles from "../styles/yearlyAttendance.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
const mockData = [
  {
    name: "Mr. A",
    total: 90,
    months: { Jan: 24, Feb: 23, Mar: 22, Apr: 21 },
  },
];

const YearlyAttendance = () => {
    const navigate = useNavigate();

  return (
    <div className={styles.container}>
     <Sidebar />
     <div className={styles.mainContent}>
        <Topbar />

        <h2 className={styles.pageTitle}>Attendance Management</h2>
        {/* Search Bar */}
        <SearchBar placeholder="Search Staff" className={styles.searchTab} />
        <h3 className={styles.pageTitleh3}>Attendance Tracker</h3>
          {/* Navigation Tabs for Monthly & Yearly Attendance */} 
            <div className={styles.navigationTabs}>
                <span
                        className={`${styles.tab}`}
                        onClick={() => navigate("/staff-attendance")}>
                        Monthly
                </span>
                <span
                        className={styles.tab}
                        onClick={() => navigate("/staff-attendance-yearly")}>
                        Yearly
                </span>
            </div>
      <table className={styles.attendanceTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.total}</td>
              <td>{record.months.Jan}</td>
              <td>{record.months.Feb}</td>
              <td>{record.months.Mar}</td>
              <td>{record.months.Apr}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default YearlyAttendance;
