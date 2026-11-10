import React from "react";

const MobileAppSection = () => {
  // Reusable Feature Pill Component
  const FeaturePill = ({ text, icon }) => (
    <div className="flex w-fit items-center gap-2 rounded-full border border-[#DEDEDE] bg-white px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50">
      <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center shrink-0">
        {icon}
      </div>
      <span className="font-['Inter'] text-sm sm:text-[15px] font-medium text-[#0A0B10]">
        {text}
      </span>
    </div>
  );

  // Custom SVGs mapped to the aesthetic of the design
  const icons = {
    dashboard: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="3" width="8" height="8" rx="2" fill="#FF808C" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="#78EB7B" />
        <rect x="3" y="13" width="8" height="8" rx="2" fill="#FFEF5E" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="#8FBFFA" />
      </svg>
    ),
    document: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
          fill="#8FBFFA"
        />
        <path d="M14 2V8H20" fill="#2859C5" />
        <circle cx="10" cy="14" r="3" fill="#FFFFFF" />
        <path
          d="M12 16L15 19"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    task: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#D7E0FF" />
        <path
          d="M8 12L11 15L16 9"
          stroke="#4147D5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    hr: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6H15V4C15 2.89543 14.1046 2 13 2H11C9.89543 2 9 2.89543 9 4V6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
          fill="#8FBFFA"
        />
        <path d="M15 6V4H9V6" fill="#2859C5" />
      </svg>
    ),
  };

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 sm:px-6 py-12 lg:py-24">
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left Side: Mockup Composition (Sky background + Floating Elements) */}
        <div className="relative flex w-full flex-1 overflow-hidden rounded-[24px] sm:rounded-[32px] bg-slate-100 min-h-[350px] sm:min-h-[474px] max-w-full lg:max-w-[694px]">
          {/* Background Sky Image */}
          <img
            src="/MobileAppSection/MobileAppSection_bg.png"
            alt="Background"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />

          {/* Wrapper to scale and position everything nicely on mobile */}
          <div className="absolute inset-0 w-full h-full transform scale-75 sm:scale-90 md:scale-100 origin-center lg:origin-right">
            {/* image 43 - Central Phone Mockup */}
            <img
              src="/MobileAppSection/MobileAppSection_mobile.png"
              alt="Mobile App"
              className="absolute z-10 drop-shadow-2xl"
              style={{
                width: "301.5px",
                left: "calc(65% - 301.5px/2 + 101.75px)",
                top: "10.38%",
                bottom: "-55.65%",
                transform: "rotate(-22deg)",
              }}
            />

            {/* Vectors */}
            <div
              className="absolute z-20 flex flex-col items-start"
              style={{
                gap: "36px",
                width: "298.6px",
                height: "572.59px",
                left: "20px",
                top: "calc(55% - 572.59px/2 + 1.62px)",
              }}
            >
              {/* Frame 1984078005 - image 39 */}
              <div
                className="flex flex-col items-start"
                style={{
                  width: "296.4px",
                  height: "177.09px",
                  padding: "0px 24px",
                  gap: "4px",
                }}
              >
                <img
                  src="/MobileAppSection/MobileAppSection_card1.png"
                  alt="Stats Card"
                  className="drop-shadow-xl"
                  style={{
                    width: "224px",
                    height: "120px",
                    transform: "rotate(-16deg)",
                  }}
                />
              </div>

              {/* Frame 1984078006 - image 41 */}
              <div
                className="flex flex-col items-center justify-center"
                style={{
                  width: "298.6px",
                  height: "186.71px",
                  gap: "4px",
                }}
              >
                <img
                  src="/MobileAppSection/MobileAppSection_card2.png"
                  alt="Notification Card"
                  className="drop-shadow-xl"
                  style={{
                    width: "224px",
                    height: "130px",
                    transform: "rotate(12deg)",
                  }}
                />
              </div>

              {/* Frame 1984078004 - image 42 */}
              <div
                className="flex flex-col items-start"
                style={{
                  width: "298.6px",
                  height: "184.78px",
                  padding: "0px 24px",
                  gap: "4px",
                }}
              >
                <img
                  src="/MobileAppSection/MobileAppSection_card3.png"
                  alt="Task Card"
                  className="drop-shadow-xl"
                  style={{
                    width: "224px",
                    height: "128px",
                    transform: "rotate(-16deg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Features Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left gap-6 sm:gap-8 lg:max-w-[538px] lg:py-10">
          <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5">
            {/* Split Pill Badge */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pr-4 shadow-xs">
              <div className="flex items-center justify-center rounded-full bg-[#5B04C5] px-3 py-1">
                <span className="font-['Inter'] text-[10px] sm:text-[12px] font-bold text-white">
                  Mobile App & PWA
                </span>
              </div>
              <span className="font-['Inter'] text-[10px] sm:text-[12px] font-semibold text-[#0A0B10]">
                ⚡ 100% Offline-First
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold leading-tight text-[#0A0B10] md:text-[44px] md:leading-[52px]">
              Livi Leads Mobile & Android App
            </h2>

            {/* Subtext */}
            <p className="font-['Inter'] text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
              Manage your business on the move. Even when your mobile data drops in elevators or remote sites, our IndexedDB local cache keeps your invoices, receipts, and tasks running instantly.
            </p>
          </div>

          {/* Feature Pills Group */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mt-2">
            <FeaturePill
              icon={<span className="text-sm">⚡</span>}
              text="Offline-First Local Storage"
            />
            <FeaturePill
              icon={<span className="text-sm">🧾</span>}
              text="Invoices & Cash Receipts"
            />
            <FeaturePill
              icon={<span className="text-sm">📍</span>}
              text="Onsite Tasks & GPS Logs"
            />
            <FeaturePill
              icon={<span className="text-sm">👥</span>}
              text="HRMS & Permissions"
            />
            <FeaturePill
              icon={<span className="text-sm">📇</span>}
              text="Digital Business Cards"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
