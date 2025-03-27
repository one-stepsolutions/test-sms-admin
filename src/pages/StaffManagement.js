import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/staffDetails.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";

const StaffManagement = () => {
  const navigate = useNavigate();
  const [staffList, setStaffList] = useState([]);

  // Fetch staff data from local storage (temporary mock data handling)
  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem("staffList")) || [];
    setStaffList(storedStaff);
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.headerSection}>
          <h2>Staff Management</h2>
          <button
            className={styles.addButton}
            onClick={() => navigate("/staff-registration")}
          >
            Add Staff
          </button>
        </div>

        <div className={styles.searchContainer}>
          <SearchBar placeholder="Search Staff" />
        </div>

        <table className={styles.staffTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length > 0 ? (
              staffList.map((staff, index) => (
                <tr key={index}>
                  <td>{`${staff.firstName} ${staff.lastName}`}</td>
                  <td>{staff.designation}</td>
                  <td>{staff.department}</td>
                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() =>
                        navigate(`/staff-details/${staff.id}`, {
                          state: { staff },
                        })
                      }
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No staff records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffManagement;
