import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AcademicProvider } from "./context/AcademicContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import StudentManagement from "./pages/StudentManagement";
import AdmissionForm from "./pages/AdmissionForm";
import AcademicDetails from "./pages/TransferAdmissionForm";
import StaffList from "./pages/StaffManagement";
import StaffRegistration from "./pages/StaffRegisteration";
import Classroom from "./pages/ClassroomManagement";
import ClassroomDivisions from "./pages/ClassroomDivision";
import ClassroomAttendance from "./pages/ClassAttendenceTracker";
import Academic from "./pages/AcademicManagement";
import StudentList from "./pages/StudentList";
import Syllabus from "./pages/syllabus";
import ExamManagement from "./pages/ExamManagement";
import ExamTimeTable from "./pages/ExamTimeTable";
import CreateTimeTable from "./pages/CreateTimeTable";
import FeesDashboard from "./pages/FeesDashboard";
import FeeStructureSetup from "./pages/FeeStructureSetup";
import AssignFees from "./pages/AssignFees"; 
import Installments from "./pages/InstallmentsManagement";
import PaymentEntry from "./pages/PaymentEntry";
import InventoryManagement from "./pages/InventoryManagement";
import AddInventory from "./pages/AddInventory";
import EventManagement from "./pages/EventManagement";
import EventCreation from "./pages/EventCreation";
import ParticipantsList from "./pages/ParticipantsList";
import AttendanceManagement from "./pages/AttendanceManagement";
import TeachersAllocation from "./pages/TeachersAllocation";
import StudentTimetable from "./pages/StudentTimetable";
import AcademicEvents from "./pages/AcademicEvents";
import StaffAttendance from "./pages/StaffAttendance";
import StaffAttendanceYearly from "./pages/StaffAttendanceYearly";
import TimetableAllocation from "./pages/TimetableAllocation";
import LeaveManagement from "./pages/LeaveManagement";
import LeaveDetails from "./pages/LeaveDetails";
import AddTimetable from "./pages/AddStaffTimetable";
import Announcements from "./pages/Announcement";
import Roles from "./pages/Roles";
import AddRoles from "./pages/AddRoles";
import CreateAnnouncement from "./pages/CreateAnnouncement";
import AnnouncementDetails from "./pages/AnnouncementDetails";
import ClassroomStudentTimetable from "./pages/ClassroomStudentTimetable"
import ClassroomAssessment from "./pages/ClassroomAssessment"
import ClassroomEvents from "./pages/ClassroomEvents"
import ClassSyllabus from "./pages/ClassroomSyllabus"
import ClassExam from "./pages/ClassroomExamresult"
import SemesterResults from "./pages/ExamResultsDetails";

import CreateAssessment from "./pages/CreateAssessment";
import AssessmentDetails from "./pages/AssessmentDetails";
function App() {
  const navigate = useNavigate();

  // ✅ Define inventoryData state
  const [inventoryData, setInventoryData] = useState([]);

  // ✅ Function to add inventory data to the list
  const handleAddInventory = (newItem) => {
    setInventoryData((prevData) => [...prevData, newItem]);
  };

  // ✅ Define events state
  const [events, setEvents] = useState([]);

  // ✅ Function to add a new event and redirect to Event Management
  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, { id: prevEvents.length + 1, ...newEvent }]);
    navigate("/events"); // ✅ Redirect to Event Management page after saving
  };
  const [attendanceData, setAttendanceData] = useState([]);
  const [teacherAllocations, setTeacherAllocations] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [academicEvents, setAcademicEvents] = useState([]);
  
  return (

    <AcademicProvider
    value={{
      attendanceData,
      teacherAllocations,
      timetable,
      academicEvents,
      setAttendanceData,
      setTeacherAllocations,
      setTimetable,
      setAcademicEvents,
    }}>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<StudentManagement />} />
      <Route path="/admission-form" element={<AdmissionForm />} />
      <Route path="/academic-details" element={<AcademicDetails />} />
      <Route path="/staff" element={<StaffList />} />
      <Route path="/staff-registration" element={<StaffRegistration />} />
      <Route path="/classroom" element={<Classroom />} />
      <Route path="/classroom-divisions/:standard" element={<ClassroomDivisions />} />
      <Route path="/classroom-student-timetable" element={<ClassroomStudentTimetable />} />
      <Route path="/classroom-assessment" element={<ClassroomAssessment />} />
      <Route path="/classroom-events" element={<ClassroomEvents />} />
      <Route path="/class-exam-result" element={<ClassExam />} />
      <Route path="/class-exam-result/:std/:div/:semester" element={<SemesterResults />} />
      <Route path="/class-syllabus-tracker" element={<ClassSyllabus />} />
      <Route path="/classroom-assessment/create" element={<CreateAssessment />} />
      <Route path="/classroom-assessment/:id" element={<AssessmentDetails />} />
      <Route path="/classroom-attendance" element={<ClassroomAttendance />} />
      <Route path="/academic-management" element={<Academic />} />
      <Route path="/studentlist" element={<StudentList />} />
      <Route path="/studentlist/:standard/:division" element={<StudentList />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/syllabus/:standard" element={<Syllabus />} />
      <Route path="/exam-management" element={<ExamManagement />} />
      <Route path="/exam-timetable/:standard" element={<ExamTimeTable />} />
      <Route path="/create-timetable" element={<CreateTimeTable />} />
      <Route path="/fees-management" element={<FeesDashboard />} />
      <Route path="/fees-structure" element={<FeeStructureSetup />} />
      <Route path="/assign-fees" element={<AssignFees />} />
      <Route path="/fees-installments" element={<Installments />} />
      <Route path="/payment-entry" element={<PaymentEntry />} />
      <Route path="/inventory-management" element={<InventoryManagement inventory={inventoryData} />} />
      <Route path="/add-inventory" element={<AddInventory onAdd={handleAddInventory} />} />
      <Route path="/events" element={<EventManagement events={events} />} />
      <Route path="/events/create" element={<EventCreation onSave={handleAddEvent} />} />
      <Route path="/events/participants/:eventId" element={<ParticipantsList events={events} />} />
      <Route path="/student-attendance" element={<AttendanceManagement />} />
      <Route path="/teachers-allocation" element={<TeachersAllocation />} />
      <Route path="/academic-timetable" element={<StudentTimetable />} />
      <Route path="/academic-events" element={<AcademicEvents />} />
      <Route path="/staff-attendance" element={<StaffAttendance />} />
      <Route path="/staff-attendance-yearly" element={<StaffAttendanceYearly />} />
      <Route path="/staff-leave" element={<LeaveManagement />} />
      <Route path="/staff-leave/:leaveId" element={<LeaveDetails />} />
      <Route path="staff-timetable" element={<TimetableAllocation />} />
      <Route path="/staff-timetable/add" element={<AddTimetable />} />
      <Route path="/staff-roles" element={<Roles />} />
      <Route path="/staff-roles/add" element={<AddRoles />} />
      <Route path="/staff-announcements" element={<Announcements />} />
      <Route path="/staff-announcements/create" element={<CreateAnnouncement />} />
      <Route path="/staff-announcements/:id" element={<AnnouncementDetails />} />
    </Routes>

</AcademicProvider>
  );
}

export default App;
