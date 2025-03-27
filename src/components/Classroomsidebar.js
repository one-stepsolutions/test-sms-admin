import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/dashboard.module.css";
import logo from "../assets/images/sspd.png";
import studentlistIcon from "../assets/images/Icons/ClassroomManagement/studentlist.svg";
import Timetable from "../assets/images/Icons/ClassroomManagement/Timetable.svg";
import attendance from "../assets/images/Icons/ClassroomManagement/Attendence.svg";
import assessment from "../assets/images/Icons/ClassroomManagement/Assesmnet.svg";
import result from "../assets/images/Icons/ClassroomManagement/result.svg";
import testresult from "../assets/images/Icons/ClassroomManagement/TestsResult.svg";
import sylabus from "../assets/images/Icons/ClassroomManagement/Sylabus.svg";
import Events from "../assets/images/Icons/ClassroomManagement/Events.svg";

const menuItems = [
  { name: "Student List", icon: studentlistIcon, path: "/studentlist" },
  { name: "Timetable", icon: Timetable, path: "/classroom-student-timetable" },
  { name: "Assessment", icon: assessment, path: "/classroom-assessment" },
  { name: "Attendance ", icon: attendance, path: "/classroom-attendance" },
  { name: "Test Result", icon: testresult, path: "/test-result" },
  { name: "Exam Result", icon: result, path: "/class-exam-result" },
  { name: "Sylabus Tracker", icon: sylabus, path: "/class-syllabus-tracker" },
  { name: "Events", icon: Events, path: "/classroom-events" }
];

const Classroomsidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className={styles.sidebar}>
      {/* Logo Section */}
      <Link to="/dashboard" className={styles.logoLink}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="SSPD SMS Logo" className={styles.logo} />
          <h2 className={styles.sidebarTitle}>SSPD SMS</h2>
        </div>
      </Link>


     {/* Sidebar Menu */}
     <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Link to={item.path} className={styles.menuLink}>
              <img src={item.icon} alt={item.name} className={styles.menuIcon} />
              <span className={styles.menuText}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Classroomsidebar;
