import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/eventCreation.module.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const EventCreation = () => {
  const navigate = useNavigate();

  // Load events from localStorage
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("eventState");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    manager: "",
    std: "",
    div: "",
    participants: [],
  });

  const [newParticipant, setNewParticipant] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const addParticipant = () => {
    if (newParticipant.trim() !== "") {
      setEventData((prevData) => ({
        ...prevData,
        participants: [...prevData.participants, newParticipant],
      }));
      setNewParticipant("");
    }
  };

  const handleSave = () => {
    // Add new event to localStorage
    const updatedEvents = [...events, { id: events.length + 1, ...eventData }];
    localStorage.setItem("eventState", JSON.stringify(updatedEvents));

    // Redirect back to event list
    navigate("/events");
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Event Management</h2>

        <div className={styles.searchContainer}>
          <SearchBar placeholder="Search Events" />
        </div>

        <h3 className={styles.title}>Event Creation</h3>

        <div className={styles.formGroup}>
          <label>Event Name:</label>
          <input type="text" name="name" value={eventData.name} onChange={handleChange} />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Date:</label>
            <input type="date" name="date" value={eventData.date} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Managed by:</label>
            <input type="text" name="manager" value={eventData.manager} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Std:</label>
            <input type="text" name="std" value={eventData.std} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Div:</label>
            <input type="text" name="div" value={eventData.div} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Participants:</label>
          <div className={styles.participantInput}>
            <input type="text" value={newParticipant} onChange={(e) => setNewParticipant(e.target.value)} />
            <button type="button" onClick={addParticipant}>+</button>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton} onClick={() => navigate("/events")}>Cancel</button>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EventCreation;
