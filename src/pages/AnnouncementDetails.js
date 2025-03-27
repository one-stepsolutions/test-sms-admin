import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Paper, Avatar } from "@mui/material";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const AnnouncementDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const announcements = JSON.parse(localStorage.getItem("announcements")) || [];

  // Fetch the announcement based on the ID
  const announcement = announcements[id];

  if (!announcement) {
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, padding: "20px" }}>
          <Topbar />
          <Container sx={{ mt: 10, textAlign: "center" }}>
            <Typography variant="h4" color="error">
              Announcement Not Found
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/staff-announcements")}>
              Back to Announcements
            </Button>
          </Container>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>Staff Management</Typography>
            <Button variant="contained" onClick={() => navigate("/staff-announcements/create")}>
              Add
            </Button>
          </Box>
          
          <Typography variant="h4" sx={{ mt: 3 }}>Announcements</Typography>
          
          <Paper sx={{ mt: 3, padding: 3, boxShadow: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar sx={{ width: 50, height: 50, mr: 2 }} />
              <Box>
                <Typography variant="h6">{announcement.author}</Typography>
                <Typography variant="body2" color="textSecondary">{announcement.role}</Typography>
              </Box>
            </Box>
            
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>{announcement.title}</Typography>
            <Typography variant="caption" color="textSecondary">{announcement.date}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>{announcement.content}</Typography>
            
            <Button variant="outlined" sx={{ mt: 3 }} onClick={() => navigate("/staff-announcements")}>
              Back
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AnnouncementDetails;
