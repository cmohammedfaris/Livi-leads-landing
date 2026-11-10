"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  MessageSquare,
  FileSpreadsheet,
  Receipt,
  Layers,
  Box,
  Boxes,
  CheckSquare,
  FolderCheck,
  Users,
  QrCode,
  Truck,
  ArrowRight,
} from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";
import { openPreRegistrationModal } from "@/utils/tracking";

const BUSINESS_FEATURES = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "One live view of leads, tasks, and revenue.",
    icon: LayoutGrid,
    tag: "Most used",
    isSpecialTag: true,
    accent: "bg-blue-50 text-blue-600 border-blue-200/80",
    gradient: "from-blue-500/10 via-white to-white",
  },
  {
    id: "enquiries",
    title: "Enquiry Management",
    description: "Receive, review, and respond to direct customer service enquiries in real-time.",
    icon: MessageSquare,
    tag: "Leads",
    isSpecialTag: false,
    accent: "bg-[#5B04C5]/10 text-[#5B04C5] border-[#5B04C5]/25",
    gradient: "from-[#5B04C5]/10 via-white to-white",
  },
  {
    id: "quotations",
    title: "Quotation Management",
    description: "Create and send tailored quotations to potential clients and track response progress.",
    icon: FileSpreadsheet,
    tag: "Popular",
    isSpecialTag: true,
    accent: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    gradient: "from-emerald-500/10 via-white to-white",
  },
  {
    id: "invoices",
    title: "Invoice Management",
    description: "Generate Tax & Proforma Invoices, print PDFs, track payment states (Pending, Submitted, Paid), and handle status changes.",
    icon: Receipt,
    tag: "Billing",
    isSpecialTag: false,
    accent: "bg-teal-50 text-teal-600 border-teal-200/80",
    gradient: "from-teal-500/10 via-white to-white",
  },
  {
    id: "services",
    title: "Service Listing & Pricing",
    description: "Publish company services with detailed pricing, descriptions, and category tags.",
    icon: Layers,
    tag: "Services",
    isSpecialTag: false,
    accent: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    gradient: "from-indigo-500/10 via-white to-white",
  },
  {
    id: "catalogue",
    title: "Product Master & Catalogue",
    description: "Manage product catalogues, item pricing, product specs, and centralized product masters.",
    icon: Box,
    tag: "Catalogue",
    isSpecialTag: false,
    accent: "bg-amber-50 text-amber-600 border-amber-200/80",
    gradient: "from-amber-500/10 via-white to-white",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Track real-time stock levels, item movements, and warehouse inventory status.",
    icon: Boxes,
    tag: "Team favorite",
    isSpecialTag: true,
    accent: "bg-purple-50 text-purple-600 border-purple-200/80",
    gradient: "from-purple-500/10 via-white to-white",
  },
  {
    id: "tasks",
    title: "Task & Operations Tracking",
    description: "Organize General Tasks (Self/Others), schedule online/offline Meetings, and track Onsite Work with GPS locations.",
    icon: CheckSquare,
    tag: "Operations",
    isSpecialTag: false,
    accent: "bg-sky-50 text-sky-600 border-sky-200/80",
    gradient: "from-sky-500/10 via-white to-white",
  },
  {
    id: "documents",
    title: "Document Management",
    description: "Outgoing and incoming document requests with client status tracking, verification approval, and file uploads.",
    icon: FolderCheck,
    tag: "Documents",
    isSpecialTag: false,
    accent: "bg-rose-50 text-rose-600 border-rose-200/80",
    gradient: "from-rose-500/10 via-white to-white",
  },
  {
    id: "hr",
    title: "HR Management",
    description: "Onboarding, leave, and workflows in one HR system.",
    icon: Users,
    tag: "People",
    isSpecialTag: false,
    accent: "bg-violet-50 text-violet-600 border-violet-200/80",
    gradient: "from-violet-500/10 via-white to-white",
  },
  {
    id: "digital-cards",
    title: "Digital Business Cards & QR",
    description: "Generate custom digital vCards with downloadable QR codes for instant mobile sharing.",
    icon: QrCode,
    tag: "Networking",
    isSpecialTag: false,
    accent: "bg-cyan-50 text-cyan-600 border-cyan-200/80",
    gradient: "from-cyan-500/10 via-white to-white",
  },
  {
    id: "suppliers",
    title: "Supplier & Purchase Orders",
    description: "Maintain B2B Supplier directories, track Purchase Orders, and manage Purchase Returns.",
    icon: Truck,
    tag: "Procurement",
    isSpecialTag: false,
    accent: "bg-orange-50 text-orange-600 border-orange-200/80",
    gradient: "from-orange-500/10 via-white to-white",
  },
];

export default function BusinessPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundBlobs />

      <div className="pt-10 sm:pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <section className="relative z-10 text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              BUSINESS FEATURES
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.16] mb-5"
          >
            Spend Less Time Managing. <br />
            <span className="bg-gradient-to-r from-[#5B04C5] to-[#817DF8] bg-clip-text text-transparent">
              More Time Growing.
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto space-y-2 leading-relaxed"
          >
            <p>
              Your business has customers to serve, opportunities to manage and operations to keep running.
            </p>
            <p className="text-slate-900 font-semibold text-base sm:text-lg">
              Livi Leads brings essential business activities together so you can work with greater organisation and visibility.
            </p>
          </motion.div>
        </section>

        {/* 12 Business Features Grid (4 rows of 3 on desktop) */}
        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {BUSINESS_FEATURES.map((solution, idx) => {
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
                    <span>Get started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Closing / Bottom CTA Card */}
        <CTACard
          className="px-0"
          title="Your Business, More Organised."
          subtitle="Bring your business activities together and create more room for growth."
          primaryText="Start Managing Your Business"
          onPrimaryClick={openPreRegistrationModal}
          secondaryText="Explore Customer Features"
          secondaryHref="/customer"
        />
      </div>
    </div>
  );
}
