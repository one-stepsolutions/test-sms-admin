import React from "react";
import styles from "../styles/staff.module.css";

const SelectField = ({ label, name, options, onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <label>{label}</label>
      <select name={name} onChange={onChange} className={styles.selectField} required>
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
