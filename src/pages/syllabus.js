import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/syllabus.module.css";

const Syllabus = () => {
  const { standard } = useParams();
  const navigate = useNavigate();
  const [selectedStandard, setSelectedStandard] = useState(standard);

  const handleStandardChange = (event) => {
    const newStandard = event.target.value;
    setSelectedStandard(newStandard);
    if (newStandard) {
      navigate(`/syllabus/${newStandard}`); // Redirects to the selected standard's syllabus page
    }
  };

  const subjects = [
    { subject: "Mathematics", chapters: 10, progress: { A: "50%", B: "40%", C: "60%" } },
    { subject: "Science", chapters: 12, progress: { A: "30%", B: "20%", C: "50%" } },
    { subject: "English", chapters: 8, progress: { A: "60%", B: "55%", C: "70%" } },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Academic Management</h2>

        {/* Header Container - Align Standard Dropdown to Right */}
        <div className={styles.headerContainer}>
          <h3 className={styles.sectionTitle}>Syllabus Tracker</h3>
          <div className={styles.standardSelector}>
            <label htmlFor="standard">Std:</label>
            <select id="standard" value={selectedStandard} onChange={handleStandardChange} className={styles.dropdown}>
              <option value="">Select</option>
              <option value="1">Standard 1</option>
              <option value="2">Standard 2</option>
              <option value="3">Standard 3</option>
              <option value="4">Standard 4</option>
              <option value="5">Standard 5</option>
            </select>
          </div>
        </div>

        {/* Syllabus Table */}
        <div className={styles.tableContainer}>
          <table className={styles.syllabusTable}>
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Total Chapters</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((row, index) => (
                <tr key={index}>
                  <td>{row.subject}</td>
                  <td>{row.chapters}</td>
                  <td>{row.progress.A}</td>
                  <td>{row.progress.B}</td>
                  <td>{row.progress.C}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
