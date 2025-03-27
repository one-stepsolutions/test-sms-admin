import React, { useState } from "react";
import styles from "../styles/studentTimetable.module.css";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";

const StudentTimetable = () => {
  // Mock Data (This will be replaced with actual API calls later)
  const [timetable, setTimetable] = useState([
    { monday: "Maths", tuesday: "Science", wednesday: "English", thursday: "History", friday: "PE", saturday: "Art" },
    { monday: "English", tuesday: "Maths", wednesday: "Science", thursday: "Geography", friday: "Computers", saturday: "Sports" }
  ]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Academic Management</h2>

        <div className={styles.formRow}>
        
          <div className={styles.formGroup}>
          <h3 className={styles.tableTitle}>Students Timetable</h3>
            
          </div>
          <div className={styles.formGroup}>
          <label className={styles.label}>Std</label>
            <select className={styles.select}>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
            </select>
            <label className={styles.label}>Div</label>
            <select className={styles.select}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        
        <table className={styles.timetableTable}>
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {timetable.length > 0 ? (
              timetable.map((row, index) => (
                <tr key={index}>
                  <td>{row.monday}</td>
                  <td>{row.tuesday}</td>
                  <td>{row.wednesday}</td>
                  <td>{row.thursday}</td>
                  <td>{row.friday}</td>
                  <td>{row.saturday}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No timetable data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTimetable;
