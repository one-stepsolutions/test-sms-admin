import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/dashboard.module.css";
import logo from "../assets/images/sspd.png";
import vechile from "../assets/images/Icons/TransportManagement/vechile.svg";
import driver from "../assets/images/Icons/TransportManagement/driver-supervisors.svg";
import route from "../assets/images/Icons/TransportManagement/route.svg";
import gps from "../assets/images/Icons/TransportManagement/gps.svg";
import notification from "../assets/images/Icons/TransportManagement/notification.svg";

const menuItems = [
  { name: "Vechile Management", icon: vechile, path: "/vechile-management" },
  { name: "Driver & Supervisor", icon: driver, path: "/driver-supervisor" },
  { name: "Routes & Student Assign", icon: route, path: "/route-student" },
  { name: "Live GPS Tracking Entry", icon: gps, path: "/live-gps" },
  { name: "Parent Notification", icon: notification, path: "/parent-notification" }
];

const Transportsidebar = () => {
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
export default Transportsidebar;
