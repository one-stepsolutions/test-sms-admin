import React, { useState, useEffect } from "react";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/attendanceManagement.module.css"; // Ensure CSS module exists

const AttendanceManagement = () => {
  const [selectedStandard, setSelectedStandard] = useState(""); // Standard dropdown selection
  const [selectedDate, setSelectedDate] = useState(""); // Date selection
  const [attendanceData, setAttendanceData] = useState([]); // Holds attendance data

  // Simulated API function to fetch attendance data (Replace with real API call)
  const fetchAttendanceData = async (standard, date) => {
    // This would be replaced with an API request
    const mockData = {
      "V": [
        { division: "A", present: 30, absent: 5, total: 35 },
        { division: "B", present: 28, absent: 7, total: 35 },
        { division: "C", present: 32, absent: 3, total: 35 }
      ],
      "VI": [
        { division: "A", present: 25, absent: 10, total: 35 },
        { division: "B", present: 26, absent: 9, total: 35 }
      ]
    };
    
    return mockData[standard] || []; // Returns data for the selected standard
  };

  useEffect(() => {
    if (selectedStandard && selectedDate) {
      fetchAttendanceData(selectedStandard, selectedDate).then((data) => {
        setAttendanceData(data);
      });
    }
  }, [selectedStandard, selectedDate]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        
        <h2 className={styles.pageTitle}>Academic Management</h2>
        
        {/* Standard & Date Selection */}
        <div className={styles.filters}>
          <label>Std:</label>
          <select value={selectedStandard} onChange={(e) => setSelectedStandard(e.target.value)}>
            <option value="">Select Standard</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
          </select>
        </div>
        <div className={styles.filters}>
          <label>Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>

        <h3 className={styles.tableTitle}>Students Attendance</h3>

        {/* Attendance Table */}
        <table className={styles.attendanceTable}>
          <thead>
            <tr>
              <th>Divisions</th>
              <th>Present Student</th>
              <th>Absent Student</th>
              <th>Total Student</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.length > 0 ? (
              attendanceData.map((row, index) => (
                <tr key={index}>
                  <td>{row.division}</td>
                  <td>{row.present}</td>
                  <td>{row.absent}</td>
                  <td>{row.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className={styles.noData}>No attendance data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceManagement;
