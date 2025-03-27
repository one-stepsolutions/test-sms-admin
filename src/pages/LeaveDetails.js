import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/leaveDetails.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const LeaveDetails = () => {
  const { leaveId } = useParams();
  const navigate = useNavigate();
  const leaveRequests = [
    { id: 1, name: "Miss Kiran Tiwari", subject: "Not Feeling Well", department: "History", description: "Respected Sir/Madam, I am writing this request..." },
    { id: 2, name: "Mr. Sharma", subject: "Family Emergency", department: "Maths", description: "Urgent leave required due to family emergency." }
  ];
  
  const leave = leaveRequests.find(l => l.id === parseInt(leaveId));

  if (!leave) {
    return <h2>Leave Request Not Found</h2>;
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2>Leave Details</h2>
        <div className={styles.leaveCard}>
          <h3>{leave.name} - {leave.department}</h3>
          <p><strong>Subject:</strong> {leave.subject}</p>
          <p>{leave.description}</p>
          <button className={styles.acceptButton} onClick={() => navigate("/staff-leaves")}>Accept</button>
          <button className={styles.rejectButton} onClick={() => navigate("/staff-leaves")}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetails;
