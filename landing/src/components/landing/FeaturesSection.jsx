"use client";

import React, { useState } from "react";

const FeaturesSection = () => {
  const [activeTaskTab, setActiveTaskTab] = useState(0);

  const taskTabs = [
    {
      title: "General Task (Self / Others)",
      description: "Plan, assign, and track regular tasks.",
      image: "/FeaturesSection/fs_task.jpg",
    },
    {
      title: "Meeting (Online / Offline)",
      description: "Schedule meetings with agenda.",
      image: "/FeaturesSection/fs_task2.jpg",
    },
    {
      title: "Onsite Work",
      description: "Schedule onsite work and tracking.",
      image: "/FeaturesSection/fs_task3.jpg",
    },
  ];

  const CheckIcon = () => (
    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#1B44FE]">
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const ListItem = ({ text }) => (
    <div className="flex items-center gap-2">
      <CheckIcon />
      <span className="font-['Inter'] text-sm sm:text-base font-medium text-[#7A7A7A]">
        {text}
      </span>
    </div>
  );

  const MockupFrame = ({ imageUrl }) => (
    <div className="relative flex w-full flex-1 rounded-[24px] sm:rounded-[32px] bg-[#ECECEC] p-4 sm:p-6 pb-0 pr-0 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA] min-h-[300px] sm:min-h-[444px] overflow-hidden mt-6 lg:mt-0">
      <img
        src={imageUrl}
        alt="Feature Preview"
        className="h-full w-full rounded-tl-[16px] sm:rounded-tl-[20px] bg-white object-cover object-left-top shadow-sm"
      />
    </div>
  );

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-12 lg:py-24 bg-white">
      {/* Top Badge */}
      <div className="mb-10 sm:mb-16 flex h-8 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 shadow-xs lg:mb-20 mx-auto">
        <div className="h-2 w-2 rounded-full bg-[#5B04C5]" />
        <span className="font-['Inter'] text-xs sm:text-sm font-bold text-[#0A0B10]">
          Comprehensive Enterprise Modules
        </span>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 lg:gap-28">
        {/* --- Feature 1: Accounts & Invoicing Suite --- */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24">
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:max-w-[576px] w-full">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B04C5] uppercase tracking-wider">
              Financial Suite
            </div>
            <h2 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-5xl text-center lg:text-left">
              Invoices, Receipts & Payment Tracking
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A] text-center lg:text-left">
              Generate Tax & Proforma Invoices with automated balance settlement. Record multi-mode Cash collections assigned to employees, manage Cheque clearing stages with image proof verification, and track expenses across currencies.
            </p>
            <div className="mt-2 sm:mt-4 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 justify-items-start lg:justify-items-start mx-auto lg:mx-0 w-fit lg:w-full">
              <ListItem text="Tax & Proforma Invoices" />
              <ListItem text="Cash & Cheque Receipts" />
              <ListItem text="Auto Balance Calculation" />
              <ListItem text="Expense Tracking" />
              <ListItem text="PDF Export & Sharing" />
              <ListItem text="Multi-Currency (AED/INR/USD)" />
            </div>
          </div>
          <MockupFrame imageUrl="/FeaturesSection/fs_company.jpg" />
        </div>

        {/* --- Feature 2: HRMS & Permission Matrix --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 xl:gap-24">
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:max-w-[576px] w-full">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B04C5] uppercase tracking-wider">
              Workforce Management
            </div>
            <h2 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-5xl text-center lg:text-left">
              HRMS & Granular Access Matrix
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A] text-center lg:text-left">
              Maintain complete employee profiles with intelligent resume parsing, invitation management, salary structures, and granular module-level permissions (Create, View, Edit, Delete).
            </p>
            <div className="mt-2 sm:mt-4 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 justify-items-start lg:justify-items-start mx-auto lg:mx-0 w-fit lg:w-full">
              <ListItem text="Employee Directory" />
              <ListItem text="Smart Resume Parsing" />
              <ListItem text="Role-Based CRUD Matrix" />
              <ListItem text="Salary & Payroll Structure" />
              <ListItem text="Device-Level Security" />
              <ListItem text="Onboarding Invitations" />
            </div>
          </div>
          <MockupFrame imageUrl="/FeaturesSection/fs_hr.jpg" />
        </div>

        {/* --- Feature 3: Task & Onsite Management --- */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24">
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:max-w-[450px] w-full">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B04C5] uppercase tracking-wider">
              Operations & Field Work
            </div>
            <h2 className="mb-2 font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-5xl text-center lg:text-left">
              Task, Meeting & Field Tracking
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              {taskTabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTaskTab(index)}
                  className={`cursor-pointer transition-all w-full ${
                    activeTaskTab === index
                      ? "flex flex-col gap-2 rounded-2xl border border-[#5B04C5]/30 bg-[#5B04C5]/5 p-4 sm:p-5 shadow-xs"
                      : "flex items-center rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {activeTaskTab === index && (
                      <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center shrink-0">
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#5B04C5]" />
                      </div>
                    )}
                    <h4 className="font-['Inter'] text-base sm:text-lg font-bold text-[#0A0B10]">
                      {tab.title}
                    </h4>
                  </div>
                  {activeTaskTab === index && (
                    <p className="ml-7 sm:ml-8 font-['Inter'] text-sm sm:text-base text-[#7A7A7A]">
                      {tab.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <MockupFrame imageUrl={taskTabs[activeTaskTab].image} />
        </div>

        {/* --- Feature 4: Digital vCard & QR Hub --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 xl:gap-24">
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:max-w-[576px] w-full">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B04C5] uppercase tracking-wider">
              Identity & Public Presence
            </div>
            <h2 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-5xl text-center lg:text-left">
              Digital Business Cards & QR Hub
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A] text-center lg:text-left">
              Equip your brand with modern digital NFC and Web business cards. Enable instant vCard contact downloads, showcase public services, collect verified client reviews, and generate branded QR codes.
            </p>
            <div className="mt-2 sm:mt-4 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 justify-items-start lg:justify-items-start mx-auto lg:mx-0 w-fit lg:w-full">
              <ListItem text="Interactive Digital vCards" />
              <ListItem text="Instant Contact Save" />
              <ListItem text="Custom Brand QR Generator" />
              <ListItem text="Verified Reviews & Ratings" />
              <ListItem text="Service Directory Catalog" />
              <ListItem text="Direct Customer Enquiries" />
            </div>
          </div>
          <MockupFrame imageUrl="/FeaturesSection/fs_document.jpg" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
