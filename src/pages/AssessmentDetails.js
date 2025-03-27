import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";

const AssessmentDetails = () => {
  const { id } = useParams();
  const assessments = JSON.parse(localStorage.getItem("assessments")) || [];
  const assessment = assessments.find((a) => String(a.id) === String(id));

  const [submissionFilter, setSubmissionFilter] = useState("All");
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState(0); // 0 for Classwork, 1 for Homework

  useEffect(() => {
    if (assessment) {
      const mockStudents = [
        { name: "John Doe", status: "Submitted" },
        { name: "Jane Smith", status: "Not Submitted" },
        { name: "Alice Johnson", status: "Submitted" },
        { name: "Bob Williams", status: "Not Submitted" },
      ];
      setStudents(mockStudents);
    }
  }, [assessment]);

  if (!assessment) {
    return (
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Topbar />
          <Container sx={{ mt: 10, textAlign: "center" }}>
            <Typography variant="h4">Assessment Not Found</Typography>
          </Container>
        </Box>
      </Box>
    );
  }

  const hasHomework = assessment.homeworkDescription?.trim() !== "";
  const filteredStudents = students.filter(
    (student) => submissionFilter === "All" || student.status === submissionFilter
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "left" }}>
            Classroom Management
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
          >
            Assessment Details
          </Typography>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Std:</strong> {assessment.standard}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Div:</strong> {assessment.division}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography><strong>Class Teacher:</strong> {assessment.teacher}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Submissions</InputLabel>
                  <Select
                    value={submissionFilter}
                    label="Submissions"
                    onChange={(e) => setSubmissionFilter(e.target.value)}
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Submitted">Submitted</MenuItem>
                    <MenuItem value="Not Submitted">Not Submitted</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            centered
            indicatorColor="primary"
            textColor="primary"
            sx={{ mb: 3 }}
          >
            <Tab label="Classwork" />
            {hasHomework && <Tab label="Homework" />}
          </Tabs>

          {activeTab === 0 && (
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography><strong>Date:</strong> {assessment.date}</Typography>
              <Typography><strong>Subject:</strong> {assessment.subject}</Typography>
              <Typography><strong>Topics Covered:</strong> {assessment.topicsCovered}</Typography>
              <Typography><strong>Key Points:</strong> {assessment.keyPoints}</Typography>
              {assessment.classActivity && (
                <Typography>
                  <strong>Class Activity:</strong>{" "}
                  <a href={assessment.classActivity} download>Download</a>
                </Typography>
              )}
            </Paper>
          )}

          {activeTab === 1 && (
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography>
                <strong>Homework Description:</strong> {assessment.homeworkDescription}
              </Typography>
              <Typography>
                <strong>Submission Deadline:</strong> {assessment.submissionDeadline}
              </Typography>
              {assessment.homeworkFile && (
                <Typography>
                  <strong>Homework File:</strong>{" "}
                  <a href={assessment.homeworkFile} download>Download</a>
                </Typography>
              )}
            </Paper>
          )}

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 5 }}>
            Student List
          </Typography>

          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Student Name</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2}>No students available</TableCell>
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

export default AssessmentDetails;
