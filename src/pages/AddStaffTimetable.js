import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from "@mui/material";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const AddTimetable = ({ onAddTimetable }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    timetable: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimetableChange = (day, value) => {
    setFormData({
      ...formData,
      timetable: { ...formData.timetable, [day]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.designation) {
      alert("Please fill all required fields.");
      return;
    }

    onAddTimetable({
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`,
      designation: formData.designation,
      ...formData.timetable,
    });

    navigate("/staff-timetable");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Staff Management
          </Typography>
          <SearchBar placeholder="Search Staff" />
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} required />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Timetable
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {Object.keys(formData.timetable).map((day) => (
                      <TableCell key={day}>{day}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {Object.keys(formData.timetable).map((day) => (
                      <TableCell key={day}>
                        <TextField fullWidth name={day} value={formData.timetable[day]} onChange={(e) => handleTimetableChange(day, e.target.value)} />
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AddTimetable;
