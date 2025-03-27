import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/classroomDivision.module.css";

const divisions = ["A", "B", "C", "D", "E", "F"];

const ClassroomDivisions = () => {
  const { standard } = useParams();  // Get the selected standard from URL params
  const navigate = useNavigate();

  // Function to navigate to student list based on selected standard & division
  const handleDivisionClick = (division) => {
    navigate(`/studentlist/${standard}/${division}`);
  };

  return (
    <div className={styles.classroomContainer}>
      <Sidebar />
      <Topbar />
      <h2 className={styles.pageTitle}>Classroom Management</h2>
      <h3 className={styles.sectionTitle}>Divisions</h3>
      <p className={styles.standardLabel}>Std: {standard}</p>

      <div className={styles.gridContainer}>
        {divisions.map((division) => (
          <button
            key={division}
            className={styles.divisionBox}
            onClick={() => handleDivisionClick(division)}
          >
            {division}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassroomDivisions;
