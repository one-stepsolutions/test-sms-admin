import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Tabs, Tab, Paper } from "@mui/material";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const Announcements = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("inbox");
  const [announcements, setAnnouncements] = useState(
    JSON.parse(localStorage.getItem("announcements")) || []
  );

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Staff Management
            </Typography>
            <Button variant="contained" onClick={() => navigate("/staff-announcements/create")}>
              Add
            </Button>
          </Box>

          <Typography variant="h4" sx={{ mt: 3 }}>Announcements</Typography>
          
          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            textColor="primary"
            indicatorColor="primary"
            sx={{ mt: 3 }}
          >
            <Tab label="Inbox" value="inbox" />
            <Tab label="Draft" value="draft" />
            <Tab label="Sent" value="sent" />
          </Tabs>
          
          <Paper sx={{ mt: 3, padding: 2, boxShadow: 3 }}>
            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <Box key={index} sx={{ mb: 2, padding: 2, borderBottom: "1px solid #ccc" }}>
                  <Typography variant="h5">{announcement.title}</Typography>
                  <Typography variant="caption" color="textSecondary">{announcement.date}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{announcement.content.substring(0, 50)}...</Typography>
                  <Button
                    variant="text"
                    sx={{ mt: 1 }}
                    onClick={() => navigate(`/staff-announcements/${index}`)}
                  >
                    Read More
                  </Button>
                </Box>
              ))
            ) : (
              <Typography>No announcements available.</Typography>
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Announcements;
