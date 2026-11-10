import React from "react";

const FeaturesGrid = () => {
  const featureData = [
    {
      title: "Sales Invoices & Multi-Mode Receipts",
      description:
        "Create Tax & Proforma Invoices, record Cash collection by employees, track Cheque clearance workflows with proof uploads, and auto-settle balances.",
      badge: "Invoicing & Payments",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7H17M7 11H17M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Business Expenses & Multi-Currency",
      description:
        "Track vendor expenses with receipt proofs, monitor payment modes, view category breakdowns, and handle international currencies (AED, INR, USD).",
      badge: "Accounts & Finance",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "HRMS & Granular Permission Matrix",
      description:
        "Manage team profiles, smart resume parsing, salary breakdowns, employee invitations, and custom Create/Read/Edit/Delete permissions per module.",
      badge: "Human Resources",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Task, Meeting & Onsite Field Tracking",
      description:
        "Organize General Tasks, schedule online/offline Meetings, and assign Onsite Field Work with live location logging, items list, and status updates.",
      badge: "Operations & Field",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Digital Business Cards & Custom QR Hub",
      description:
        "Create shareable NFC/Web digital business cards, enable instant vCard contact downloads, and generate custom branded QR codes with your logo.",
      badge: "Networking & Identity",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 14H17V17H14V14Z" fill="currentColor"/>
          <path d="M18 18H21V21H18V18Z" fill="currentColor"/>
          <path d="M14 19H17V21H14V19Z" fill="currentColor"/>
          <path d="M19 14H21V17H19V14Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: "100% Offline-First PWA & Android App",
      description:
        "Never get stuck with loading skeletons. Local IndexedDB caching keeps your invoices, receipts, and tasks accessible even with zero internet connectivity.",
      badge: "PWA & Mobile Native",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative flex w-full flex-col items-center justify-center bg-[#F8F9FB] px-4 sm:px-6 py-12 lg:py-24 isolate overflow-hidden">
      {/* Background Element */}
      <div className="absolute inset-0 -z-10 bg-[url('/FeaturesGrid_bg.png')] bg-cover bg-center opacity-40" />

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 sm:gap-12">
        {/* Header Text Group */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 shadow-sm ring-1 ring-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#5B04C5] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#0A0B10]">
              Complete Livi Leads Platform Capabilities
            </span>
          </div>
          <h2 className="max-w-[894px] font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-5xl lg:text-[44px] lg:leading-[1.2]">
            Everything You Need To Run <br className="hidden sm:inline" />
            Your Enterprise Operations
          </h2>
          <p className="max-w-[660px] font-['Inter'] text-sm sm:text-base leading-6 text-gray-600 px-2">
            Livi Leads unifies professional invoicing, multi-mode receipt collections, employee HR with granular permissions, field tasks, and offline PWA capability in one platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between gap-6 rounded-[24px] bg-white p-6 sm:p-7 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-slate-100"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#5B04C5]/10 text-[#5B04C5] flex items-center justify-center group-hover:bg-[#5B04C5] group-hover:text-white group-hover:shadow-md transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#5B04C5] bg-[#5B04C5]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#0A0B10] mt-2">
                  {card.title}
                </h3>
                <p className="font-['Inter'] text-sm leading-relaxed text-[#7A7A7A]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
