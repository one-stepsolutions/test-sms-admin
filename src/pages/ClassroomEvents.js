import React, { useState, useEffect, useContext } from "react";
import { AcademicContext } from "../context/AcademicContext";
import styles from "../styles/classroomEvents.module.css";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const ClassroomEvents = () => {
  const { academicData, setAcademicData } = useContext(AcademicContext);
  const [selectedStandard, setSelectedStandard] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  // ✅ Fetch Events from Local Storage on Component Mount
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventState")) || [];

    setAcademicData((prev) => ({
      ...prev,
      events: savedEvents, // ✅ Ensure Context is Updated
    }));
  }, [setAcademicData]);

  // ✅ Filter events when standard is selected
  useEffect(() => {
    if (selectedStandard) {
      const eventsForStandard = academicData.events?.filter(
        (event) => event.std === selectedStandard
      );
      setFilteredEvents(eventsForStandard || []);
    } else {
      setFilteredEvents([]);
    }
  }, [selectedStandard, academicData.events]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Classroom Management</h2>

        {/* Standard Selection Dropdown */}
        <div className={styles.formGroup}>
          <label>Select Standard:</label>
          <select onChange={(e) => setSelectedStandard(e.target.value)}>
            <option value="">-- Select Standard --</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
          </select>
        </div>

        {/* Events Table */}
        <table className={styles.eventsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event Name</th>
              <th>Div</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <tr key={index}>
                  <td>{event.date}</td>
                  <td>{event.name}</td>
                  <td>{event.div}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No events available for this standard</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassroomEvents;
