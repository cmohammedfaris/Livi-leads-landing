"use client";

import React, { useState, useEffect } from "react";
import PreRegistrationChatModal from "@/components/landing/PreRegistrationChatModal";
import { captureAndStoreUtmParams } from "@/utils/tracking";
import {
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

export default function EarlyAccessPage() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    captureAndStoreUtmParams();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F2FA] via-[#F8F9FE] to-white dark:from-[#0E0F17] dark:via-[#13141F] dark:to-darkprimary flex flex-col justify-center items-center py-12 px-4 sm:px-6 font-sans">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        {/* Eyebrow with lines on both sides */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-5 bg-primary" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary">
            VIP EARLY ACCESS &bull; LIMITED FOUNDING SPOTS
          </span>
          <span className="h-[1px] w-5 bg-primary" />
        </div>

        {/* Hero Title */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-[#212844] dark:text-white tracking-tight leading-tight">
            Stop Chasing Clients. <br />
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Let Qualified Leads Find You.
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Livi Leads connects verified businesses and service specialists directly with verified high-intent local clients. Join the priority waitlist for early perks and 0% platform fees.
          </p>
        </div>

        {/* Big Interactive Chat CTA */}
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-4 px-6 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/95 hover:to-indigo-500 text-white rounded-2xl font-bold text-base shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transition-all hover:scale-102 cursor-pointer active:scale-98"
          >
            <span>Pre-Register via Concierge Assistant</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5 flex items-center justify-center gap-1.5">
            <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
            Takes under 45 seconds • Instant VIP queue confirmation
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left">
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <BoltIcon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#212844] dark:text-white text-sm">Verified Customer Enquiries</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Say goodbye to spam. Get high-intent customer requests filtered by service and location.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircleIcon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#212844] dark:text-white text-sm">Automated Quotations & Invoices</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Create professional branded quotations, calculate VAT, and generate invoices with 1 tap.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <UserGroupIcon className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-[#212844] dark:text-white text-sm">VIP Founding Perks</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              Founding members receive free premium promotion badges and 0% platform commission on launch.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap items-center justify-center gap-6">
          <span>🔒 Strict Privacy Guaranteed</span>
          <span>⚡ Official Livi Leads Launch Phase</span>
          <span>🤝 Verified Service Network</span>
        </div>
      </div>

      {/* Pre-Registration Conversational Assistant Modal */}
      <PreRegistrationChatModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
