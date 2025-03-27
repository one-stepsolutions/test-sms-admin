import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/timetableAllocation.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const TimetableAllocation = () => {
  const navigate = useNavigate();
  const [timetableData, setTimetableData] = useState([
    {
      name: "Mr. A",
      designation: "Math Teacher",
      Monday: "Math Class",
      Tuesday: "Math Class",
      Wednesday: "Math Class",
      Thursday: "Math Class",
      Friday: "Math Class",
      Saturday: "Math Class",
    },
  ]);

  // Function to add new timetable
  const handleAddTimetable = (newTimetable) => {
    setTimetableData([...timetableData, newTimetable]);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Staff Management</h2>
        <SearchBar placeholder="Search Staff" className={styles.searchTab} />

        <button className={styles.addButton} onClick={() => navigate("/staff-timetable/add")}>
          Add
        </button>

       

        <table className={styles.timetableTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.designation}</td>
                <td>{record.Monday}</td>
                <td>{record.Tuesday}</td>
                <td>{record.Wednesday}</td>
                <td>{record.Thursday}</td>
                <td>{record.Friday}</td>
                <td>{record.Saturday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimetableAllocation;
