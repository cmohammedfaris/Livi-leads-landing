import React from "react";
import { Outlet } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";

const LandingLayout = () => {
  return (
    <div className="min-h-screen bg-[#F0F0F0] dark:bg-darkprimary transition-colors duration-300 flex flex-col">
      <LandingNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
