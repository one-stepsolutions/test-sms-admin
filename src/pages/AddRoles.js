import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography, Checkbox, Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper } from "@mui/material";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const CreateRole = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState(JSON.parse(localStorage.getItem("roles")) || []);
  const [roleData, setRoleData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    std: "",
    div: "",
    permissions: [],
  });

  const modules = [
    "Student Management",
    "Staff Management",
    "Class Management",
    "Academic Management",
    "Exam Management",
    "Fees Management",
  ];

  const handlePermissionChange = (module, action) => {
    setRoleData((prevData) => {
      const updatedPermissions = [...prevData.permissions];
      const existingModule = updatedPermissions.find((p) => p.module === module);

      if (existingModule) {
        existingModule.actions = existingModule.actions.includes(action)
          ? existingModule.actions.filter((a) => a !== action)
          : [...existingModule.actions, action];
      } else {
        updatedPermissions.push({ module, actions: [action] });
      }
      return { ...prevData, permissions: updatedPermissions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roleData.firstName || !roleData.designation) {
      alert("Please fill in all required fields!");
      return;
    }

    const updatedRoles = [...roles, roleData];
    localStorage.setItem("roles", JSON.stringify(updatedRoles));
    setRoles(updatedRoles);
    navigate("/staff-roles");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container sx={{ mt: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 3, mb: 3 }} sx={{ fontWeight: "bold", mb: 3 }}>
            Role Creation
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="First Name" name="firstName" value={roleData.firstName} onChange={(e) => setRoleData({ ...roleData, firstName: e.target.value })} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Middle Name" name="middleName" value={roleData.middleName} onChange={(e) => setRoleData({ ...roleData, middleName: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" name="lastName" value={roleData.lastName} onChange={(e) => setRoleData({ ...roleData, lastName: e.target.value })} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Designation" name="designation" value={roleData.designation} onChange={(e) => setRoleData({ ...roleData, designation: e.target.value })} required />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Std" name="std" value={roleData.std} onChange={(e) => setRoleData({ ...roleData, std: e.target.value })} />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Div" name="div" value={roleData.div} onChange={(e) => setRoleData({ ...roleData, div: e.target.value })} />
              </Grid>
            </Grid>
            <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
              Assign Permissions:
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Module Name</TableCell>
                    <TableCell>View</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Control</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {modules.map((module, index) => (
                    <TableRow key={index}>
                      <TableCell>{module}</TableCell>
                      {["View", "Edit", "Delete", "Control"].map((action) => (
                        <TableCell key={action}>
                          <Checkbox
                            checked={roleData.permissions.some((p) => p.module === module && p.actions.includes(action))}
                            onChange={() => handlePermissionChange(module, action)}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
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

export default CreateRole;
