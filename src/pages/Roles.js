import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/rolesPermissions.module.css";
import Sidebar from "../components/Staffsidebar";
import Topbar from "../components/Topbar";

const Roles = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const storedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setRoles(storedRoles);
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Topbar />
        <div className={styles.headerSection}>
          <h2>Roles & Permissions</h2>
          <button className={styles.addButton} onClick={() => navigate("/staff-roles/add")}>Add</button>
        </div>

        <table className={styles.rolesTable}>
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Department</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr key={index}>
                <td>{role.firstName} {role.middleName} {role.lastName}</td>
                <td>{role.designation}</td>
                <td>
                  {/* Ensure role.permissions is always an array before mapping */}
                  {Array.isArray(role.permissions) ? (
                    role.permissions.map((perm, i) => (
                      <div key={i}>
                        <strong>{perm.module}:</strong> {perm.actions.join(", ")}
                      </div>
                    ))
                  ) : (
                    <span>No permissions assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
