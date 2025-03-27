import React, { createContext, useState, useEffect } from "react";

// Create Context
export const AcademicContext = createContext();

// Academic Provider Component
export const AcademicProvider = ({ children }) => {
  const [academicData, setAcademicData] = useState({
    attendance: [],
    timetable: [],
    teachers: [],
    events: [],
  });

  // ✅ Fetch Events from Local Storage when App Loads
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("eventState")) || [];
    setAcademicData((prev) => ({
      ...prev,
      events: savedEvents,
    }));
  }, []);

  return (
    <AcademicContext.Provider value={{ academicData, setAcademicData }}>
      {children}
    </AcademicContext.Provider>
  );
};
