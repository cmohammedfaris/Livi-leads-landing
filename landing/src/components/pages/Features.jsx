"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { bottomToTopMotion } from "@components/Helpers/Motion/AllMotion";
import SEO from "@/components/Common/SEO/SEO";

const Features = () => {
  const [activeTab, setActiveTab] = useState("all");

  const businessFeatures = [
    {
      title: "Document Management",
      desc: "Outgoing and incoming document requests with client status tracking, verification approval, and file uploads.",
      tag: "Business",
    },
    {
      title: "Enquiry Management",
      desc: "Receive, review, and respond to direct customer service enquiries in real-time.",
      tag: "Business",
    },
    {
      title: "Invoice Management",
      desc: "Generate Tax & Proforma Invoices, print PDFs, track payment states (Pending, Submitted, Paid), and handle status changes.",
      tag: "Business",
    },
    {
      title: "Quotation Management",
      desc: "Create and send tailored quotations to potential clients and track response progress.",
      tag: "Business",
    },
    {
      title: "Task & Operations Tracking",
      desc: "Organize General Tasks (Self/Others), schedule online/offline Meetings, and track Onsite Work with GPS locations.",
      tag: "Business",
    },
    {
      title: "Service Listing & Pricing",
      desc: "Publish company services with detailed pricing, descriptions, and category tags.",
      tag: "Business",
    },
    {
      title: "Product Master & Catalog",
      desc: "Manage product catalogs, item pricing, product specs, and centralized product masters.",
      tag: "Business",
    },
    {
      title: "Inventory Management",
      desc: "Track real-time stock levels, item movements, and warehouse inventory status.",
      tag: "Business",
    },
    {
      title: "Digital Business Cards & QR",
      desc: "Generate custom digital vCards with downloadable QR codes for instant mobile sharing.",
      tag: "Business",
    },
    {
      title: "Supplier & Purchase Orders",
      desc: "Maintain B2B Supplier directories, track Purchase Orders, and manage Purchase Returns.",
      tag: "Business",
    },
    {
      title: "Feature Onboarding Nudges",
      desc: "Interactive pop-ups guiding business vendors through unexplored features.",
      tag: "Business",
    },
  ];

  const userFeatures = [
    {
      title: "User Document Hub",
      desc: "View and upload requested files, respond to vendor document requests, and track verification status.",
      tag: "User",
    },
    {
      title: "Enquiry Submission",
      desc: "Browse services and submit direct enquiries to verified business vendors.",
      tag: "User",
    },
    {
      title: "Quotation Receiver",
      desc: "Receive, review, and track quotations sent by business providers.",
      tag: "User",
    },
    {
      title: "Service & Business Directory",
      desc: "Explore verified business profiles, service categories, and business vCards.",
      tag: "User",
    },
    {
      title: "Email & Push Notifications",
      desc: "Receive real-time push notifications (PWA & Web) and automated email reminders.",
      tag: "User",
    },
    {
      title: "User Onboarding Nudges",
      desc: "Contextual feature discovery pop-ups introducing key platform tools.",
      tag: "User",
    },
    {
      title: "Feedback & Reviews",
      desc: "Submit platform feedback and review business service quality.",
      tag: "User",
    },
  ];

  const adminFeatures = [
    {
      title: "User & Business Management",
      desc: "Administrative control over Normal Users, Business Vendors, Superusers, and Staff.",
      tag: "Admin",
    },
    {
      title: "Service & Category Control",
      desc: "Manage system-wide service categories, taxonomy, and approval workflows.",
      tag: "Admin",
    },
    {
      title: "Blog & Content Management",
      desc: "Publish, edit, and categorize company blog posts and platform announcements.",
      tag: "Admin",
    },
    {
      title: "Feedback & Report Center",
      desc: "Centralized review of user feedback, system reports, and platform ratings.",
      tag: "Admin",
    },
  ];

  const allFeatures = [...businessFeatures, ...userFeatures, ...adminFeatures];

  const filteredFeatures =
    activeTab === "all"
      ? allFeatures
      : activeTab === "business"
      ? businessFeatures
      : activeTab === "user"
      ? userFeatures
      : adminFeatures;

  /* 
    COMMENTED OUT FOR FUTURE RELEASE:
    - Jobs & Career Portal
    - Helpline & Call Center Routing
    - Support Desk Ticket System
  */

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20">
      <SEO
        title="Livi Leads Live Feature Ecosystem"
        description="Explore all live features across Business, User, and Admin portals: Document Management, Invoicing, Task Tracking, HRMS, Digital vCards, and Push Notifications."
        keywords="Livi Leads features, business CRM, document management, invoicing software, task tracking, HR system"
      />
      <motion.div
        {...bottomToTopMotion}
        className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
            PLATFORM FEATURES
          </span>
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.18] mb-6">
          Everything Built For <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#5B04C5] to-[#817DF8] bg-clip-text text-transparent">
            Your Business Growth.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
          Discover how Livi Leads empowers Admin, Business Vendors, and Users with end-to-end operational automation.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl w-fit mx-auto border border-gray-200 dark:border-gray-700">
          {[
            { id: "all", label: "All Live Features" },
            { id: "business", label: "Business Side" },
            { id: "user", label: "User Side" },
            { id: "admin", label: "Admin Side" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-[#5B04C5] text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid of Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredFeatures.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#15161D] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${
                    feat.tag === "Business"
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                      : feat.tag === "User"
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                      : "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400"
                  }`}
                >
                  {feat.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
