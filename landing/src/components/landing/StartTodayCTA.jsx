import React from "react";
import { openPreRegistrationModal } from "@/utils/tracking";

const StartTodayCTA = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#ECE6F9] px-6 py-12 md:py-16">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
        {/* Text Group */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0F121D] md:text-[40px]">
            Start Today
          </h2>
          <p className="max-w-[604px] font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A] md:text-lg">
            Stop juggling tools. Start running your business smoothly.
          </p>
        </div>

        {/* Action Group */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Glowing Gradient Button */}
          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="group flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 rounded-xl border border-white/50 bg-[radial-gradient(88%_75%_at_50%_50%,#3B34FA_37.45%,#5B04C5_100%)] px-8 shadow-[0px_7px_15.4px_-1.25px_rgba(28,70,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0px_10px_20px_-2px_rgba(28,70,255,0.45)] active:scale-95 cursor-pointer"
          >
            <span className="font-['Inter'] text-base font-semibold text-white">
              Pre-Register for Early Access
            </span>
            {/* Arrow Icon */}
            <svg
              className="h-4 w-4 text-white transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>

          {/* Microcopy */}
          <p className="font-['Inter'] text-xs sm:text-sm text-[#46484D]">
            Limited launch queue. Reserve your VIP spot in 30 seconds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartTodayCTA;
