import React, { useState, useEffect } from "react";

const PaymentModal = ({ student, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: student.name,
    standard: student.standard,
    date: "",
    installmentType: "Yearly",
    amount: "",
    mode: "Cash",
  });

  useEffect(() => {
    if (formData.standard) {
      // Fetch assigned fee based on the standard (assuming it's stored in localStorage or API)
      const feesData = JSON.parse(localStorage.getItem("feesData")) || {};
      const assignedFee = feesData[formData.standard] || 0;

      if (formData.installmentType === "Yearly") {
        setFormData((prev) => ({ ...prev, amount: assignedFee }));
      } else if (formData.installmentType === "Half Yearly") {
        setFormData((prev) => ({ ...prev, amount: assignedFee / 2 }));
      }
    }
  }, [formData.standard, formData.installmentType]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="payment-modal">
        <h3>Payment</h3>
        <button onClick={onClose} style={{ float: "right" }}>X</button>
        <div>
          <label>Name:</label>
          <input type="text" value={formData.name} readOnly />

          <label>Std:</label>
          <input type="text" value={formData.standard} readOnly />

          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />

          <label>Installment Type:</label>
          <select name="installmentType" value={formData.installmentType} onChange={handleChange}>
            <option value="Yearly">Yearly</option>
            <option value="Half Yearly">Half Yearly</option>
          </select>

          <label>Amount:</label>
          <input type="text" name="amount" value={formData.amount} readOnly />

          <label>Mode:</label>
          <select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
