import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StudentDetails from "../components/StudentDetails";
import ParentDetails from "../components/ParentDetails";
import AddressDetails from "../components/AddressDetails";
import AdmissionDetails from "../components/AdmissionDetails";
import AcademicDetails from "../components/TransferAdmission";
import TransportDetails from "../components/TransportDetails";
import Declaration from "../components/Declaration";
import FormNavigation from "../components/FormNavigation";
import styles from "../styles/admissionForm.module.css"; // Centralized CSS

const AdmissionForm = () => {
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <div className="mainContent">
        <Topbar />
        <h2 className={styles.pageTitle}>Student Management</h2>
        <h3 className={styles.formTitle}>Admission Form</h3>

        {/* Form Container */}
        <div className={styles.formContainer}>
          {/* SINGLE FORM GROUP TO WRAP ALL SECTIONS */}
          <form className={styles.mainForm}>

            {/* Student Details */}
            <StudentDetails />

            {/* Parent/Guardian Details */}
            <ParentDetails />

            {/* Address Details */}
            <AddressDetails />

            {/* Admission Details */}
            <AdmissionDetails />
            {/* Academic Details */}
            <AcademicDetails />
            {/* Transport Details */}
            <TransportDetails />

            {/* Declaration Section */}
            <Declaration />

            {/* Back & Next Buttons */}
            <FormNavigation />

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
