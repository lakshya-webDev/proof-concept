import React from "react";
import Navbar from "../components/Navbar";
const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
    <Navbar/>
      <div className="dashboard-layout">
        {children}
      </div>
    </React.Fragment>
  );
};
export default DashboardLayout;
