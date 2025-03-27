import React from "react";
import { Link } from "react-router-dom"; // Import Link for Navigation
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/dashboard.module.css";
import studentIcon from "../assets/images/Icons/LeftPanel/Student.svg";
import staffIcon from "../assets/images/Icons/LeftPanel/Staff.svg";
import classroomIcon from "../assets/images/Icons/LeftPanel/Classroom.svg";
import academicIcon from "../assets/images/Icons/LeftPanel/Academic.svg";
import feesIcon from "../assets/images/Icons/LeftPanel/Fees.svg";
import examIcon from "../assets/images/Icons/LeftPanel/Exam.svg";
import eventIcon from "../assets/images/Icons/LeftPanel/Event.svg";
import transportIcon from "../assets/images/Icons/LeftPanel/Transport.svg";
import inventoryIcon from "../assets/images/Icons/LeftPanel/Inventory.svg";
import chatIcon from "../assets/images/Icons/Headers/Chat.svg"; // Chat icon

const modules = [
  { name: "Student Management", icon: studentIcon, path: "/students" },
  { name: "Staff Management", icon: staffIcon, path: "/staff" },
  { name: "Class Management", icon: classroomIcon, path: "/classroom" },
  { name: "Academic Management", icon: academicIcon, path: "/academic-management" },
  { name: "Fees Management", icon: feesIcon, path: "/fees-management" },
  { name: "Exam Management", icon: examIcon, path: "/exam-management" },
  { name: "Event Management", icon: eventIcon, path: "/events" },
  { name: "Transport Management", icon: transportIcon, path: "/transport" },
  { name: "Inventory Management", icon: inventoryIcon, path: "/inventory-management" },
];

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.dashboardMain}>
        <Topbar />
        <h2 className={styles.dashboardTitle}>Dashboard</h2> {/* Title is now visible */}

        {/* Middle Grid Layout */}
        <div className={styles.moduleGrid}>
          {modules.map((module, index) => (
            <div key={index} className={styles.moduleCard}>
              <img src={module.icon} alt={module.name} className={styles.moduleIcon} />
              <Link to={module.path} className={styles.moduleButton}>{module.name}</Link> 
            </div>
          ))}
        </div>

        {/* Chat Icon in Bottom Right */}
        <div className={styles.chatIconContainer}>
          <img src={chatIcon} alt="Chat" className={styles.chatIcon} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
