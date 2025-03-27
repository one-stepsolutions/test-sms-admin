import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Examsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/createTimetable.module.css";

const CreateTimeTable = () => {
  const navigate = useNavigate();
  const [standard, setStandard] = useState("");

  return (
    <div className={styles.examContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Exam Management</h2>

        {/* Create Timetable Header */}
        <div className={styles.headerContainer}>
          <h3 className={styles.sectionTitle}>Create Timetable</h3>
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <label className={styles.label}>Standard:</label>
            <select
              className={styles.inputField}
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Start Date:</label>
            <input type="date" className={styles.inputField} />
            <label className={styles.label}>End Date:</label>
            <input type="date" className={styles.inputField} />
          </div>

          <div className={styles.formRow}>
            <label className={styles.label}>Start Time:</label>
            <input type="time" className={styles.inputField} />
            <label className={styles.label}>End Time:</label>
            <input type="time" className={styles.inputField} />
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.confirmButton}
              onClick={() => navigate(`/exam-timetable/${standard}`)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTimeTable;
