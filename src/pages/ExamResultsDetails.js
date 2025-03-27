import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/examResultsDetails.module.css";

// Mock Data for students
const mockResults = {
  "5-A-1": [
    { name: "John Doe", english: 85, maths: 90, science: 88 },
    { name: "Jane Smith", english: 78, maths: 92, science: 81 },
  ],
  "6-B-2": [
    { name: "Alan Walker", english: 80, maths: 85, science: 89 },
    { name: "Emma Watson", english: 82, maths: 88, science: 90 },
  ],
};

const SemesterResults = () => {
  const { std, div, semester } = useParams();
  const resultsKey = `${std}-${div}-${semester}`;
  const students = mockResults[resultsKey] || [];

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Classroom Management</h2>

        <h3>Semester {semester} - {std} {div}</h3>

        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.english}</td>
                  <td>{student.maths}</td>
                  <td>{student.science}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available for selected semester.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SemesterResults;
