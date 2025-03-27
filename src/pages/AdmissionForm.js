import React, { useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StudentDetails from "../components/StudentDetails";
import ParentDetails from "../components/ParentDetails";
import AddressDetails from "../components/AddressDetails";
import AdmissionDetails from "../components/AdmissionDetails";
import TransportDetails from "../components/TransportDetails";
import Declaration from "../components/Declaration";
import FormNavigation from "../components/FormNavigation";
import TransferAdmissionForm from "../components/TransferAdmission";

const AdmissionForm = () => {
  const [admissionType, setAdmissionType] = useState("new");
  const [studentData, setStudentData] = useState({});
  
  // Simulate fetching transfer student details
  const fetchTransferData = () => {
    const transferData = {
      student: { name: "John Doe", age: 16, grade: "10" },
      parent: { father: "Mr. Doe", mother: "Mrs. Doe" },
      address: { city: "New York", zip: "10001" },
      admission: { type: "transfer", previousSchool: "XYZ High School" },
      transport: { busNumber: "23", route: "Downtown" },
    };
    setStudentData(transferData);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            Student Management
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>Admission Form</Typography>
          <Paper sx={{ padding: 3, boxShadow: 'none' }}>
            {admissionType === "transfer" ? (
              <TransferAdmissionForm studentData={studentData} />
            ) : (
              <>
                <StudentDetails data={studentData.student} />
                <ParentDetails data={studentData.parent} />
                <AddressDetails data={studentData.address} />
                <AdmissionDetails 
  admissionType={admissionType} 
  onTypeChange={(type) => {
    setAdmissionType(type);
    if (type === "transfer") fetchTransferData();
  }}
/>
{admissionType === "transfer" && (
  <TransferAdmissionForm studentData={studentData} />
)}
                <TransportDetails data={studentData.transport} />
                <Declaration />
                <FormNavigation />
              </>
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AdmissionForm;
