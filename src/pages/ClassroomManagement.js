import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/classroomManagement.module.css";

const standards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ClassroomManagement = () => {
  const navigate = useNavigate();

  const handleStandardClick = (standard) => {
    navigate(`/classroom-divisions/${standard}`);
  };

  return (
    <div className={styles.classroomContainer}>
       <Sidebar />
       <Topbar />
      <h2 className={styles.pageTitle}>Classroom Management</h2>
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
  );
};

export default ClassroomManagement;
