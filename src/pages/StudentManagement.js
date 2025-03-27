import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/studentManagement.module.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.studentManagementContainer}>
      {/* Sidebar & Topbar */}
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.pageTitle}>Student Management</h2>
        {/* Header Row - Student Management & Add Button */}
        <div className={styles.headerRow}>
          
          <SearchBar placeholder="Search Student" />
          <button className={styles.addButton} onClick={() => navigate("/admission-form")}>Add</button>
        </div>


        {/* Student List Table */}
        <div className={styles.tableContainer}>
          <h3 className={styles.studentListTitle}>Student List</h3>
          <table className={styles.studentTable}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Std</th>
                <th>Div</th>
                <th>Gender</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows (Replace with Dynamic Data) */}
              <tr>
                <td>John Doe</td>
                <td>10</td>
                <td>A</td>
                <td>Male</td>
                <td>1234567890</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>9</td>
                <td>B</td>
                <td>Female</td>
                <td>0987654321</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
