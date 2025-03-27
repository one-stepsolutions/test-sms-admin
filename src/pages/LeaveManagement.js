import React, { useState } from "react";
import styles from "../styles/leaveManagement.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([
    { id: 1, name: "Miss Kiran Tiwari", subject: "Not Feeling Well", department: "History" },
    { id: 2, name: "Mr. Sharma", subject: "Family Emergency", department: "Maths" }
  ]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Leave Management</h2>
        <div className={styles.leaveList}>
          {leaves.map((leave) => (
            <div key={leave.id} className={styles.leaveItem}>
              <h3>{leave.name} - {leave.department}</h3>
              <p>{leave.subject}</p>
              <button className={styles.acceptButton}>Accept</button>
              <button className={styles.rejectButton}>Reject</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
