"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/Common/SEO/SEO";
import Link from "next/link";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import {
  Scale,
  ShieldAlert,
  CreditCard,
  Building2,
  FileCheck,
  AlertTriangle,
  Ban,
  RefreshCw,
  Mail,
  Globe,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const sections = [
  { id: "acceptance", title: "1. Agreement & Legal Entity" },
  { id: "global-service", title: "2. Global SaaS Service Description" },
  { id: "regulatory-compliance", title: "3. Local Regulatory Compliance" },
  { id: "acceptable-use", title: "4. Acceptable Use Policy" },
  { id: "tax-einvoicing", title: "5. Global Tax & E-Invoicing Disclaimer" },
  { id: "subscriptions-billing", title: "6. Subscriptions, Billing & Chargebacks" },
  { id: "return-refund-policy", title: "7. Return & Refund Policy" },
  { id: "intellectual-property", title: "8. Intellectual Property Rights" },
  { id: "customer-data", title: "9. Customer Data & Upload Responsibility" },
  { id: "disclaimers", title: "10. Disclaimer of Warranties" },
  { id: "limitation-liability", title: "11. Limitation of Liability" },
  { id: "indemnification", title: "12. Indemnification" },
  { id: "governing-law", title: "13. Governing Law & Dispute Resolution" },
  { id: "modifications-contact", title: "14. Modifications & Contact" },
];

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-700 dark:text-slate-200 selection:bg-[#5B04C5]/15 selection:text-[#5B04C5] pb-24">
      <SEO
        title="Terms of Service & Conditions - Livi Leads"
        description="Review the legally binding Terms of Service for Livi Leads SaaS platform, operated by LIVEASE TECHNOLOGY SOLUTIONS INC."
        keywords="terms of service, terms and conditions, Livi Leads legal, LIVEASE TECHNOLOGY SOLUTIONS INC, acceptable use policy, refund policy, tax disclaimer"
      />

      <BackgroundBlobs />

      {/* Hero Header */}
      <section className="relative z-10 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              TERMS &amp; CONDITIONS
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Terms &amp; Conditions
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            These Terms constitute a legally binding agreement between you and <strong>LIVEASE TECHNOLOGY SOLUTIONS INC.</strong> By accessing or using Livi Leads, you agree to comply with these terms and conditions.
          </p>

          {/* Metadata Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#5B04C5]" />
              <span>Effective Date: <strong>October 30, 2026</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#5B04C5]" />
              <span>Entity: <strong>LIVEASE TECHNOLOGY SOLUTIONS INC. (New York, USA)</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-[#5B04C5]" />
              <span>Governing Law: <strong>State of New York, USA</strong></span>
            </div>
          </div>
        </div>

        {/* 3 Quick Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center shrink-0 border border-[#5B04C5]/20">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Global SaaS Agreement</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Clear guidelines governing software access, lead tools, and customer data ownership.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-200/60 dark:border-amber-800/40">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Tax &amp; E-Invoice Clarity</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Software technology status with clear local regulatory and tax filing responsibilities.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800/40">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">14-Day Free Evaluation</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Explore all core business features risk-free with no credit card required upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Table of Contents - Sticky Sidebar (Compact, Non-Scrolling, Stuck in View) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 self-start z-20">
            <div className="p-3.5 sm:p-4 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_25px_rgba(0,0,0,0.03)]">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#5B04C5]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Table of Contents
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-[#5B04C5] px-2 py-0.5 rounded-full bg-[#5B04C5]/10 border border-[#5B04C5]/20">
                  14 Sections
                </span>
              </div>

              <nav className="space-y-0.5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                      activeSection === section.id
                        ? "bg-[#5B04C5] text-white shadow-sm font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                    {activeSection === section.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 ml-1.5" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Sidebar Compact Footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <a
                  href="mailto:support@livileads.com"
                  className="inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-[#5B04C5] dark:text-slate-400 dark:hover:text-[#818cf8] transition-colors"
                  title="Legal Support"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B04C5]" />
                  <span>support@livileads.com</span>
                </a>
                <span className="text-[10px] text-slate-400 font-medium">Legal Desk</span>
              </div>
            </div>
          </aside>

          {/* Legal Text Content Card */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.03)] space-y-12"
            >
              {/* Section 1 */}
              <section id="acceptance" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Agreement &amp; Legal Entity
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>LIVEASE TECHNOLOGY SOLUTIONS INC.</strong> (&quot;Livi Leads&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a corporation organized under the laws of the State of New York, USA.
                  </p>
                  <p>
                    By registering, accessing, browsing, or using the Livi Leads SaaS platform, websites, mobile applications, APIs, or services globally, you agree to be bound by these Terms and our <Link href="/privacy-policy" className="text-[#5B04C5] font-semibold hover:underline">Privacy Policy</Link>. If you do not agree to these Terms, you must not access or use the Service.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="global-service" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Global SaaS Service Description
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    Livi Leads is a cloud-based Software-as-a-Service (SaaS) platform that provides business automation tools, including CRM, lead management, invoicing, quotations, HR tracking, document management, and a business directory.
                  </p>
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#5B04C5]/10 via-[#5B04C5]/5 to-transparent border border-[#5B04C5]/20 text-xs sm:text-sm flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#5B04C5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">Software Provider Status:</strong> You expressly acknowledge that Livi Leads is a software technology provider. <strong>We do not sell physical goods, nor do we provide legal, tax, accounting, or audit advice.</strong> The Service is accessible globally.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="regulatory-compliance" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Local Regulatory Compliance
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    While Livi Leads provides features designed to assist businesses with operations and record keeping (such as invoice generation and document tracking), <strong>you are solely responsible for complying with the local laws, statutory tax regulations, and electronic filing mandates of your specific country of operation</strong> (including, but not limited to, the UAE Federal Tax Authority, India GST, US Internal Revenue Service, or European tax authorities).
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="acceptable-use" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Acceptable Use Policy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    This Acceptable Use Policy outlines strictly prohibited activities on the Livi Leads global platform. By using our Service, you agree not to engage in any of the following:
                  </p>

                  <div className="space-y-3 pt-1">
                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 flex items-center justify-center border border-rose-200/60 dark:border-rose-800/40">
                          <Ban className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          4.1 Prohibited Businesses
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Livi Leads strictly prohibits the use of its platform for businesses engaged in: illegal drugs or controlled substances, weapons or firearms, adult content/services, unlicensed gambling, multi-level marketing (MLM), fraudulent investment schemes, or any activity violating international or local laws.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-200/60 dark:border-amber-800/40">
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          4.2 Fraud and Deception
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        You may not use Livi Leads to generate fraudulent invoices, issue fake quotations, or deceive or scam clients. We reserve the right to suspend or terminate any account suspected of fraud and report it to relevant law enforcement authorities.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center border border-[#5B04C5]/20">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          4.3 System Abuse &amp; Scraping
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        You agree not to spam the Task Engine, misuse the directory, attempt unauthorized penetration testing, decompile the platform, or deploy automated bots, spiders, or scrapers to extract data from our servers.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border border-rose-500/20 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
                      <strong>Enforcement &amp; Termination:</strong> Violation of this policy results in immediate account termination without refund and may include permanent IP address blocking.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="tax-einvoicing" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Global Tax &amp; E-Invoicing Compliance Disclaimer
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    Livi Leads provides technology tools for business invoicing and quotation management across international borders:
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm pl-1">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Provider Status:</strong> Livi Leads is a technology platform (SaaS). We are not a licensed accounting firm, tax advisory, or certified local tax authority in any jurisdiction.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Accredited Integrations:</strong> To assist users with local mandates (such as UAE FTA Peppol, India GST, or European PEPPOL standards), Livi Leads connects with accredited third-party Service Providers. Users are responsible for completing required registrations with local authorities.</div>
                    </li>
                  </ul>

                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>ULTIMATE USER RESPONSIBILITY:</strong> WHILE OUR SOFTWARE GENERATES INVOICES, TRACKS EXPENSES, AND STORES AUDIT RECORDS, THE ULTIMATE RESPONSIBILITY FOR TAX CALCULATION ACCURACY, REGULATORY COMPLIANCE, AND TIMELY STATUTORY FILING RESTS SOLELY WITH THE USER. LIVEASE TECHNOLOGY SOLUTIONS INC. IS HELD COMPLETELY HARMLESS AGAINST ANY GOVERNMENT FINES, TAX PENALTIES, OR LIABILITIES INCURRED BY THE USER IN ANY JURISDICTION.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="subscriptions-billing" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Subscriptions, Billing &amp; Chargebacks
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    By selecting a paid plan (Starter, Growth, Pro, or VIP), you authorize us to charge your designated payment method on a recurring monthly or annual basis. Subscriptions auto-renew unless cancelled prior to the renewal date.
                  </p>
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border border-rose-500/20 text-xs sm:text-sm text-rose-950 dark:text-rose-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chargeback Policy:</strong> You agree not to initiate any payment dispute or chargeback with your bank or credit card issuer without first contacting us at <code className="px-1 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 font-mono text-[11px]">support@livileads.com</code> to resolve the matter. Fraudulent chargebacks will result in immediate account termination and legal action to recover disputed amounts plus legal fees.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="return-refund-policy" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Return &amp; Refund Policy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <div className="space-y-3 pt-1">
                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        7.1 Digital SaaS Model - No Physical Goods
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Livi Leads is a digital Software-as-a-Service (SaaS) platform. We do not sell, ship, or deliver physical goods. Physical returns are strictly prohibited.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          7.2 14-Day Free Trial
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                          Risk Free
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        We offer a 14-day free trial on accounts with no credit card required. This enables you to evaluate all features before subscribing. If you do not wish to continue, simply do not upgrade to a paid tier.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        7.3 Strict Non-Refundable Policy &amp; Exceptions
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
                        Because our platform provisions immediate cloud infrastructure upon account activation, <strong>all payments for subscriptions are strictly non-refundable.</strong> We do not offer prorated refunds for partial periods.
                      </p>
                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 font-medium">
                        We will only review refund requests under these verified circumstances:
                      </p>
                      <ul className="space-y-1.5 mt-1.5 text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 pl-1">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B04C5] shrink-0 mt-0.5" />
                          <div><strong>Duplicate Charges:</strong> Accidental double-billing caused by technical payment gateway errors.</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B04C5] shrink-0 mt-0.5" />
                          <div><strong>Verified Unauthorized Transactions:</strong> Proven fraudulent payments on a compromised account.</div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5B04C5] shrink-0 mt-0.5" />
                          <div><strong>Critical Technical Failures:</strong> Major platform outages preventing core functionality for an extended period.</div>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                        7.4 Requesting a Review &amp; Cancellations
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Eligible refund requests must be submitted within 7 days of the charge to <code className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px] text-[#5B04C5] dark:text-[#818cf8]">support@livileads.com</code> with the subject <em>&quot;Refund Request - [Your Account Email]&quot;</em>. Subscriptions may be cancelled anytime via your account dashboard to prevent future renewal billing.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="intellectual-property" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Intellectual Property Rights
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    All rights, title, and interest in the Livi Leads software, user interfaces, branding, trade secrets, algorithms, and source code remain the exclusive property of <strong>LIVEASE TECHNOLOGY SOLUTIONS INC.</strong>
                  </p>
                  <p>
                    You are granted a limited, revocable, non-transferable, and non-exclusive license to use the software. You may not reverse-engineer, decompile, modify, or resell our software.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="customer-data" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    9
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Customer Data &amp; Upload Responsibility
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    You retain 100% ownership of all leads, client databases, quotations, purchase orders, documents, and business records you input into Livi Leads (&quot;Customer Data&quot;).
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    You warrant that you have full legal rights and consent to upload all data into the system, and agree to indemnify LIVEASE TECHNOLOGY SOLUTIONS INC. against any claims or regulatory actions arising from unauthorized data uploads.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="disclaimers" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Disclaimer of Warranties
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                  </p>
                  <p>
                    We do not warrant that the Service will be uninterrupted, error-free, completely secure, or that all bugs will be corrected. You assume complete responsibility for your business use of the software.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="limitation-liability" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, LIVEASE TECHNOLOGY SOLUTIONS INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, BUSINESS INTERRUPTION, OR GOVERNMENT TAX FINES/PENALTIES).
                  </p>
                  <p>
                    OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE SHALL BE STRICTLY LIMITED TO THE TOTAL AMOUNT PAID BY YOU TO LIVEASE TECHNOLOGY SOLUTIONS INC. IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="indemnification" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Indemnification
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    You agree to defend, indemnify, and hold harmless LIVEASE TECHNOLOGY SOLUTIONS INC. and its officers, directors, employees, and agents from any claims, damages, liabilities, losses, or legal costs arising out of your use of the Service, your violation of these Terms, or your violation of any local, national, or international laws.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="governing-law" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    13
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of New York, USA, without regard to its conflict of law principles.
                  </p>
                  <p>
                    Any legal action, proceeding, or dispute arising out of or relating to these Terms or the Service shall be brought exclusively in the state or federal courts located in New York County, New York, USA, regardless of your country of residence or business operation.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="modifications-contact" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    14
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Modifications &amp; Contact
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We may update these Terms from time to time. When material changes occur, we will update the &quot;Effective Date&quot; at the top of this document. Continued use of the platform after changes indicates your acceptance.
                  </p>

                  <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                    <p className="font-extrabold text-slate-900 dark:text-white text-base">
                      LIVEASE TECHNOLOGY SOLUTIONS INC.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      State of New York, USA
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-[#5B04C5]" />
                        <span className="text-slate-500 dark:text-slate-400">Legal Inquiries:</span>
                        <a href="mailto:support@livileads.com" className="text-[#5B04C5] font-semibold hover:underline">
                          support@livileads.com
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-[#5B04C5]" />
                        <span className="text-slate-500 dark:text-slate-400">Website:</span>
                        <a href="https://www.livileads.com" className="text-[#5B04C5] font-semibold hover:underline">
                          https://www.livileads.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
