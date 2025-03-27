import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const AssessmentList = () => {
  const navigate = useNavigate();
  const [assessments, setAssessments] = useState([]);
  const [filteredAssessments, setFilteredAssessments] = useState([]);
  const [selectedStd, setSelectedStd] = useState("All");
  const [selectedDiv, setSelectedDiv] = useState("All");

  useEffect(() => {
    const storedAssessments = JSON.parse(localStorage.getItem("assessments")) || [];
    setAssessments(storedAssessments);
    setFilteredAssessments(storedAssessments);
  }, []);

  useEffect(() => {
    let filtered = assessments;
    if (selectedStd !== "All") {
      filtered = filtered.filter((a) => a.standard === selectedStd);
    }
    if (selectedDiv !== "All") {
      filtered = filtered.filter((a) => a.division === selectedDiv);
    }
    setFilteredAssessments(filtered);
  }, [selectedStd, selectedDiv, assessments]);

  const handleRowClick = (id) => {
    navigate(`/classroom-assessment/${id}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Classroom Management
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/classroom-assessment/add")}
            >
              Add
            </Button>
          </Box>

          {/* Page Title */}
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ my: 3 }}
          >
            Assessments
          </Typography>

          {/* Filters */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Std</InputLabel>
                  <Select
                    value={selectedStd}
                    onChange={(e) => setSelectedStd(e.target.value)}
                  >
                    <MenuItem value="All">All</MenuItem>
                    {[1,2,3,4,5,6,7,8,9,10].map(std => (
                      <MenuItem key={std} value={String(std)}>{std}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Div</InputLabel>
                  <Select
                    value={selectedDiv}
                    onChange={(e) => setSelectedDiv(e.target.value)}
                  >
                    <MenuItem value="All">All</MenuItem>
                    {["A", "B", "C"].map(div => (
                      <MenuItem key={div} value={div}>{div}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          {/* Assessment Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Subject</strong></TableCell>
                  <TableCell><strong>Standard</strong></TableCell>
                  <TableCell><strong>Division</strong></TableCell>
                  <TableCell><strong>Teacher</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAssessments.length > 0 ? (
                  filteredAssessments.map((assessment) => (
                    <TableRow
                      key={assessment.id}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(assessment.id)}
                    >
                      <TableCell>{assessment.date}</TableCell>
                      <TableCell>{assessment.subject}</TableCell>
                      <TableCell>{assessment.standard}</TableCell>
                      <TableCell>{assessment.division}</TableCell>
                      <TableCell>{assessment.teacher}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No assessments found.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default AssessmentList;
