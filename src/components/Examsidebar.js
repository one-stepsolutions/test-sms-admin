import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Container from "react-bootstrap/Container";

// Importing logo and icons
import logo from "../assets/images/sspd.png";
import examtimetable from "../assets/images/Icons/ExamManagement/Timetable.svg";
import questionPaper from "../assets/images/Icons/ExamManagement/Questionpaper.svg";
import block from "../assets/images/Icons/ExamManagement/ExamBlocks.svg";
import supervisor from "../assets/images/Icons/ExamManagement/SupervisorAllotment.svg";
import paperscheck from "../assets/images/Icons/ExamManagement/PaperRe-checking.svg";
import rechecking from "../assets/images/Icons/ExamManagement/PaperRe-checking.svg";
import reportcard from "../assets/images/Icons/ExamManagement/ReportCard.svg";

const menuItems = [
  { name: "Timetable", icon: examtimetable, path: "/create-timetable" },
  { name: "Question Paper", icon: questionPaper, path: "/question-papers" },
  { name: "Exam Blocks", icon: block, path: "/exam-blocks" },
  { name: "Supervisor Allotment", icon: supervisor, path: "/supervisor-allotment" },
  { name: "Paper Checking", icon: paperscheck, path: "/paper-check" },
  { name: "Paper Rechecking", icon: rechecking, path: "/papers-recheck" },
  { name: "Report Card", icon: reportcard, path: "/report-card" },
];

const ExamSidebar = () => {
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
              <img src={item.icon} alt={item.name} style={{ width: "55px", height: "55px" }} />
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

export default ExamSidebar;
