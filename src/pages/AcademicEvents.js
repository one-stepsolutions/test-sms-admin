import React, { useState, useEffect, useContext } from "react";
import { AcademicContext } from "../context/AcademicContext";
import { Container, Table, Form } from "react-bootstrap";
import Sidebar from "../components/Academicsidebar";
import Topbar from "../components/Topbar";
import { Box, Typography } from "@mui/material";

const AcademicEvents = () => {
  const { academicData, setAcademicData } = useContext(AcademicContext);
  const [selectedStandard, setSelectedStandard] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  // ✅ Fetch Events from Local Storage on Component Mount
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventState")) || [];
    setAcademicData((prev) => ({
      ...prev,
      events: savedEvents, // ✅ Ensure Context is Updated
    }));
  }, [setAcademicData]);

  // ✅ Filter events when standard is selected
  useEffect(() => {
    if (selectedStandard) {
      const eventsForStandard = academicData.events?.filter(
        (event) => event.std === selectedStandard
      );
      setFilteredEvents(eventsForStandard || []);
    } else {
      setFilteredEvents([]);
    }
  }, [selectedStandard, academicData.events]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Topbar />
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mt: 10, mb: 4, color: "#000" }}>
            Academic Events
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 3 }}>
            <Form.Label sx={{ fontWeight: "bold", mr: 2 }}>Select Standard:</Form.Label>
            <Form.Select sx={{ width: "200px", fontSize: "16px" }} onChange={(e) => setSelectedStandard(e.target.value)}>
              <option value="">-- Select Standard --</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
            </Form.Select>
          </Box>

          {/* Events Table */}
          <Table striped bordered hover style={{ width: "90%", margin: "auto", border: "2px solid black" }}>
            <thead>
              <tr style={{ backgroundColor: "#007bff", color: "#fff", textAlign: "center", fontSize: "16px" }}>
                <th style={{ width: "25%" }}>Date</th>
                <th style={{ width: "50%" }}>Event Name</th>
                <th style={{ width: "25%" }}>Div</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <tr key={index} style={{ textAlign: "center", fontSize: "15px" }}>
                    <td>{event.date}</td>
                    <td>{event.name}</td>
                    <td>{event.div}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No events available for this standard
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Container>
      </Box>
    </Box>
  );
};

export default AcademicEvents;
