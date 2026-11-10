"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function CTACard({
  title = (
    <>
      Every Great Business Relationship <br className="hidden sm:inline" />
      Starts with a Connection.
    </>
  ),
  subtitle = "Make that connection count with Livi Leads.",
  primaryText = "Get Started Today",
  primaryHref = null,
  onPrimaryClick = null,
  secondaryText = "Find a Service",
  secondaryHref = "/services",
  className = "",
  noPadding = false,
}) {
  const handlePrimary = (e) => {
    if (onPrimaryClick) {
      e.preventDefault();
      onPrimaryClick();
    } else if (!primaryHref) {
      e.preventDefault();
      openPreRegistrationModal();
    }
  };

  const hasPx0 = className.includes("px-0") || noPadding;
  const paddingClass = hasPx0 ? "" : "px-4 sm:px-6";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`w-full max-w-7xl mx-auto mb-10 sm:mb-16 relative z-10 ${paddingClass} ${className}`}
    >
      <div className="relative rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 lg:p-16 bg-gradient-to-r from-[#5B04C5] via-[#4B03A4] to-[#7974F5] shadow-[0_20px_50px_-15px_rgba(91, 4, 197,0.35)] overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Soft Background Accents */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        {/* Text Area */}
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-wider justify-center lg:justify-start">
            <span className="h-[1px] w-5 bg-white/70" />
            <span>CONNECT. MANAGE. GROW.</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] break-words">
            {title}
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
          {primaryHref ? (
            <Link
              href={primaryHref}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#5B04C5] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
            >
              <span>{primaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={handlePrimary}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#5B04C5] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 text-center"
            >
              <span>{primaryText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {secondaryText && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/40 font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center text-center active:scale-95"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}