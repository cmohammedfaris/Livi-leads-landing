"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link as LinkIcon,
  Briefcase,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  ListOrdered,
  ChevronDown,
  Check,
} from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";

const FAQS = [
  {
    q: "Why does the Referral program only pay once, while Sales Agent pays recurring commission?",
    a: "The Referral track is completely passive: you share your link, a user registers and subscribes, and you receive an immediate one-time payout with zero ongoing duties. Sales Agents actively handle relationship building, onboarding follow-ups, and recurring renewals, earning continuous commission throughout the client lifecycle.",
  },
  {
    q: "What exact percentage will I earn?",
    a: "Because payout rates scale dynamically based on your track, client tier, and sales volume, exact commission rates are presented clearly inside your affiliate dashboard upon registration.",
  },
  {
    q: "Can I start as a Referral affiliate and become a Sales Agent later?",
    a: "Yes! Many of our most successful Sales Agents started by sharing links as standard Referral affiliates and later transitioned once they saw how easily businesses adopt Livi Leads.",
  },
  {
    q: "What happens if I stop bringing in renewals as a Sales Agent?",
    a: "If accounts lapse without active relationship management, they transition to internal re-engagement queues, and payouts revert to the standard one-time referral structure.",
  },
  {
    q: "Do I need sales experience to apply as a Sales Agent?",
    a: "Prior B2B sales or client consulting experience is helpful, but motivation and familiarity with local business software workflows matter far more during our short alignment conversation.",
  },
];

