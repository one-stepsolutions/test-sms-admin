import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Importing icons
import studentIcon from "../assets/images/Icons/LeftPanel/Student.svg";
import staffIcon from "../assets/images/Icons/LeftPanel/Staff.svg";
import classroomIcon from "../assets/images/Icons/LeftPanel/Classroom.svg";
import academicIcon from "../assets/images/Icons/LeftPanel/Academic.svg";
import feesIcon from "../assets/images/Icons/LeftPanel/Fees.svg";
import examIcon from "../assets/images/Icons/LeftPanel/Exam.svg";
import eventIcon from "../assets/images/Icons/LeftPanel/Event.svg";
import transportIcon from "../assets/images/Icons/LeftPanel/Transport.svg";
import inventoryIcon from "../assets/images/Icons/LeftPanel/Inventory.svg";
import logo from "../assets/images/sspd.png";

const menuItems = [
  { name: 'Student Management', icon: studentIcon, path: '/students' },
  { name: 'Staff Management', icon: staffIcon, path: '/staff' },
  { name: 'Classroom Management', icon: classroomIcon, path: '/classroom' },
  { name: 'Academic Management', icon: academicIcon, path: '/academic-management' },
  { name: 'Fees Management', icon: feesIcon, path: '/fees-management' },
  { name: 'Exam Management', icon: examIcon, path: '/exam-management' },
  { name: 'Event Management', icon: eventIcon, path: '/events' },
  { name: 'Transport Management', icon: transportIcon, path: '/transport-management' },
  { name: 'Inventory Management', icon: inventoryIcon, path: '/inventory-management' },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        bgcolor: '#fff',
        borderRight: '2px solid #e0e0e0',
      }}
    >
      {/* Logo & Heading Section - Aligned in One Line */}
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '15px', justifyContent: 'center' }}>
        <img src={logo} alt="SSPD SMS Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#1E88E5',
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
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <ListItemIcon sx={{ minWidth: '55px', display: 'flex', justifyContent: 'center' }}>
              <img src={item.icon} alt={item.name} style={{ width: '40px', height: '40px' }} />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#333',
              }}
            />
            <ArrowForwardIosIcon sx={{ fontSize: 18, color: '#aaa', marginLeft: 'auto' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
