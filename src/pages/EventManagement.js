import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/eventManagement.module.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import { AcademicContext } from "../context/AcademicContext"; // ✅ Import Context

const EventManagement = () => {
  const navigate = useNavigate();
  const { setAcademicData } = useContext(AcademicContext); // ✅ Use Context to Update Events
  const [events, setEvents] = useState([]);

  // ✅ Fetch Events from Local Storage on Load
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventState")) || [];
    setEvents(savedEvents);
  }, []);

  // ✅ Function to Add New Event
  const handleAddEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];

    // ✅ Save in localStorage
    localStorage.setItem("eventState", JSON.stringify(updatedEvents));

    // ✅ Update Context to Reflect Changes in AcademicEvents
    setAcademicData((prev) => ({
      ...prev,
      events: updatedEvents,
    }));

    setEvents(updatedEvents);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.header}>
          <h2>Event Management</h2>
          <button className={styles.addButton} onClick={() => navigate("/events/create")}>Add</button>
        </div>

        <div className={styles.searchContainer}>
          <SearchBar placeholder="Search Events" />
        </div>

        <h3 className={styles.eventListTitle}>Event List</h3>
        <div className={styles.eventList}>
          {events.length === 0 ? (
            <p>No events available</p>
          ) : (
            events.map((event, index) => (
              <div key={index} className={styles.eventItem}>
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <p>Standard: {event.std}</p>
                <p>Division: {event.div}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
