import DashboardNav from "@/components/DashboardNav";
import React from "react";

const Dashboardlayout = ({ children }) => {
  return (
    <>
      <DashboardNav />
      <main className="mt-16">{children}</main>
    </>
  );
};

export default Dashboardlayout;
