import React from "react";
import styles from "../styles/staff.module.css";

const InputField = ({ label, name, type = "text", value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className={styles.inputField} required />
    </div>
  );
};

export default InputField;
