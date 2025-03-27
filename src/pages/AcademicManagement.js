import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";
import { Box, Button, Typography, Container, Grid } from "@mui/material";

const standards = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const AcademicManagement = () => {
  const navigate = useNavigate();

  const handleStandardClick = (standard) => {
    navigate(`/syllabus/${standard}`);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px", backgroundColor: "transparent" }}>
        <Topbar />
        <Container sx={{ mt: 8, textAlign: "center", backgroundColor: "transparent", boxShadow: "none" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, textAlign: "left", ml: 5 }}>
            Academic Management
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Standards
          </Typography>

          <Grid container  justifyContent="center" spacing={4}>
            {standards.map((standard) => (
              <Grid item xs={12} sm={4} md={4} key={standard}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100px",
                    height: "100px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleStandardClick(standard)}
                >
                  {standard}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AcademicManagement;
