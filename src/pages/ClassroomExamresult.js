import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/examResults.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const ExamResults = () => {
  const navigate = useNavigate();
  const [std, setStd] = useState("");
  const [div, setDiv] = useState("");

  const semesters = [
    { id: 1, name: "Semester 1", duration: "1st Oct to 21 Oct" },
    { id: 2, name: "Semester 2", duration: "1st Oct to 21 Oct" },
    { id: 3, name: "Semester 3", duration: "1st Oct to 21 Oct" },
    { id: 4, name: "Semester 4", duration: "1st Oct to 21 Oct" },
  ];

  const handleSemesterClick = (semesterId) => {
    if (!std || !div) {
      alert("Please select Standard and Division first!");
      return;
    }
    navigate(`/class-exam-result/${std}/${div}/${semesterId}`);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Classroom Management</h2>

        <div className={styles.inputGroup}>
          <label>Std</label>
          <select value={std} onChange={(e) => setStd(e.target.value)}>
            <option value="">Select</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
          </select>

          <label>Div</label>
          <select value={div} onChange={(e) => setDiv(e.target.value)}>
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </div>

        <div className={styles.semesterContainer}>
          {semesters.map((sem) => (
            <div key={sem.id} className={styles.semesterCard} onClick={() => handleSemesterClick(sem.id)}>
              <h3>{sem.name}</h3>
              <p>{sem.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamResults;
