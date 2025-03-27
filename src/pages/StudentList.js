import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/studentList.module.css";

const StudentList = () => {
  const { standard, division } = useParams();

  // Sample Student Data
  const students = [
    { name: "John Doe", dob: "12/05/2010", gender: "Male", contact: "9876543210", year: "2024", standard: "5", division: "A" },
    { name: "Jane Smith", dob: "08/09/2011", gender: "Female", contact: "9876543211", year: "2024", standard: "6", division: "B" },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Classroom Management</h2>
        <h3 className={styles.sectionTitle}>Student List</h3>
        <p className={styles.standardDivision}>Standard: {standard} | Division: {division}</p>

        {/* Student List Table */}
        <div className={styles.tableContainer}>
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Contact No.</th>
                <th>Academic Year</th>
                <th>Standard</th>
                <th>Division</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.dob}</td>
                  <td>{student.gender}</td>
                  <td>{student.contact}</td>
                  <td>{student.year}</td>
                  <td>{student.standard}</td>
                  <td>{student.division}</td>
                  <td className={styles.actionsColumn}>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
