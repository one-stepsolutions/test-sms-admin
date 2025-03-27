import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/createAnnouncement.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const CreateAnnouncement = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    visibility: "",
    department: "",
    schedule: "",
    content: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation - Ensure all fields are filled
    if (
      !formData.title ||
      !formData.priority ||
      !formData.visibility ||
      !formData.department ||
      !formData.schedule ||
      !formData.content
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Fetch existing announcements from local storage
    const existingAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];

    // Create new announcement object
    const newAnnouncement = {
      ...formData,
      date: new Date().toLocaleDateString(), // Automatically add today's date
    };

    // Save the announcement and update storage
    const updatedAnnouncements = [...existingAnnouncements, newAnnouncement];
    localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements));

    // Redirect to announcements page after submission
    navigate("/staff-announcements");
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <h2 className={styles.heading}>Staff Management</h2>
        

        <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h3 className={styles.headingtable}>Announcements Creation</h3>
          <div className={styles.inputGroup}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          </div>

          <div className={styles.inlineInputs}>
            <div className={styles.inputGroup}>
              <label>Priority Level:</label>
              <input
                type="text"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                placeholder="Enter priority level"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Visibility Options:</label>
              <input
                type="text"
                name="visibility"
                value={formData.visibility}
                onChange={handleChange}
                placeholder="Enter visibility"
              />
            </div>
          </div>

          <div className={styles.inlineInputs}>
            <div className={styles.inputGroup}>
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Schedule:</label>
              <input
                type="text"
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                placeholder="Enter schedule"
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Announcement Content:</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write announcement content here..."
              rows="5"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
