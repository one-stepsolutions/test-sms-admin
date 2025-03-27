import React, { useState } from "react";
import Sidebar from "../components/Feessidebar";
import Topbar from "../components/Topbar";
import SearchBar from "../components/SearchBar";
import styles from "../styles/paymentEntry.module.css"; // Ensure your CSS is properly structured
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const PaymentEntry = () => {
  const [payments, setPayments] = useState([
    { date: "2024-03-01", totalFees: "₹5000", installment: "₹2500" },
    { date: "2024-04-01", totalFees: "₹5000", installment: "₹2500" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [newPayment, setNewPayment] = useState({
    name: "",
    std: "",
    date: "",
    installmentType: "Yearly",
    amount: "",
    mode: "Cash"
  });

  // Open Modal on Pay Click
  const handlePayClick = (index) => {
    setSelectedPayment(index);
    setModalOpen(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setNewPayment({
      name: "",
      std: "",
      date: "",
      installmentType: "Yearly",
      amount: "",
      mode: "Cash"
    });
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setNewPayment({ ...newPayment, [e.target.name]: e.target.value });

    // Auto-fill amount based on selected standard
    if (e.target.name === "std") {
      if (e.target.value === "5") setNewPayment({ ...newPayment, amount: "₹5000" });
      else if (e.target.value === "6") setNewPayment({ ...newPayment, amount: "₹6000" });
    }
  };

  // Submit Payment
  const handleSubmit = () => {
    if (newPayment.date && newPayment.amount && newPayment.std) {
      setPayments([...payments, { ...newPayment }]);
      handleCloseModal();
    } else {
      alert("Please fill all fields.");
    }
  };

  // Download PDF Receipt
  const handleDownload = (payment) => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 10, 10);

    autoTable(doc, { // Use autoTable correctly
        head: [["Name", "Standard", "Date", "Installment Type", "Amount"]],
        body: [
            [payment.name, payment.standard, payment.date, payment.installmentType, `₹${payment.amount}`],
        ],
        startY: 20,
    });

    doc.save(`receipt_${payment.name}.pdf`);
};


  return (
    <div className={styles.container}>
      <Sidebar />
      <Topbar /> 
      <h2>Fees Management</h2>
      <SearchBar placeholder="Search Staff" />

      {/* Fees Table */}
      <table className={styles.feesTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Fees</th>
            <th>Installment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.totalFees || payment.amount}</td>
                <td>{payment.installment || payment.amount}</td>
                <td>
                  <button className={styles.downloadBtn} onClick={() => handleDownload(index)}>
                    Download
                  </button>
                  <button className={styles.payBtn} onClick={() => handlePayClick(index)}>
                    Pay
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className={styles.noPayments}>
                No Payments Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Payment Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <span className={styles.closeBtn} onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Payment</h3>

            <label>Name:</label>
            <input type="text" name="name" value={newPayment.name} onChange={handleChange} />

            <label>Standard:</label>
            <input type="text" name="std" value={newPayment.std} onChange={handleChange} />

            <label>Date:</label>
            <input type="date" name="date" value={newPayment.date} onChange={handleChange} />

            <label>Installment Type:</label>
            <select name="installmentType" value={newPayment.installmentType} onChange={handleChange}>
              <option value="Yearly">Yearly</option>
              <option value="Half-Yearly">Half-Yearly</option>
              <option value="Quarterly">Quarterly</option>
            </select>

            <label>Amount:</label>
            <input type="text" name="amount" value={newPayment.amount} onChange={handleChange} />

            <label>Mode:</label>
            <select name="mode" value={newPayment.mode} onChange={handleChange}>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Online Transfer">Online Transfer</option>
            </select>

            <button className={styles.submitBtn} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentEntry;
