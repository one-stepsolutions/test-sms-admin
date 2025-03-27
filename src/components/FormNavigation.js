import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/formNavigation.module.css"; // Fixed CSS import

const FormNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.formNavigation}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>Back</button>
      <button className={styles.nextButton} onClick={() => navigate("/next-page")}>Next</button>
    </div>
  );
};

export default FormNavigation;
