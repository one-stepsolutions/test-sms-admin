import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/login.module.css"; 

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`, 
        credentials
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid login credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>SSPD SMS</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.loginButton}>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
