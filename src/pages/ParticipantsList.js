import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/participantsList.module.css"; 
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const ParticipantsList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event || {};

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Event Management</h2>

        <h3 className={styles.formTitle}>Event Details</h3>

        <div className={styles.inputGroup}>
          <label>Event Name</label>
          <input type="text" value={event.name || ""} readOnly />
        </div>

        <div className={styles.inputGroup}>
          <label>Date</label>
          <input type="date" value={event.date || ""} readOnly />
        </div>

        <h3 className={styles.participantsTitle}>Participants</h3>
        <ul>
          {event.participants.map((participant, index) => (
            <li key={index}>{participant}</li>
          ))}
        </ul>

        <button className={styles.backButton} onClick={() => navigate("/events")}>Back</button>
      </div>
    </div>
  );
};

export default ParticipantsList;
