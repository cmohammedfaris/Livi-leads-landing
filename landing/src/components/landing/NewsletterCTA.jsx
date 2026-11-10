import React from "react";

// 1. Define the badge right here so React knows what it is
const STAR_ICON = "/starDot.png";

const SectionBadge = ({ text }) => (
  <div className="flex w-fit items-center gap-2 rounded-full border border-slate-100 bg-white px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105">
    <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
    <span className="font-['Inter'] text-xs font-semibold tracking-wide text-slate-900 sm:text-sm">
      {text}
    </span>
  </div>
);

// 2. Your Newsletter Component
const NewsletterCTA = () => {
  return (
    <section className="flex w-full items-center justify-center bg-transparent px-4 sm:px-6 py-12 md:px-8 md:py-24">
      {/* Main Card Container */}
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white px-4 sm:px-6 py-12 md:py-20 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.03)] ring-[3px] sm:ring-[5px] ring-[#F8F8FA]">
        {/* Decorative Background: Dotted Pattern with Fade Mask */}
        <div
          className="absolute inset-0 z-0 opacity-[5%] pointer-events-none"
          style={{
            backgroundImage: "url('/starDot.png')",
            backgroundSize: "10px 10px",
            backgroundRepeat: "space",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
          }}
        />

        {/* Decorative Background: Right Side Purple Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(78.89deg, rgba(255, 255, 255, 0) 56.48%, #5B04C5 98.08%)",
          }}
        />
        {/* Mobile/Tablet Gradient */}
        <div
          className="absolute inset-0 z-0 pointer-events-none md:hidden block"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 56.48%, #5B04C5 150%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex w-full max-w-[840px] flex-col items-center gap-4 sm:gap-6 text-center">
          {/* Badge is now successfully referenced! */}
          <SectionBadge text="What's Next" />

          {/* Heading */}
          <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0A0B10] md:text-[48px] md:leading-[56px]">
            Document management is just the beginning.
          </h2>

          {/* Subheading */}
          <p className="max-w-[840px] font-['Inter'] text-sm sm:text-base leading-relaxed sm:leading-6 text-[#7A7A7A]">
            We’re continuously introducing new features to help businesses
            manage operations more efficiently through simple and intuitive
            workflows. More updates are coming soon - stay tuned.
          </p>

          {/* Email Subscription Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex w-full max-w-sm sm:max-w-[504px] flex-col gap-3 sm:flex-row sm:gap-4"
          >
            {/* Input Field */}
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="h-12 w-full flex-1 rounded-xl bg-[#E5E7EB] px-5 font-['Inter'] text-sm text-[#0A0B10] outline-none transition-all placeholder:text-[#ABABAB] focus:ring-2 focus:ring-[#5B04C5]"
              required
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-[#5B04C5] px-6 transition-colors hover:bg-[#524cde] active:scale-95"
            >
              <span className="font-['Inter'] text-base font-semibold text-white whitespace-nowrap">
                Notify me
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
