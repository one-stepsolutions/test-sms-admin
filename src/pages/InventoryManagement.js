import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import styles from "../styles/inventoryManagement.module.css";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Sidebar />
      <Topbar />
      <div className={styles.mainContent}>
        <h2 className={styles.pageTitle}>Inventory Management</h2>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
        <SearchBar placeholder="Search Inventory" />
        </div>

        {/* Add Button */}
        <button className={styles.addButton} onClick={() => navigate("/add-inventory")}>Add</button>

        {/* Inventory Table */}
        <div className={styles.tableContainer}>
          <table className={styles.inventoryTable}>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {inventory.length === 0 ? (
                <tr><td colSpan="3">No Inventory Found</td></tr>
              ) : (
                inventory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.itemName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.location}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
