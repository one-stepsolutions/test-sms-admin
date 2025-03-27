import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/createAssessment.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const CreateAssessment = () => {
  const navigate = useNavigate();

  const [assessmentData, setAssessmentData] = useState({
    standard: "",
    division: "",
    date: "",
    subject: "",
    topicsCovered: "",
    keyPoints: "",
    classActivity: null,
    homeworkDescription: "",
    submissionDeadline: "",
    teacher: "",
    submissions: "All", // Default submission filter
  });

  useEffect(() => {
    if (assessmentData.standard && assessmentData.division) {
      const teachers = {
        "5A": "Mr. A",
        "6B": "Ms. B",
        "7C": "Mr. C",
      };
      const key = assessmentData.standard + assessmentData.division;
      setAssessmentData((prev) => ({
        ...prev,
        teacher: teachers[key] || "Not Assigned",
      }));
    }
  }, [assessmentData.standard, assessmentData.division]);

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setAssessmentData((prevData) => ({ ...prevData, [type]: file }));
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assessmentData.standard || !assessmentData.division || !assessmentData.subject) {
      alert("Please fill all required fields!");
      return;
    }

    // 🔹 Mock Student Data (Each assessment will now have a student list)
    const mockStudents = [
      { name: "John Doe", status: "Submitted" },
      { name: "Jane Smith", status: "Not Submitted" },
      { name: "Alice Johnson", status: "Submitted" },
      { name: "Mark Lee", status: "Not Submitted" }
    ];

    const storedAssessments = JSON.parse(localStorage.getItem("assessments")) || [];
    const updatedAssessments = [
      ...storedAssessments,
      { id: storedAssessments.length, students: mockStudents, ...assessmentData }
    ];
    
    localStorage.setItem("assessments", JSON.stringify(updatedAssessments));

    navigate("/classroom-assessment");
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />

        {/* 🔹 Classroom Management Section */}
        <div className={styles.topSection}>
          <h2 className={styles.headerTitle}>Classroom Management</h2>
          <button className={styles.addButton} onClick={handleSubmit}>Add</button>
        </div>

        {/* 🔹 Standard & Division Row */}
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Std:</label>
            <select value={assessmentData.standard} onChange={(e) => setAssessmentData({ ...assessmentData, standard: e.target.value })}>
              <option value="">Select</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Div:</label>
            <select value={assessmentData.division} onChange={(e) => setAssessmentData({ ...assessmentData, division: e.target.value })}>
              <option value="">Select</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
        </div>

        {/* 🔹 Class Teacher & Submission Row */}
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Class Teacher:</label>
            <input type="text" value={assessmentData.teacher} disabled />
          </div>
          <div className={styles.inputGroup}>
            <label>Submissions:</label>
            <select value={assessmentData.submissions} onChange={(e) => setAssessmentData({ ...assessmentData, submissions: e.target.value })}>
              <option value="All">All</option>
              <option value="Submitted">Submitted</option>
              <option value="Not Submitted">Not Submitted</option>
            </select>
          </div>
        </div>

        {/* 🔹 Assessment Section */}
        <h2 className={styles.assessmentTitle}>Assessment</h2>
        <button className={styles.classworkButton}>Classwork</button>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {/* Classwork Inputs */}
          <div className={styles.classworkSection}>
            <div className={styles.inputGroup}>
              <label>Date</label>
              <input type="date" value={assessmentData.date} onChange={(e) => setAssessmentData({ ...assessmentData, date: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label>Teacher</label>
              <input type="text" value={assessmentData.teacher} disabled />
            </div>
            <div className={styles.inputGroup}>
              <label>Subject Covered</label>
              <select value={assessmentData.subject} onChange={(e) => setAssessmentData({ ...assessmentData, subject: e.target.value })}>
                <option value="">Select</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>Topics/Chapters Covered</label>
              <input type="text" value={assessmentData.topicsCovered} onChange={(e) => setAssessmentData({ ...assessmentData, topicsCovered: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label>Key Points or Summary</label>
              <textarea value={assessmentData.keyPoints} onChange={(e) => setAssessmentData({ ...assessmentData, keyPoints: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label>Class Activity (Upload PDF)</label>
              <input type="file" accept="application/pdf" onChange={(e) => handleFileUpload(e, "classActivity")} />
            </div>
          </div>

          {/* 🔹 Homework Section */}
          <button className={styles.classworkButton}>Homework</button>
          <div className={styles.homeworkSection}>
            <div className={styles.inputGroup}>
              <label>Homework Description</label>
              <textarea value={assessmentData.homeworkDescription} onChange={(e) => setAssessmentData({ ...assessmentData, homeworkDescription: e.target.value })} />
            </div>
            <div className={styles.inputGroup}>
              <label>Upload Homework (PDF)</label>
              <input type="file" accept="application/pdf" onChange={(e) => handleFileUpload(e, "homeworkFile")} />
            </div>
            <div className={styles.inputGroup}>
              <label>Submission Deadline</label>
              <input type="date" value={assessmentData.submissionDeadline} onChange={(e) => setAssessmentData({ ...assessmentData, submissionDeadline: e.target.value })} />
            </div>
          </div>

          {/* 🔹 Navigation Buttons */}
          <div className={styles.buttonGroup}>
            <button type="button" className={styles.backButton} onClick={() => navigate("/classroom-assessment")}>
              Back
            </button>
            <button type="submit" className={styles.submitButton}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssessment;
