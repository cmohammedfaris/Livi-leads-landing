import React from "react";

const WatchDemoSection = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-4 sm:px-6 py-12 lg:py-20">
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:flex-row lg:gap-16">
        {/* Left Side: Video/Demo Thumbnail */}
        <div className="relative flex w-full flex-1 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#DEDEDE] bg-[#F8F9FA] shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA] aspect-video lg:aspect-auto lg:max-w-[706px] lg:h-[420px]">
          {/* Mockup Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000')`,
            }}
          />

          {/* Overlay to mimic the white fading seen in the reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group flex h-12 w-20 sm:h-16 sm:w-24 items-center justify-center rounded-xl sm:rounded-2xl bg-[#F05138] shadow-lg transition-transform hover:scale-105 hover:bg-[#d9422b]">
              <svg
                className="ml-1 h-6 w-6 sm:h-8 sm:w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left gap-5 sm:gap-6 lg:max-w-[526px]">
          {/* Gradient Badge */}
          <div className="inline-flex h-8 items-center justify-center rounded-full bg-[radial-gradient(88%_75%_at_50%_50%,#3B34FA_37.45%,#5B04C5_83.41%)] px-4 shadow-sm">
            <span className="font-['Inter'] text-xs font-semibold tracking-wide text-white">
              Watch Demo
            </span>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A]">
              Explore how Livi Leads simplifies vendor operations across Web and
              Mobile.
            </p>
            <p className="font-['Inter'] text-sm sm:text-base leading-relaxed text-[#7A7A7A]">
              Watch a quick walkthrough of the dashboard, task management,
              document requests, HR system, and sales tracking - all in one
              platform.
            </p>
          </div>

          {/* Call to Action Link */}
          <a
            href="#demo"
            className="group mt-2 flex cursor-pointer items-center justify-center lg:justify-start gap-2 py-2 transition-colors hover:text-[#3B34FA]"
          >
            <span className="font-['Inter'] text-sm sm:text-base font-semibold text-[#0A0B10] group-hover:text-[#3B34FA]">
              See How It Works
            </span>
            {/* Arrow Icon */}
            <svg
              className="h-4 w-4 text-[#0A0B10] transition-transform group-hover:translate-x-1 group-hover:text-[#3B34FA]"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default WatchDemoSection;
