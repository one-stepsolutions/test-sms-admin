import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "react-bootstrap/Container";

// Importing logo and icons
import logo from "../assets/images/sspd.png";
import staffListIcon from "../assets/images/Icons/StaffManagement/StaffList.svg";
import staffRegistrationIcon from "../assets/images/Icons/StaffManagement/StaffRegistration.svg";
import attendanceIcon from "../assets/images/Icons/StaffManagement/Attendence.svg";
import leaveManagementIcon from "../assets/images/Icons/StaffManagement/LeaveManagement.svg";
import timetableIcon from "../assets/images/Icons/StaffManagement/Timetable.svg";
import rolesIcon from "../assets/images/Icons/StaffManagement/Roles.svg";
import announcementIcon from "../assets/images/Icons/StaffManagement/Announcements.svg";

const menuItems = [
  { name: "Staff List", icon: staffListIcon, path: "/staff-management" },
  { name: "Staff Registration", icon: staffRegistrationIcon, path: "/staff-registration" },
  { name: "Attendance", icon: attendanceIcon, path: "/staff-attendance" },
  { name: "Leave Management", icon: leaveManagementIcon, path: "/leave-management" },
  { name: "Timetable", icon: timetableIcon, path: "/staff-timetable" },
  { name: "Roles & Permissions", icon: rolesIcon, path: "/staff-roles" },
  { name: "Announcements", icon: announcementIcon, path: "/staff-announcements" },
];

const StaffSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 260,
        flexShrink: 0,
        bgcolor: "#fff",
        borderRight: "2px solid #e0e0e0",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo & Heading Section - Now Aligned in One Line */}
      <Box component={Link} to="/dashboard" sx={{ display: "flex", alignItems: "center", padding: "20px", justifyContent: "center", textDecoration: "none" }}>
        <img src={logo} alt="SSPD SMS Logo" style={{ width: "60px", height: "60px", marginRight: "10px" }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#1E88E5",
          }}
        >
          SSPD SMS
        </Typography>
      </Box>

      {/* Sidebar Menu */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <ListItemIcon sx={{ minWidth: "55px", display: "flex", justifyContent: "center" }}>
              <img src={item.icon} alt={item.name} style={{ width: "45px", height: "45px" }} />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#333",
              }}
            />
            <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#aaa", marginLeft: "auto" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default StaffSidebar;
