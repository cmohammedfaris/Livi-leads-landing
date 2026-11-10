"use client";

import React from "react";
import { motion } from "framer-motion";
import { openPreRegistrationModal } from "@/utils/tracking";
import { CheckCircle2, ArrowRight, Layers, LayoutGrid, Users, TrendingUp, Wrench } from "lucide-react";

export default function WhyLiviLeadsSection() {
  const points = [
    {
      title: "One connected platform",
      description: "Everything from finding clients to managing daily operations in a unified environment.",
      icon: Layers,
      accent: "bg-[#5B04C5]/10 text-[#5B04C5] border-[#5B04C5]/25",
    },
    {
      title: "Better organised business activities",
      description: "Keep records, quotations, invoices, tasks, and documents neatly structured in one place.",
      icon: LayoutGrid,
      accent: "bg-blue-50 text-blue-600 border-blue-200/80",
    },
    {
      title: "Easier customer engagement",
      description: "Respond to customer enquiries quickly and build lasting, reliable client relationships.",
      icon: Users,
      accent: "bg-purple-50 text-purple-600 border-purple-200/80",
    },
    {
      title: "Improved visibility of opportunities",
      description: "Put your services in front of real customers looking for what you provide every single day.",
      icon: TrendingUp,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    },
    {
      title: "Practical tools for everyday operations",
      description: "Straightforward tools built for real business workflows, without complicated learning curves.",
      icon: Wrench,
      accent: "bg-amber-50 text-amber-600 border-amber-200/80",
    },
  ];

  return (
    <section id="why-livi-leads" className="relative z-10 px-4 sm:px-6 py-10 sm:py-14 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading, Narrative, and CTA (Sticky & Centered in Viewport) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-[max(5.5rem,calc(50vh-165px))] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="h-[1px] w-5 bg-[#5B04C5]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
                WHY LIVI LEADS?
              </span>
              <span className="h-[1px] w-5 bg-[#5B04C5] lg:hidden" />
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[34px] font-extrabold text-slate-900 tracking-tight mb-6 leading-tight text-center lg:text-left"
            >
              More Than a Business Directory. <br />
              <span className="text-[#5B04C5] block mt-1">More Than a Management Tool.</span>
            </motion.h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8 text-center lg:text-left">
              <p>
                Livi Leads brings business discovery, customer engagement and operational tools together.
                Instead of managing everything across disconnected platforms, businesses can bring essential activities into one connected environment.
              </p>
              <p className="text-slate-900 font-semibold">
                Our focus is not simply on adding more features. It&apos;s about making everyday business easier.
              </p>
            </div>

            <button
              type="button"
              onClick={openPreRegistrationModal}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-white bg-[#5B04C5] hover:bg-[#4B03A4] shadow-md shadow-[#5B04C5]/25 transition-all cursor-pointer active:scale-95 w-fit mx-auto lg:mx-0"
            >
              <span>Explore Livi Leads</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: 5 Highlight Cards */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_15px_-3px_rgba(15,23,42,0.04)] hover:shadow-lg hover:border-[#5B04C5]/40 transition-all flex items-start gap-5 group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-3 aspect-square ${pt.accent} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#5B04C5] transition-colors">
                      {pt.title}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}