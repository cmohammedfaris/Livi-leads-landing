"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Store,
  Send,
  FileSpreadsheet,
  FolderCheck,
  CheckSquare,
  Bell,
  Briefcase,
  Star,
  ArrowRight,
} from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";
import { openPreRegistrationModal } from "@/utils/tracking";

const CUSTOMER_FEATURES = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "One live view of leads, tasks, and service requests.",
    icon: LayoutGrid,
    tag: "Most used",
    isSpecialTag: true,
    accent: "bg-blue-50 text-blue-600 border-blue-200/80",
    gradient: "from-blue-500/10 via-white to-white",
    cta: "View dashboard",
  },
  {
    id: "directory",
    title: "Service & Business Directory",
    description: "Explore verified business profiles, service categories, and business vCards.",
    icon: Store,
    tag: "Directory",
    isSpecialTag: false,
    accent: "bg-[#5B04C5]/10 text-[#5B04C5] border-[#5B04C5]/25",
    gradient: "from-[#5B04C5]/10 via-white to-white",
    cta: "Explore directory",
  },
  {
    id: "enquiries",
    title: "Enquiry Submission",
    description: "Browse services and submit direct enquiries to verified business vendors.",
    icon: Send,
    tag: "Enquiries",
    isSpecialTag: false,
    accent: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    gradient: "from-indigo-500/10 via-white to-white",
    cta: "Submit enquiry",
  },
  {
    id: "quotations",
    title: "Quotation Receiver",
    description: "Receive, review, and track quotations sent by business providers.",
    icon: FileSpreadsheet,
    tag: "Popular",
    isSpecialTag: true,
    accent: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    gradient: "from-emerald-500/10 via-white to-white",
    cta: "Track quotes",
  },
  {
    id: "documents",
    title: "User Document Hub",
    description: "View and upload requested files, respond to vendor document requests, and track verification status.",
    icon: FolderCheck,
    tag: "Documents",
    isSpecialTag: false,
    accent: "bg-purple-50 text-purple-600 border-purple-200/80",
    gradient: "from-purple-500/10 via-white to-white",
    cta: "Manage documents",
  },
  {
    id: "tasks",
    title: "Task & Operations Tracking",
    description: "Organize personal and service tasks, schedule online/offline meetings, and track onsite work.",
    icon: CheckSquare,
    tag: "Operations",
    isSpecialTag: false,
    accent: "bg-sky-50 text-sky-600 border-sky-200/80",
    gradient: "from-sky-500/10 via-white to-white",
    cta: "Track tasks",
  },
  {
    id: "notifications",
    title: "Email & Push Notifications",
    description: "Receive real-time push notifications (PWA & Web) and automated email reminders.",
    icon: Bell,
    tag: "Alerts",
    isSpecialTag: false,
    accent: "bg-amber-50 text-amber-600 border-amber-200/80",
    gradient: "from-amber-500/10 via-white to-white",
    cta: "Stay updated",
  },
  {
    id: "careers",
    title: "Jobs & Careers",
    description: "Browse open roles and apply straight from your account.",
    icon: Briefcase,
    tag: "Careers",
    isSpecialTag: false,
    accent: "bg-rose-50 text-rose-600 border-rose-200/80",
    gradient: "from-rose-500/10 via-white to-white",
    cta: "Explore roles",
  },
  {
    id: "reviews",
    title: "Feedback & Reviews",
    description: "Submit platform feedback and review business service quality.",
    icon: Star,
    tag: "Reviews",
    isSpecialTag: false,
    accent: "bg-teal-50 text-teal-600 border-teal-200/80",
    gradient: "from-teal-500/10 via-white to-white",
    cta: "Share review",
  },
];

export default function CustomerPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundBlobs />

      <div className="pt-10 sm:pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* HERO SECTION */}
        <section className="relative z-10 text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              CUSTOMER FEATURES
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5 max-w-4xl mx-auto"
          >
            The Right Service. The Right People. <br />
            <span className="bg-gradient-to-r from-[#5B04C5] via-[#4B03A4] to-[#7974F5] bg-clip-text text-transparent">
              A Simpler Experience.
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto space-y-2 leading-relaxed font-normal"
          >
            <p>
              Finding a service provider shouldn&apos;t mean endless searching, repeated phone calls and scattered conversations.
            </p>
            <p className="text-slate-800 font-medium">
              Livi Leads helps you discover businesses, connect with service providers and manage your enquiries.
            </p>
          </motion.div>
        </section>

        {/* 9 CUSTOMER FEATURES GRID (3 rows of 3 on desktop) */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {CUSTOMER_FEATURES.map((solution, idx) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                className={`rounded-3xl p-7 sm:p-8 bg-gradient-to-b ${solution.gradient} border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/40 transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 ${solution.accent} border flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs`}
                    >
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    {solution.tag && (
                      <span
                        className={`text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs border ${
                          solution.isSpecialTag
                            ? "bg-[#5B04C5]/10 border-[#5B04C5]/30 text-[#5B04C5]"
                            : "bg-white/90 border-slate-200 text-slate-600 uppercase tracking-wider"
                        }`}
                      >
                        {solution.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[#5B04C5] transition-colors text-left">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-left font-normal">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={openPreRegistrationModal}
                    className="text-xs font-bold text-[#5B04C5] group-hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform cursor-pointer"
                  >
                    <span>{solution.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* CLOSING / BOTTOM CTA CARD */}
        <CTACard
          className="px-0"
          title="Better Connections Begin Here."
          subtitle="Find the people who can help you get things done."
          primaryText="Find a Service"
          primaryHref="/services"
          secondaryText="Explore Business Features"
          secondaryHref="/business"
        />
      </div>
    </div>
  );
}
