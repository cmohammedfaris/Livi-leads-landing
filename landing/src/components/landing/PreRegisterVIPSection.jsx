"use client";

import React from "react";
import { motion } from "framer-motion";
import { openPreRegistrationModal } from "@/utils/tracking";
import { CheckCircle, ArrowRight, Zap, Award } from "lucide-react";

export default function PreRegisterVIPSection() {
  return (
    <section id="vip-access" className="relative z-10 px-4 py-14 sm:py-20 max-w-6xl mx-auto text-center">
      {/* Section Header (Consistent with remaining page designs) */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
            VIP EARLY ACCESS &bull; LIMITED FOUNDING SPOTS
          </span>
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
        </div>

        {/* Main Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3"
        >
          Stop Chasing Clients.{" "}
          <br className="hidden sm:inline" />
          <span className="text-[#5B04C5]">Let Qualified Leads Find You.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed mb-7"
        >
          Livi Leads connects verified businesses and service specialists directly with verified high-intent local clients. Join the priority waitlist for early perks and 0% platform fees.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="partner-btn-primary px-8 py-4 rounded-full font-bold text-sm text-white shadow-md hover:shadow-indigo-500/25 transition-all inline-flex items-center gap-2.5 cursor-pointer active:scale-95"
          >
            <span>Pre-Register via Concierge Assistant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* 3 Value Cards Grid (Mild colorful cards matching aesthetic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 text-left">
        {/* Card 1: Verified Customer Enquiries (Indigo/Primary tint) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
          className="relative bg-gradient-to-b from-[#5B04C5]/[0.06] via-white to-white rounded-3xl p-6 sm:p-7 border border-[#5B04C5]/25 shadow-[0_4px_25px_-5px_rgba(91, 4, 197,0.08)] hover:shadow-xl hover:border-[#5B04C5]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#5B04C5]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#5B04C5]/10 border border-[#5B04C5]/25 text-[#5B04C5] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#5B04C5] group-hover:text-white transition-all duration-300">
                <Zap className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#5B04C5]/10 text-[#5B04C5] border border-[#5B04C5]/20">
                Smart Matching
              </span>
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">
              Verified Customer Enquiries
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Say goodbye to spam. Get high-intent customer requests filtered by service and location.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Automated Quotations & Invoices (Emerald/Green tint) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
          className="relative bg-gradient-to-b from-emerald-500/[0.06] via-white to-white rounded-3xl p-6 sm:p-7 border border-emerald-500/25 shadow-[0_4px_25px_-5px_rgba(16,185,129,0.08)] hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <CheckCircle className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                1-Tap Billing
              </span>
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">
              Automated Quotations &amp; Invoices
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Create professional branded quotations, calculate VAT, and generate invoices with 1 tap.
            </p>
          </div>
        </motion.div>

        {/* Card 3: VIP Founding Perks (Purple/Violet tint) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
          className="relative bg-gradient-to-b from-purple-500/[0.06] via-white to-white rounded-3xl p-6 sm:p-7 border border-purple-500/25 shadow-[0_4px_25px_-5px_rgba(168,85,247,0.08)] hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Award className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">
                Founding Perks
              </span>
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">
              VIP Founding Perks
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Founding members receive free premium promotion badges and 0% platform commission on launch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
