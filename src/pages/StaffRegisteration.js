import React from "react";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import StaffDetails from "../components/StaffDetails";
import ContactDetails from "../components/ContactDetails";
import AddressDetails from "../components/AddressDetails";
import EducationDetails from "../components/EducationQualification";
import ProfessionalDetails from "../components/ProfessionalExperience";
import RolesDetails from "../components/RoleDepartmentDetails";
import BankDetails from "../components/BankDetails";
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
        <h2 className={styles.pageTitle}>Staff Management</h2>
        <h3 className={styles.formTitle}>Staff Registration </h3>

        {/* Form Container */}
        <div className={styles.formContainer}>
          {/* SINGLE FORM GROUP TO WRAP ALL SECTIONS */}
          <form className={styles.mainForm}>

            {/* Student Details */}
            <StaffDetails />

            {/* Parent/Guardian Details */}
            <ContactDetails />

            {/* Address Details */}
            <AddressDetails />

            {/* Admission Details */}
            <EducationDetails />
            {/* Professional Details */}
            <ProfessionalDetails />
            {/* Roles Details */}
            <RolesDetails />
            {/* Roles Details */}
            <BankDetails />
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