export default function AffiliatePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <BackgroundBlobs />

      <div className="min-h-screen pt-4 sm:pt-6 pb-16 overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative z-10 px-4 pt-8 pb-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4"
          >
            Two ways to earn with Livi Leads
            <br />
            — pick what fits your time.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto"
          >
            Share a link for a one-time payout, or actively grow accounts for recurring commission. You choose the level of involvement.
          </motion.p>
        </section>

        {/* 2 PROGRAM CARDS (Design 6) */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Referral Program */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-[32px] p-8 sm:p-10 glass-card hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/35 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/90 border border-indigo-100/80 text-[#5B5CE6] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                  <LinkIcon className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2.5 tracking-tight">
                  Referral Program
                </h2>
                <span className="font-caveat font-bold text-sm sm:text-base inline-block bg-slate-100/90 text-slate-700 px-3.5 py-0.5 rounded-full border border-slate-200/80 mb-4">
                  For anyone, casual sharing
                </span>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Sign up, get your link, and share it with your network. No CV, no interview — just an easy way to earn from an introduction.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#5B5CE6] shrink-0 stroke-[2.5]" />
                    <span>Instant signup, no screening</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#5B5CE6] shrink-0 stroke-[2.5]" />
                    <span>One-time payout per subscription</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#5B5CE6] shrink-0 stroke-[2.5]" />
                    <span>No follow-up responsibility</span>
                  </div>
                </div>
              </div>

              <Link
                href="/register"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#5B5CE6] transition-colors"
              >
                <span>Explore Referral Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Sales Agent Program */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-[32px] p-8 sm:p-10 glass-card hover:shadow-2xl transition-all flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200/35 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50/90 border border-purple-100/80 text-[#8B5CF6] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2.5 tracking-tight">
                  Sales Agent Program
                </h2>
                <span className="font-caveat font-bold text-sm sm:text-base inline-block bg-purple-50/90 text-purple-700 px-3.5 py-0.5 rounded-full border border-purple-200/80 mb-4">
                  For part-time or full-time professionals
                </span>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Actively bring in and manage business accounts. Earn recurring commission for as long as your accounts stay subscribed.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 stroke-[2.5]" />
                    <span>Short application + interview</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 stroke-[2.5]" />
                    <span>Recurring commission while accounts renew</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-[#8B5CF6] shrink-0 stroke-[2.5]" />
                    <span>Dedicated dashboard & reporting</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#8B5CF6] transition-colors"
              >
                <span>Explore Sales Agent Track</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION (Design 6) */}
        <section className="max-w-6xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            How the two programs compare
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8">
            Your exact commission rate is confirmed once you join — it depends on the plan and your track, so we keep it inside your dashboard rather than a fixed public number.
          </p>

          <div className="glass-card rounded-[32px] overflow-hidden text-left shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-white/40 text-slate-500">
                    <th className="py-4 px-6 font-semibold w-1/3"></th>
                    <th className="py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-xs">
                      REFERRAL
                    </th>
                    <th className="py-4 px-6 font-bold text-slate-900 uppercase tracking-wider text-xs">
                      SALES AGENT
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">To get started</td>
                    <td className="py-4 px-6">Instant — no review</td>
                    <td className="py-4 px-6 font-medium">Application + short interview</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Payout type</td>
                    <td className="py-4 px-6">One-time, per subscription</td>
                    <td className="py-4 px-6 font-medium">Recurring, while the account renews</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Ongoing responsibility</td>
                    <td className="py-4 px-6">None</td>
                    <td className="py-4 px-6 font-medium">Follow-up, renewals, reporting</td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Commission rate</td>
                    <td className="py-4 px-6">Shown after you join</td>
                    <td className="py-4 px-6 font-medium text-[#5B5CE6]">
                      Shown after you join — higher for active agents
                    </td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Best for</td>
                    <td className="py-4 px-6">Sharing with your network occasionally</td>
                    <td className="py-4 px-6 font-medium">2~3 hrs/day or full-time, hands-on selling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* HOW TRACK CHANGES OVER TIME (Design 6) */}
        <section className="max-w-6xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            How your track can change over time
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8">
            Both programs are designed to reward active effort — here&apos;s what that means in practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="glass-card p-7 sm:p-8 rounded-[28px] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#5B5CE6] flex items-center justify-center mb-5 border border-indigo-100 shadow-xs">
                <TrendingUp className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2.5">
                Stay active, stay recurring
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Sales Agents keep recurring commission by keeping their accounts renewing. If an account goes quiet and there&apos;s no follow-up, that portion of your commission moves back to a one-time referral payout.
              </p>
            </div>

            <div className="glass-card p-7 sm:p-8 rounded-[28px] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#8B5CF6] flex items-center justify-center mb-5 border border-purple-100 shadow-xs">
                <RotateCcw className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2.5">
                Win-back opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                When a subscriber pays once but doesn&apos;t renew we flag it internally. That account can be assigned to a Sales Agent to reach out — if they resubscribe, the agent earns the commission.
              </p>
            </div>

            <div className="glass-card p-7 sm:p-8 rounded-[28px] hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100 shadow-xs">
                <ListOrdered className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2.5">
                Move between tracks
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Started as a Referral affiliate and want more? Apply to become a Sales Agent anytime. It&apos;s reviewed the same way as any new application.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT JOINING LOOKS LIKE (Design 6) */}
        <section className="max-w-6xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            What joining each program looks like
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8">
            Referral is instant. Sales Agent has a short screening step, so we can offer better, recurring commission to people who&apos;ll actually follow through.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Quick & Easy Referral Steps */}
            <div className="glass-card p-8 sm:p-10 rounded-[32px] hover:shadow-xl transition-all">
              <span className="font-caveat text-xl font-bold text-[#5B5CE6] block mb-1">
                Quick & easy
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Join as Affiliate
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-[#5B5CE6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Create your account</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Just the basics — no forms to fill beyond signup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-[#5B5CE6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Get your referral link</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Available immediately in your dashboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 text-[#5B5CE6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Share it</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Earn a one-time payout each time someone subscribes through your link.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* A Bit More Involved Sales Agent Steps */}
            <div className="glass-card p-8 sm:p-10 rounded-[32px] hover:shadow-xl transition-all">
              <span className="font-caveat text-xl font-bold text-[#8B5CF6] block mb-1">
                A bit more involved
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Apply as Sales Agent
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 text-[#8B5CF6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Tell us your availability</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Part-time (2-3 hrs/day) or full-time — this helps us set realistic expectations together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 text-[#8B5CF6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Upload your CV</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      A quick look at relevant experience, if any.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 text-[#8B5CF6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Short interview</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      A brief conversation to align on how you&apos;ll work with accounts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-purple-50 border border-purple-100 text-[#8B5CF6] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Onboarded on commission</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Once approved, your recurring commission terms are set in your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (Design 6) */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-8 tracking-tight">
            Frequently asked questions
          </h2>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[22px] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-[#5B5CE6] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#5B5CE6]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4 text-xs text-slate-500 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA CARD (Design 6) */}
        <CTACard
          title="Ready to get started?"
          subtitle="Pick the program that fits how much time you have — you can always apply to change tracks later."
          primaryText="Apply as Sales Agent"
          primaryHref="/contact"
          secondaryText="Join as Affiliate"
          secondaryHref="/register"
        />
      </div>
    </>
  );
}
