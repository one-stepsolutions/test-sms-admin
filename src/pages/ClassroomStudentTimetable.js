import React, { useState } from "react";
import styles from "../styles/classroomManagementTimetable.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

// Mock Data for Teachers & Timetable
const classTeachers = {
  "5-A": "Mr. A",
  "5-B": "Mrs. B",
  "6-A": "Mr. C",
  "6-B": "Ms. D",
};

const mockTimetables = {
  "5-A": [
    { time: "9:00 - 10:00", Monday: "Maths", Tuesday: "Science", Wednesday: "English", Thursday: "History", Friday: "Maths" },
    { time: "10:00 - 11:00", Monday: "English", Tuesday: "Maths", Wednesday: "Science", Thursday: "Geography", Friday: "Art" },
  ],
  "6-B": [
    { time: "9:00 - 10:00", Monday: "Physics", Tuesday: "Chemistry", Wednesday: "Maths", Thursday: "Biology", Friday: "Computer" },
  ],
};

const Timetable = () => {
  const [std, setStd] = useState("");
  const [div, setDiv] = useState("");
  const [classTeacher, setClassTeacher] = useState("");

  // Function to update state and fetch class teacher
  const handleSelectionChange = (e, type) => {
    const value = e.target.value;
    let updatedStd = std;
    let updatedDiv = div;

    if (type === "std") {
      updatedStd = value;
      setStd(value);
    } else if (type === "div") {
      updatedDiv = value;
      setDiv(value);
    }

    // Construct the key and update the class teacher
    const key = `${updatedStd}-${updatedDiv}`;
    if (classTeachers[key]) {
      setClassTeacher(classTeachers[key]);
    } else {
      setClassTeacher("");
    }
  };

  // Fetch timetable based on selection
  const getTimetable = () => {
    const key = `${std}-${div}`;
    return mockTimetables[key] || [];
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Classroom Management</h2>

        <div className={styles.selectionRow}>
          <label>Std</label>
          <select value={std} onChange={(e) => handleSelectionChange(e, "std")}>
            <option value="">Select</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
          </select>

          <label>Div</label>
          <select value={div} onChange={(e) => handleSelectionChange(e, "div")}>
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>

          <label>Class Teacher</label>
          <input type="text" value={classTeacher} readOnly />
        </div>

        <h3>Timetable</h3>
        <table className={styles.timetable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {getTimetable().length > 0 ? (
              getTimetable().map((slot, index) => (
                <tr key={index}>
                  <td>{slot.time}</td>
                  <td>{slot.Monday || ""}</td>
                  <td>{slot.Tuesday || ""}</td>
                  <td>{slot.Wednesday || ""}</td>
                  <td>{slot.Thursday || ""}</td>
                  <td>{slot.Friday || ""}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Timetable Available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
