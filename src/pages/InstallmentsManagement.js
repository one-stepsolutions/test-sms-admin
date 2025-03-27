import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // Ensure correct import
import Sidebar from "../components/Feessidebar";
import Topbar from "../components/Topbar";
import Style from "../styles/installmentsManagement.module.css";
import PaymentModal from "../components/PaymentModal";

const InstallmentsManagement = () => {
  const [payments, setPayments] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePayClick = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handlePaymentSubmit = (data) => {
    setPayments([...payments, data]);
    setShowModal(false);
  };

  const handleDownload = (payment) => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 10, 10);

    autoTable(doc, {
      head: [["Name", "Std", "Date", "Installment Type", "Amount"]],
      body: [
        [payment.name, payment.standard, payment.date, payment.installmentType, `₹${payment.amount}`],
      ],
      startY: 20,
    });

    doc.save(`receipt_${payment.name}.pdf`);
  };

  return (
    <div className={Style.container}>
      <Sidebar />
      <div className={Style.mainContent}>
        <Topbar />

        {/* Section Heading */}
        <h2 className={Style.pageTitle}>Fees Management</h2>
        <h3 className={Style.sectionTitle}>Installments Management</h3>

        <div className={Style.tableContainer}>
          <table className={Style.installmentsTable}>
            <thead>
              <tr>
                <th>Standard</th>
                <th>Yearly</th>
                <th>Half Yearly</th>
                <th>Quarterly</th>
                <th>Monthly</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="5" className={Style.noData}>No Installment Data Found</td>
                </tr>
              ) : (
                payments.map((payment, index) => (
                  <tr key={index}>
                    <td>{payment.standard}</td>
                    <td>{payment.yearly || "-"}</td>
                    <td>{payment.halfYearly || "-"}</td>
                    <td>{payment.quarterly || "-"}</td>
                    <td>{payment.monthly || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <PaymentModal
          student={selectedStudent}
          onClose={() => setShowModal(false)}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  );
};

export default InstallmentsManagement;
