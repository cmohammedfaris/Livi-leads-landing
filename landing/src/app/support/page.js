"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, ChevronDown, Mail, CreditCard } from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";

const TOPICS = [
  "Getting started",
  "Billing & payments",
  "For businesses",
  "For customers",
  "Referral & Sales Agent",
  "Account & security",
];

const TOPIC_FAQS = {
  "Getting started": [
    {
      q: "What is Livi Leads?",
      a: "Livi Leads is a business growth and management platform that connects businesses and customers while offering tools to organise business activities.",
    },
    {
      q: "Who can use Livi Leads?",
      a: "Businesses, service providers and customers looking to discover, connect and manage services can use the platform.",
    },
    {
      q: "Can I list my business?",
      a: "Yes. Businesses can create a presence on the platform and showcase their services, subject to the applicable registration and listing terms.",
    },
    {
      q: "How do I get started?",
      a: "Register on the platform, choose the relevant user journey and follow the registration instructions.",
    },
  ],
  "Billing & payments": [
    {
      q: "What payment methods are supported?",
      a: "We support UPI, Net Banking, credit/debit cards, and automated monthly bank mandates powered by secure RBI-compliant gateways.",
    },
    {
      q: "How do refund requests work?",
      a: "Refunds for cancelled subscription tiers or disputed service enquiries are handled according to our standard 7-day money-back guarantee.",
    },
  ],
  "For businesses": [
    {
      q: "Can I invite team members to my dashboard?",
      a: "Yes, Business plans support role-based permissions (Admin, Manager, Staff, Accountant) with granular visibility limits.",
    },
    {
      q: "How do quotations convert into invoices?",
      a: "Once a client accepts your quotation, click 'Convert to Tax Invoice' to generate a compliant invoice with GST breakdowns automatically.",
    },
  ],
  "For customers": [
    {
      q: "Are the service providers verified?",
      a: "Yes, every service provider on Livi Leads undergoes mandatory business registration and tax ID verification prior to listing.",
    },
    {
      q: "Is my personal document storage secure?",
      a: "All uploaded KYC files are encrypted at rest with 256-bit AES encryption and accessible only by you and the vendors you explicitly authorize.",
    },
  ],
  "Referral & Sales Agent": [
    {
      q: "When are affiliate commissions paid out?",
      a: "One-time referral commissions are paid within 7 business days. Recurring Sales Agent payouts are disbursed monthly on the 5th.",
    },
  ],
  "Account & security": [
    {
      q: "How do I enable two-factor authentication?",
      a: "Navigate to Account Settings > Security and enable 2FA using Google Authenticator or SMS OTP.",
    },
  ],
};

export default function SupportPage() {
  const [activeTopic, setActiveTopic] = useState("Getting started");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = TOPIC_FAQS[activeTopic] || [];

  return (
    <>
      <BackgroundBlobs />

      <div className="min-h-screen pt-4 sm:pt-6 pb-16 overflow-hidden">
        {/* HERO TITLE (Design 10) */}
        <section className="relative z-10 px-4 pt-8 pb-8 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-3"
          >
            How can we help?
          </motion.h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Search our help articles, or browse by topic below.
          </p>

          {/* Search Bar Pill */}
          <div className="glass-pill rounded-full p-2 pl-4 max-w-2xl mx-auto shadow-sm border border-slate-200/80 flex items-center gap-2 mb-10">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for an article, e.g. 'reset password'"
              className="w-full bg-transparent focus:outline-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button className="btn-primary-gradient px-6 py-2 rounded-full font-semibold text-xs text-white shrink-0 shadow-xs">
              Search
            </button>
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setActiveTopic(topic);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTopic === topic
                    ? "btn-primary-gradient text-white shadow-xs"
                    : "bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* ACTIVE TOPIC & FAQS (Design 10) */}
        <section className="max-w-5xl mx-auto px-4 mb-20 text-center">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8B5CF6] border border-purple-100 flex items-center justify-center mx-auto mb-4 shadow-xs">
            <Zap className="w-6 h-6 stroke-[2]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            {activeTopic}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-xl mx-auto">
            Creating your account, choosing Business or Customer, and finding your way around.
          </p>

          <div className="space-y-3.5 text-left">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[22px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-[#5B5CE6] transition-colors cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openIndex === idx ? "rotate-180 text-[#5B5CE6]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4.5 text-xs sm:text-sm text-slate-500 leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* STILL STUCK? TALK TO US DIRECTLY (Design 10) */}
        <section className="max-w-6xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Still stuck? Talk to us directly
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-xl mx-auto">
            Most questions are answered below, but if not, here&apos;s how to reach a person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Email Support Card */}
            <div className="glass-card rounded-[32px] p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <span className="font-caveat text-xl font-bold text-blue-600 block mb-1">
                  Fastest
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Email support
                </h3>

                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">
                      support@livileads.com
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Typical response time is within one business day.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:support@livileads.com"
                className="w-full sm:w-auto btn-primary-gradient px-7 py-3 rounded-full font-semibold text-xs sm:text-sm text-center inline-block self-start shadow-xs cursor-pointer"
              >
                Email us
              </a>
            </div>

            {/* Account & Billing Help Card */}
            <div className="glass-card rounded-[32px] p-8 sm:p-10 flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <span className="font-caveat text-xl font-bold text-blue-600 block mb-1">
                  For businesses
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                  Account & billing help
                </h3>

                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base text-slate-900">
                      Billing questions
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Subscription changes, invoices, and payment method updates.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto btn-secondary px-7 py-3 rounded-full font-semibold text-xs sm:text-sm text-center inline-block self-start hover:bg-slate-50 cursor-pointer"
              >
                Contact billing
              </Link>
            </div>
          </div>
        </section>

        {/* DIDN'T FIND YOUR ANSWER CTA (Design 10) */}
        <section className="max-w-6xl mx-auto px-4">
          <div className="glass-card rounded-[32px] sm:rounded-[36px] p-10 md:p-16 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Didn&apos;t find your answer?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-8 max-w-lg mx-auto">
              Our support team is one message away. We respond to all inquiries within 24 hours.
            </p>
            <Link
              href="/contact"
              className="btn-primary-gradient px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm inline-block shadow-md shadow-indigo-200/50 cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
