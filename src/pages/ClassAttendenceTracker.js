import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Table, Nav } from "react-bootstrap";
import Sidebar from "../components/Classroomsidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/attendenceTracker.module.css";

const AttendanceTracker = () => {
  const [selectedTab, setSelectedTab] = useState("monthly");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedStd, setSelectedStd] = useState("");
  const [selectedDiv, setSelectedDiv] = useState("");
  const [classTeacher, setClassTeacher] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);

  const teachers = {
    "5A": "Mr. A",
    "6B": "Ms. B",
    "7C": "Mr. C",
  };

  const studentsMockData = [
    { id: 1, name: "Student A" },
    { id: 2, name: "Student B" },
    { id: 3, name: "Student C" },
  ];

  useEffect(() => {
    if (selectedStd && selectedDiv) {
      setClassTeacher(teachers[`${selectedStd}${selectedDiv}`] || "Not Assigned");
    }
  }, [selectedStd, selectedDiv]);

  useEffect(() => {
    if (selectedStd && selectedDiv && (selectedMonth || selectedTab === "yearly")) {
      if (selectedTab === "monthly") {
        generateMonthlyTable(selectedMonth);
      } else {
        generateYearlyTable();
      }
    } else {
      setAttendanceData([]);
    }
  }, [selectedTab, selectedMonth, selectedStd, selectedDiv]);

  const generateMonthlyTable = (month) => {
    const daysInMonth = new Date(2025, month, 0).getDate();
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const attendance = studentsMockData.map((student) => ({
      name: student.name,
      values: dates.map(() => (Math.random() > 0.5 ? "Present" : "Absent")),
    }));

    setAttendanceData([{ label: "Date", values: dates }, ...attendance]);
  };

  const generateYearlyTable = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const attendance = studentsMockData.map((student) => ({
      name: student.name,
      values: months.map(() => ({
        present: Math.floor(Math.random() * 20) + 5,
        absent: 30 - Math.floor(Math.random() * 20) - 5,
      })),
    }));

    setAttendanceData([{ label: "Months", values: months }, ...attendance]);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <Container fluid>
          {/* Classroom Management Section */}
          <Row className={styles.headerRow}>
            <Col><h4>Classroom Management</h4></Col>
          </Row>

          {/* Filters Section */}
          <Row className={styles.filterRow}>
            <Col md={2}>
              <Form.Label>Std</Form.Label>
              <Form.Control as="select" value={selectedStd} onChange={(e) => setSelectedStd(e.target.value)}>
                <option value="">Select</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </Form.Control>
            </Col>
            <Col md={2}>
              <Form.Label>Div</Form.Label>
              <Form.Control as="select" value={selectedDiv} onChange={(e) => setSelectedDiv(e.target.value)}>
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </Form.Control>
            </Col>
            <Col md={2}>
              <Form.Label>Month</Form.Label>
              <Form.Control as="select" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} disabled={selectedTab === "yearly"}>
                <option value="">Select</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
              </Form.Control>
            </Col>
            <Col md={3}>
              <Form.Label>Class Teacher</Form.Label>
              <Form.Control type="text" value={classTeacher} disabled />
            </Col>
          </Row>

          {/* Attendance Tracker Tabs (Properly Aligned) */}
          <h4 className={styles.trackerTitle}>Attendance Tracker</h4>
          <div className={styles.tabContainer}>
            <Nav variant="pills" className={styles.navTabs}>
              <Nav.Item>
                <Nav.Link className={selectedTab === "monthly" ? styles.activeTab : styles.inactiveTab} onClick={() => setSelectedTab("monthly")}>
                  Monthly
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={selectedTab === "yearly" ? styles.activeTab : styles.inactiveTab} onClick={() => setSelectedTab("yearly")}>
                  Yearly
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* Monthly Attendance Table */}
          {selectedTab === "monthly" && attendanceData.length > 1 && (
            <Table bordered className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  {attendanceData[0].values.map((day) => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.slice(1).map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    {student.values.map((status, i) => (
                      <td key={i} className={status === "Present" ? styles.present : styles.absent}>{status}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          {/* Yearly Attendance Table */}
          {selectedTab === "yearly" && attendanceData.length > 1 && (
            <Table bordered className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  {attendanceData[0].values.map((month) => <th key={month}>{month}</th>)}
                </tr>
              </thead>
              <tbody>
                {attendanceData.slice(1).map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    {student.values.map((data, i) => (
                      <td key={i}>
                        <strong>Present:</strong> {data.present} days <br />
                        <strong>Absent:</strong> {data.absent} days
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
    </div>
  );
};

export default AttendanceTracker;
