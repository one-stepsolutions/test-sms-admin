import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Examsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/examManagement.module.css";

const standards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ExamManagement = () => {
  const navigate = useNavigate();

  const handleStandardClick = (standard) => {
    navigate(`/exam-timetable/${standard}`);
  };

  return (
    <div className={styles.examContainer}>
      <Sidebar />
      <Topbar />
      <div className={styles.mainContent}>
        <h2 className={styles.pageTitle}>Exam Management</h2>
        <button className={styles.addButton} onClick={() => navigate("/create-timetable")}>
          Add
        </button>
        <h3 className={styles.sectionTitle}>TimeTable</h3>
        <h3 className={styles.sectionTitle}>Standards</h3>

        <div className={styles.gridContainer}>
          {standards.map((standard) => (
            <button
              key={standard}
              className={styles.standardBox}
              onClick={() => handleStandardClick(standard)}
            >
              {standard}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamManagement;
