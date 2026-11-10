import React from "react";

const ComparisonSection = () => {
  // Reusable checkmark icon component mimicking the blue SVG in the design
  const BlueCheckIcon = () => (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B04C5]">
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

  const beforeItems = [
    "Scattered spreadsheets, untracked cash receipts & manual calculations",
    "Unrestricted team access risking critical financial & customer data",
    "Apps freezing and stuck on loading skeletons when network drops",
  ];

  const afterItems = [
    "Tax Invoices, Cash & Cheque Receipts with auto balance settlement",
    "Precise role-based CRUD permissions matrix for every team member",
    "100% Offline-First PWA running instantly with local device caching",
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center bg-transparent px-4 sm:px-6 py-8 md:py-16">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 md:gap-10">
        {/* Section Badge */}
        <div className="inline-flex h-8 items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-2.5 pr-3 shadow-xs">
          <div className="h-2 w-2 rounded-full bg-[#5B04C5]" />
          <span className="font-['Inter'] text-xs sm:text-sm font-bold text-[#0A0B10]">
            Why Businesses Choose Livi Leads
          </span>
        </div>

        {/* Comparison Card */}
        <div className="flex w-full flex-col gap-10 rounded-[24px] bg-white p-6 sm:p-8 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA] md:flex-row md:gap-10 lg:gap-16 lg:px-12 lg:py-10">
          {/* "Before" Column */}
          <div className="flex flex-1 flex-col gap-5 sm:gap-6">
            <h3 className="font-['Inter'] text-lg sm:text-xl font-semibold text-[#0A0B10]">
              Before:
            </h3>
            <ul className="flex flex-col gap-4">
              {beforeItems.map((text, index) => (
                <li key={`before-${index}`} className="flex items-center gap-3">
                  <BlueCheckIcon />
                  <span className="font-['Inter'] text-sm sm:text-base font-medium text-[#0A0B10] leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Horizontal Divider for Mobile / Vertical for Desktop */}
          <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-slate-100" />

          {/* "After" Column */}
          <div className="flex flex-1 flex-col gap-5 sm:gap-6">
            <h3 className="font-['Inter'] text-lg sm:text-xl font-semibold text-[#0A0B10]">
              After:
            </h3>
            <ul className="flex flex-col gap-4">
              {afterItems.map((text, index) => (
                <li key={`after-${index}`} className="flex items-center gap-3">
                  <BlueCheckIcon />
                  <span className="font-['Inter'] text-sm sm:text-base font-medium text-[#0A0B10] leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
