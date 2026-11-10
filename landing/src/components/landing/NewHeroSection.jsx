"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function NewHeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.defaultMuted = true;
      v.muted = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("autoplay", "");
      v.setAttribute("loop", "");
      
      const tryPlay = () => {
        const playPromise = v.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      };

      tryPlay();
      v.addEventListener("loadedmetadata", tryPlay);
      v.addEventListener("canplay", tryPlay);

      return () => {
        v.removeEventListener("loadedmetadata", tryPlay);
        v.removeEventListener("canplay", tryPlay);
      };
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center py-20 sm:py-28 lg:py-36">
      {/* Full-Bleed Video Background (z-0 ensures it stays above the section bg, but behind z-10 text) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero section/hero_dark.jpg"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
        >
          <source src="/hero_video_faststart.mp4" type="video/mp4" />
          <source src="/hero_video.mp4" type="video/mp4" />
          <source src="/hero section/hero_video.mp4" type="video/mp4" />
        </video>

        {/* Subtle, uniform dark tint so video remains vibrant and clear without any gradient shade */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content on Top of the Video (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Headline (H1): Exact from Master Document */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.16] sm:leading-[1.12] mb-6 max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] break-words"
        >
          Your Business Deserves to Be Found.{" "}
          <span className="text-primary block mt-1 sm:mt-2">
            Your Opportunities Deserve to Grow.
          </span>
        </motion.h1>

        {/* Sub-text: Exact from Master Document */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 max-w-2xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          Running a business is about more than finding customers. It&apos;s about building relationships, managing opportunities and keeping everything moving forward.
        </motion.p>

        {/* Supporting line: Exact from Master Document */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-white text-sm sm:text-base md:text-lg font-semibold leading-relaxed mb-10 max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          Livi Leads brings customers, businesses and essential business operations together in one connected platform.
        </motion.p>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="w-full sm:w-auto btn-primary-gradient px-6 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white shadow-xl shadow-[#5B04C5]/50 hover:shadow-[#5B04C5]/70 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2.5 text-center"
          >
            <span>List Your Business – It&apos;s Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/35 hover:border-white/60 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer shadow-lg inline-flex items-center justify-center gap-2.5 text-center"
          >
            <Search className="w-4 h-4 text-white" />
            <span>Find a Service</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
