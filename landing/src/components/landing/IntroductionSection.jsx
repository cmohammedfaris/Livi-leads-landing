"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Layers, TrendingUp, ArrowRight } from "lucide-react";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function IntroductionSection() {
  const benefits = [
    {
      title: "Get Discovered",
      description:
        "Put your business in front of potential customers looking for the products and services you offer.",
      icon: Eye,
      tag: "Visibility",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200/80",
      gradient: "from-blue-500/10 via-white to-white",
    },
    {
      title: "Manage Opportunities",
      description:
        "Organise enquiries, customer relationships, quotations and business activities in one place.",
      icon: Layers,
      tag: "Organisation",
      accentBg: "bg-[#5B04C5]/10 text-[#5B04C5] border-[#5B04C5]/25",
      gradient: "from-[#5B04C5]/10 via-white to-white",
    },
    {
      title: "Grow with Confidence",
      description:
        "Spend less time managing scattered information and more time building your business.",
      icon: TrendingUp,
      tag: "Growth",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
      gradient: "from-emerald-500/10 via-white to-white",
    },
  ];

  return (
    <section id="introduction" className="relative z-10 px-4 sm:px-6 py-10 sm:py-14 max-w-7xl mx-auto scroll-mt-20">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
            CONNECT. MANAGE. GROW.
          </span>
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
        </div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-tight"
        >
          Everything Your Business <br className="hidden sm:inline" />
          Needs to Move Forward.
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal"
        >
          Finding customers, managing enquiries, and running operations shouldn&apos;t require disconnected tools.
          <br className="hidden sm:inline" />{" "}
          Livi Leads brings them all together into one simple, connected platform.
        </motion.p>
      </div>

      {/* Three Core Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              className={`relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b ${item.gradient} border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-xs ${item.accentBg}`}
                  >
                    <IconComp className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 text-slate-600 shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-[#5B04C5] transition-colors text-left">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal text-left">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={openPreRegistrationModal}
                  className="text-xs font-bold text-[#5B04C5] group-hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform cursor-pointer"
                >
                  <span>Explore opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}