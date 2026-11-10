import React from "react";

const AppDownloadCTA = () => {
  return (
    <section className="flex w-full items-center justify-center bg-white px-6 py-16 lg:py-24">
      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Side: Phone Mockup */}
        <div className="relative h-[288px] w-[356px] shrink-0 overflow-hidden">
          {/* 746px Phone Container perfectly centered */}
          <div className="absolute left-1/2 top-0 h-[746px] w-[356px] -translate-x-1/2">
            {/* Phone Screen Background w/ blur */}
            <img
              src="/phone_bg.png"
              alt="App Background"
              className="absolute left-[14px] top-[10px] h-[720px] w-[328px] rounded-[50px] object-cover blur-[4px]"
            />

            {/* Inner Logo Circle */}
            <img
              src="/images/livileads_logo.png"
              alt="Livi Leads"
              className="absolute left-[39px] top-[78px] h-[278px] w-[278px] rounded-full object-contain shadow-2xl"
            />

            {/* Phone Frame Overlay */}
            <img
              src="/phone_frame.png"
              alt="Phone Mockup Frame"
              className="absolute inset-0 h-[746px] w-[356px] pointer-events-none"
            />
          </div>
        </div>

        {/* Right Side: Download Card */}
        <div className="flex shrink-0 items-center rounded-[32px] border border-black/10 p-2 lg:h-[288px] lg:w-[442px]">
          {/* Inner Card with complex shadow */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-[24px] bg-white p-6 text-center shadow-[0px_0px_8px_rgba(0,0,0,0.08),0px_10px_10px_-2px_rgba(0,0,0,0.08),0px_20px_20px_-4px_rgba(0,0,0,0.06),0px_40px_40px_-3px_rgba(0,0,0,0.04)] sm:gap-[32px] sm:p-6 lg:h-[272px] lg:w-[426px]">
            {/* Text Group */}
            <div className="flex max-w-[378px] flex-col items-center gap-[16px]">
              <h2 className="font-['Inter'] text-3xl font-semibold leading-tight text-[#0A0B10] sm:text-[40px] sm:leading-[48px]">
                Start Your Livi Leads Journey Today
              </h2>
              <p className="font-['Inter'] text-base leading-[24px] text-[#7A7A7A]">
                Available on iOS and Android for seamless access anytime,
                anywhere.
              </p>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-[24px]">
              {/* App Store Button Mimic */}
              <button className="flex h-[48px] w-[144px] shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-3 transition-transform hover:scale-105">
                <svg
                  viewBox="0 0 384 512"
                  className="h-6 w-6 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="flex flex-col items-start justify-center text-left">
                  <span className="text-[10px] leading-tight text-white/80">
                    Download on the
                  </span>
                  <span className="font-sans text-sm font-semibold leading-tight text-white">
                    App Store
                  </span>
                </div>
              </button>

              {/* Google Play Button Mimic */}
              <button className="flex h-[48px] w-[144px] shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-3 transition-transform hover:scale-105">
                <svg
                  viewBox="0 0 512 512"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#4caf50"
                    d="M35.3 32.4c-11.6 11.2-18 28.5-18 50.8v345.5c0 22.3 6.4 39.7 18 50.8l20.4 19.4 200.7-203.2v-19.6L55.7 13 35.3 32.4z"
                  />
                  <path
                    fill="#ffeb3b"
                    d="M344.8 351.9l-88.4-89.6v-12.7l88.4-89.6 28.6 16.3 80.4 45.6c23 13.1 23 34.5 0 47.7l-80.4 45.6-28.6 16.3z"
                  />
                  <path
                    fill="#f44336"
                    d="M256.4 262.3l88.4 89.6-116.3 66L55.7 499c-17 16.3-43.9 6.8-43.9-16.7L256.4 262.3z"
                  />
                  <path
                    fill="#2196f3"
                    d="M256.4 249.7L11.8 29.7C11.8 6.2 38.7-3.3 55.7 13l172.8 81.1 116.3 66-88.4 89.6z"
                  />
                </svg>
                <div className="flex flex-col items-start justify-center text-left">
                  <span className="text-[10px] leading-tight text-white/80 uppercase">
                    Get it on
                  </span>
                  <span className="font-sans text-sm font-semibold leading-tight text-white">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
