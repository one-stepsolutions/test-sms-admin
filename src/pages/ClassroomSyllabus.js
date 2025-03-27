import React from "react";
import { useState } from "react";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/classroomsyllabusTracker.module.css";

// Mock Data
const syllabusData = {
  "5-A": [
    { subject: "Math", pendingTopics: 2, totalTopics: 10 },
    { subject: "Science", pendingTopics: 4, totalTopics: 12 },
  ],
  "5-B": [
    { subject: "Math", pendingTopics: 3, totalTopics: 10 },
    { subject: "English", pendingTopics: 2, totalTopics: 8 },
  ],
  "6-A": [
    { subject: "Physics", pendingTopics: 1, totalTopics: 10 },
    { subject: "Biology", pendingTopics: 5, totalTopics: 12 },
  ],
};

const SyllabusTracker = () => {
  const [std, setStd] = useState("");
  const [div, setDiv] = useState("");
  const [syllabus, setSyllabus] = useState([]);

  // Function to update state and fetch syllabus details
  const handleSelectionChange = (e, type) => {
    const value = e.target.value;
    let updatedStd = std;
    let updatedDiv = div;

    if (type === "std") {
      updatedStd = value;
      setStd(value);
    } else if (type === "div") {
      updatedDiv = value;
      setDiv(value);
    }

    // Fetch syllabus data
    const key = `${updatedStd}-${updatedDiv}`;
    if (syllabusData[key]) {
      setSyllabus(syllabusData[key]);
    } else {
      setSyllabus([]);
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Classroom Management</h2>

        <div className={styles.selectionRow}>
          <label>Std</label>
          <select value={std} onChange={(e) => handleSelectionChange(e, "std")}>
            <option value="">Select</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
          </select>

          <label>Div</label>
          <select value={div} onChange={(e) => handleSelectionChange(e, "div")}>
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <h3>Syllabus Tracker</h3>
        <table className={styles.syllabusTable}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Pending Topics</th>
              <th>Total Topics</th>
            </tr>
          </thead>
          <tbody>
            {syllabus.length > 0 ? (
              syllabus.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.pendingTopics}</td>
                  <td>{item.totalTopics}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SyllabusTracker;
