import DashboardNav from "@/components/DashboardNav";
import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <>
      <DashboardNav />
      <main>{children}</main>
    </>
  );
};

export default Dashboardlayout;
