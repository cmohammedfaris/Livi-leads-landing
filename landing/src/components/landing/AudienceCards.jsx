"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  User,
  ArrowRight,
  Check,
} from "lucide-react";

export default function AudienceCards() {
  const businessPoints = [
    "Business listing and visibility",
    "Customer enquiries and lead management",
    "Quotations and invoicing",
    "Inventory and operational management",
    "Team and HR management",
    "Tasks and document management",
  ];

  const customerPoints = [
    "Verified business directory & vCards",
    "Direct enquiry submission to vendors",
    "Quotation receiving & tracking",
    "Secure document hub & verification",
    "Task tracking & meeting scheduling",
    "Live dashboard & real-time notifications",
  ];

  return (
    <section id="solutions" className="relative z-10 px-4 sm:px-6 py-10 sm:py-14 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
            TAILORED FEATURES
          </span>
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
        </div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight"
        >
          One Platform. Built for Both <br className="hidden sm:inline" />
          Businesses and Customers.
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Whether you&apos;re managing and growing your business operations or searching for trusted service providers, Livi Leads brings both worlds together in one connected environment.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* 3.4 For Businesses Card */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
          className="relative rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-[#5B04C5]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-[10%] -right-[5%] w-[65%] h-[75%] bg-[#EEF2FF] blur-[70px] pointer-events-none rounded-full opacity-80" />

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header Icon & Tag */}
            <div className="flex items-center justify-start gap-3.5 mb-6 pr-28 sm:pr-40">
              <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-indigo-50 border border-indigo-100 text-[#5B04C5] flex items-center justify-center shadow-2xs">
                <Briefcase className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-200/60 text-[#5B04C5]">
                For Businesses
              </span>
            </div>

            {/* Heading & Intro */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 break-words text-left pr-24 sm:pr-32 xl:pr-36">
              Manage and Grow Your Business
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal text-left">
              Organise operations, manage leads, and connect with customers in one place.
            </p>

            {/* Checklist with Tick Icons */}
            <ul className="space-y-3 mb-8 flex-1 w-full">
              {businessPoints.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5B04C5]/10 text-[#5B04C5] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-[14px] font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/business"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#5B04C5] hover:bg-[#4B03A4] shadow-md shadow-[#5B04C5]/25 hover:shadow-lg transition-all active:scale-95"
              >
                <span>Discover Business Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Humanised Business Growth Illustration (Transparent, No Background) */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-6 pointer-events-none select-none z-10 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/business_illustration.png"
              alt="Business Growth Illustration"
              className="w-24 h-24 sm:w-32 sm:h-32 xl:w-36 xl:h-36 object-contain drop-shadow-md"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 3.5 For Customers Card */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
          className="relative rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.06)] hover:shadow-xl hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -bottom-[10%] -left-[5%] w-[65%] h-[75%] bg-[#FAF5FF] blur-[70px] pointer-events-none rounded-full opacity-80" />

          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header Icon & Tag */}
            <div className="flex items-center justify-start gap-3.5 mb-6 pr-24 sm:pr-32">
              <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shadow-2xs">
                <User className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-purple-600">
                For Customers
              </span>
            </div>

            {/* Heading & Intro */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 break-words text-left pr-24 sm:pr-32 xl:pr-36">
              Find and Book Trusted Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal text-left">
              Discover verified providers, manage enquiries, and track your services in one place.
            </p>

            {/* Checklist with Tick Icons */}
            <ul className="space-y-3 mb-8 flex-1 w-full">
              {customerPoints.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-[14px] font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/customer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 shadow-2xs hover:shadow transition-all active:scale-95"
              >
                <span>Find What You Need</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Humanised Customer Illustration (Transparent, No Background) */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-6 pointer-events-none select-none z-10 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/customer_illustration.png"
              alt="Customer Service Booking Illustration"
              className="w-24 h-24 sm:w-32 sm:h-32 xl:w-36 xl:h-36 object-contain drop-shadow-md"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
