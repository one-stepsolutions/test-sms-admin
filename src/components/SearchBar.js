import React from "react";
import styles from "../styles/staff.module.css";

const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder={placeholder} className={styles.searchInput} />
      <span className={styles.searchIcon}>🔍</span>
    </div>
  );
};

export default SearchBar;
