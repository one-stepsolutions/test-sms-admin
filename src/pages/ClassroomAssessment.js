import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/assessment.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const AssessmentMainPage = () => {
  const navigate = useNavigate();

  // Mock class teachers data
  const classTeachers = {
    "5A": "Mr. A",
    "5B": "Ms. B",
    "6A": "Mr. C",
    "6B": "Ms. D",
  };

  // Mock default assessment data (only added when localStorage is empty)
  const defaultAssessments = [
    { std: "5", div: "A", subject: "Math - Algebra", topic: "Algebra Basics", teacher: "Mr. A", status: "Submitted" },
    { std: "5", div: "B", subject: "Science - Physics", topic: "Newton's Laws", teacher: "Ms. B", status: "Not Submitted" },
    { std: "6", div: "A", subject: "English - Grammar", topic: "Past Tense", teacher: "Mr. C", status: "Submitted" },
    { std: "6", div: "B", subject: "Chemistry - Elements", topic: "Periodic Table", teacher: "Ms. D", status: "Submitted" },
  ];

  const [std, setStd] = useState("");
  const [div, setDiv] = useState("");
  const [date, setDate] = useState("");
  const [teacher, setTeacher] = useState("");
  const [filteredAssessments, setFilteredAssessments] = useState([]);

  // **Fetch assessments from localStorage on page load**
  useEffect(() => {
    const storedAssessments = JSON.parse(localStorage.getItem("assessments")) || [];

    // Use stored assessments if available, otherwise load default ones
    if (storedAssessments.length === 0) {
      localStorage.setItem("assessments", JSON.stringify(defaultAssessments));
      setFilteredAssessments(defaultAssessments);
    } else {
      setFilteredAssessments(storedAssessments);
    }
  }, []);

  // **Fetch class teacher when std & div are selected**
  useEffect(() => {
    if (std && div) {
      const key = `${std}${div}`;
      setTeacher(classTeachers[key] || "N/A");
    } else {
      setTeacher(""); // Reset teacher if std/div are cleared
    }
  }, [std, div]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.header}>
          <h2>Assessment</h2>
          <button className={styles.addButton} onClick={() => navigate("/classroom-assessment/create")}>
            Add
          </button>
        </div>

        {/* Filter Section */}
        <div className={styles.filterSection}>
          <label>Std:</label>
          <select value={std} onChange={(e) => setStd(e.target.value)}>
            <option value="">All</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <label>Div:</label>
          <select value={div} onChange={(e) => setDiv(e.target.value)}>
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>

          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label>Class Teacher:</label>
          <input type="text" value={teacher} readOnly />
        </div>

        {/* Assessment List */}
        <div className={styles.assessmentList}>
          {filteredAssessments.length > 0 ? (
            filteredAssessments.map((assessment, index) => (
              <div key={index} className={styles.assessmentCard}>
                <div className={styles.assessmentDetails}>
                  <strong>{assessment.subject}</strong>
                  <p>Lecture by: {assessment.teacher}</p>
                  <p>Status: {assessment.status}</p>
                </div>
                <button className={styles.viewButton} onClick={() => navigate(`/classroom-assessment/${index}`)}>
                  View Assessment
                </button>
              </div>
            ))
          ) : (
            <p className={styles.noData}>No assessments found for the selected Std/Div</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentMainPage;
