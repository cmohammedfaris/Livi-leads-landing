import React from "react";

const CTA = () => {
  // Common Checkmark Icon component for the list
  const BlueCheck = () => (
    <div className="flex shrink-0 h-4 w-4 items-center justify-center bg-[#1B44FE] rounded-full p-0.5">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <section className="flex w-full flex-col items-center justify-center bg-transparent px-4 sm:px-6 py-8 lg:px-20">
      {/* Main Glassmorphism Card */}
      <div className="flex w-full max-w-7xl flex-col items-center gap-10 sm:gap-12 rounded-[24px] sm:rounded-[40px] bg-white p-6 sm:p-8 md:p-12 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03),0px_0px_0px_5px_#F8F8FA] backdrop-blur-[3px]">
        {/* Header Text Container */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
          {/* Badge: The Problem */}
          <div className="flex h-8 items-center justify-center rounded-full bg-[radial-gradient(88%_75%_at_50%_50%,#3B34FA_37.45%,#5B04C5_100%)] px-4 shadow-sm">
            <span className="font-['Inter'] text-xs sm:text-sm font-semibold text-white">
              The Problem
            </span>
          </div>

          {/* Headline */}
          <h2 className="max-w-[894px] font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0A0B10] md:text-5xl">
            Too many tools. Too much clutter.
          </h2>
        </div>

        {/* Content Row: Tools vs. Consequences */}
        <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left Column: Metrics Card (The "You Use" list) */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end">
            <div className="flex w-full max-w-md sm:max-w-[344px] flex-col gap-4 p-6 sm:p-8 rounded-3xl bg-[#F6F4FF] lg:h-[264px] justify-center">
              <span className="font-['Inter'] text-sm sm:text-base font-semibold text-[#0A0B10]">
                You use:
              </span>
              <div className="flex flex-col gap-3">
                {[
                  "Chat apps for client conversations",
                  "Emails for documents",
                  "Spreadsheets for tracking work",
                  "Sticky notes for renewals",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <BlueCheck />
                    <span className="font-['Inter'] text-sm sm:text-base font-medium text-[#0A0B10] leading-snug">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer: The Result */}
            <div className="mt-4 flex w-full max-w-md sm:max-w-[344px] flex-col items-center">
              <div className="flex h-10 w-full items-center justify-center rounded-full border border-[#E2E2E2] bg-white px-4">
                <span className="font-['Inter'] text-xs sm:text-sm text-[#7A7A7A] text-center">
                  Your business runs on chaos.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Loss Aversion Pills */}
          <div className="flex w-full lg:w-auto flex-col gap-4 sm:gap-6 md:max-w-[523px]">
            {/* Top Row of Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex h-12 w-full sm:w-auto items-center gap-3 rounded-full border border-[#E4E2E2] bg-white px-5 py-3 shadow-[0px_1px_4.6px_-0.75px_rgba(117,116,116,0.21)]">
                <BlueCheck />
                <span className="whitespace-nowrap font-['Inter'] text-sm sm:text-base font-medium text-[#1A1615]">
                  Documents get lost.
                </span>
              </div>
              <div className="flex h-12 w-full sm:w-auto items-center gap-3 rounded-full border border-[#E4E2E2] bg-white px-5 py-3 shadow-[0px_1px_4.6px_-0.75px_rgba(117,116,116,0.21)]">
                <BlueCheck />
                <span className="whitespace-nowrap font-['Inter'] text-sm sm:text-base font-medium text-[#1A1615]">
                  Deadlines get missed.
                </span>
              </div>
            </div>

            {/* Bottom Row of Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex h-12 w-full sm:w-auto items-center gap-3 rounded-full border border-[#E4E2E2] bg-white px-5 py-3 shadow-[0px_1px_4.6px_-0.75px_rgba(117,116,116,0.21)]">
                <BlueCheck />
                <span className="whitespace-nowrap font-['Inter'] text-sm sm:text-base font-medium text-[#1A1615]">
                  Clients get frustrated.
                </span>
              </div>
              <div className="flex h-12 w-full sm:w-auto items-center gap-3 rounded-full border border-[#E4E2E2] bg-white px-5 py-3 shadow-[0px_1px_4.6px_-0.75px_rgba(117,116,116,0.21)]">
                <BlueCheck />
                <span className="whitespace-nowrap font-['Inter'] text-sm sm:text-base font-medium text-[#1A1615]">
                  You waste hours searching.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
