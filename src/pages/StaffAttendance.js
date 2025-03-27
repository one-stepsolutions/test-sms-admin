import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/monthlyAttendance.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const mockData = {
  January: [
    { date: "01-01-2024", name: "Mr. A", present: "Present" },
    { date: "02-01-2024", name: "Mr. A", present: "Absent" },
  ],
  February: [
    { date: "01-02-2024", name: "Mr. A", present: "Present" },
    { date: "02-02-2024", name: "Mr. A", present: "Present" },
  ],
  March: [
    { date: "01-03-2024", name: "Mr. A", present: "Present" },
    { date: "02-03-2024", name: "Mr. A", present: "Absent" },
  ],
  April: [
    { date: "01-04-2024", name: "Mr. A", present: "Absent" },
    { date: "02-04-2024", name: "Mr. A", present: "Present" },
  ],
};

const MonthlyAttendance = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedDate, setSelectedDate] = useState("");

  // Get unique dates for selected month
  const datesInMonth = [...new Set(mockData[selectedMonth].map((item) => item.date))];

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
              onClick={() => navigate("/staff-attendance")}
            >
              Monthly
            </span>
            <span
              className={styles.tab}
              onClick={() => navigate("/staff-attendance-yearly")}
            >
              Yearly
            </span>
          </div>

       

        {/* Filters for Month & Date */}
        <div className={styles.filterSection}>
          <label>Select Month:</label>
          <select
            className={styles.dropdown}
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              setSelectedDate(""); // Reset date when month changes
            }}
          >
            {Object.keys(mockData).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <label>Select Date:</label>
          <select
            className={styles.dropdown}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            disabled={!datesInMonth.length}
          >
            <option value="">All Dates</option>
            {datesInMonth.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Attendance Table */}
        <table className={styles.attendanceTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {mockData[selectedMonth]
              .filter((record) => (selectedDate ? record.date === selectedDate : true))
              .map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.name}</td>
                  <td>{record.present}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyAttendance;
