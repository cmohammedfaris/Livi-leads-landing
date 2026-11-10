import React from "react";
import Link from "next/link";
import { openPreRegistrationModal } from "@/utils/tracking";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F0F0F0] px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 isolate flex items-center">
      {/* Figure - Background Gradient */}
      <div
        className="absolute top-0 left-1/2 -z-10 h-full min-h-[30rem] w-full max-w-7xl -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(27, 68, 254, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
        {/* Left Content Column */}
        <div className="z-10 flex w-full max-w-4xl flex-col justify-center gap-6 sm:gap-8 py-2 lg:py-4">
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            {/* Badge: Your Business Simplified */}
            <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
              <div className="h-2 w-2 rounded-full bg-[radial-gradient(88%_75%_at_50%_50%,#1B44FE_0%,#5375FE_100%)]" />
              <span className="font-sans text-xs sm:text-sm font-semibold leading-5 text-gray-900">
                Your Business Simplified
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-sans max-w-3xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900">
              Work Smarter. <br className="hidden md:block" />
              No Training Needed.
            </h1>

            {/* Subtext Paragraphs */}
            <div className="font-sans flex flex-col gap-3 sm:gap-4 text-base sm:text-lg leading-6 sm:leading-7 text-gray-500">
              <p className="max-w-xl lg:max-w-4xl mx-auto lg:mx-0">
                Stop the chaos of chat applications, emails, and folders to
                search for the documents. Livi Leads brings your documents,
                tasks, and renewals into one clean, simple platform.
              </p>
              <p className="max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
                No clutter. No confusion. Pre-register for priority access.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Primary Button */}
            <button
              type="button"
              onClick={openPreRegistrationModal}
              className="flex h-14 w-full sm:w-auto min-w-36 px-6 items-center justify-center rounded-xl border border-white/50 bg-[radial-gradient(88%_75%_at_50%_50%,#3B34FA_37.45%,#5B04C5_100%)] shadow-md transition-all hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <span className="font-sans text-base font-semibold text-white">
                Pre-Register Now
              </span>
            </button>

            {/* Secondary Button */}
            <Link
              href="/features"
              className="flex h-14 w-full sm:w-auto min-w-36 px-6 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 shadow-sm transition-all hover:bg-primary/10 active:scale-95 cursor-pointer"
            >
              <span className="font-sans text-base font-semibold text-primary">
                See Features
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Skewed Dashboard Mockup */}
        <div className="relative w-full max-w-md lg:max-w-full lg:w-1/2 h-72 sm:h-96 lg:h-[32rem] mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div
            className="relative h-full w-[120%] sm:w-[140%] origin-left sm:origin-center lg:origin-left lg:w-[50rem] scale-90 sm:scale-100"
            style={{
              transform: "matrix(1, 0.05, -0.14, 0.99, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-2 ring-1 ring-black/5 shadow-2xl">
              {/* Crisp High-Res Image */}
              <img
                src="/hero section/hero_background.jpg"
                alt="Dashboard Preview"
                className="h-full w-full rounded-t-xl sm:rounded-t-2xl object-cover object-top"
                loading="eager"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>

            {/* Floating Image 1 */}
            <div className="absolute bottom-[20%] -left-[5%] z-40 hidden w-1/3 aspect-[224/130] rotate-[20deg] rounded-xl bg-white p-1.5 shadow-xl sm:block lg:-left-[10%] border border-slate-100">
              <img
                src="/hero section/hero_sm1.png"
                alt="Task Preview"
                className="h-full w-full rounded-lg object-contain"
                loading="eager"
              />
            </div>

            {/* Floating Image 2 */}
            <div
              style={{
                transform: "matrix(1, -0.05, 0.14, 0.99, 0, 0)",
              }}
              className="absolute -bottom-[0%] -left-[18%] -rotate-[1deg] z-30 hidden w-1/3 aspect-[224/120] rounded-xl bg-white p-1.5 shadow-xl sm:block lg:-left-[20%] border border-slate-100"
            >
              <img
                src="/hero section/hero_sm2.png"
                alt="Status Preview"
                className="h-full w-full rounded-lg object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
