"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/Common/SEO/SEO";
import Link from "next/link";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import {
  ShieldCheck,
  Lock,
  Globe,
  AlertTriangle,
  Server,
  FileText,
  User,
  Briefcase,
  Laptop,
  CreditCard,
  Mail,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Building2,
  ArrowRight,
  Cookie,
  UserCheck,
} from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction & Global Scope" },
  { id: "information-we-collect", title: "2. Global Information Collection" },
  { id: "international-transfers", title: "3. International Data Transfers" },
  { id: "how-we-use-share", title: "4. How We Use & Share Data" },
  { id: "data-security-disclaimer", title: "5. Data Security & Disclaimers" },
  { id: "user-responsibility", title: "6. User Responsibility for Uploaded Data" },
  { id: "retention-google-api", title: "7. Retention & Google API Disclosure" },
  { id: "privacy-rights", title: "8. Global Privacy Rights & Choices" },
  { id: "cookies-tracking", title: "9. Cookies & Tracking Technologies" },
  { id: "children-privacy", title: "10. Children's Privacy" },
  { id: "changes-to-policy", title: "11. Changes to This Policy" },
  { id: "contact-us", title: "12. Contact & Privacy Support" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

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
        title="Privacy Policy - Livi Leads"
        description="Learn how LIVEASE TECHNOLOGY SOLUTIONS INC. (Livi Leads) collects, uses, protects, and manages your personal and business data globally."
        keywords="privacy policy, data protection, Livi Leads privacy, LIVEASE TECHNOLOGY SOLUTIONS INC, global data transfers, SaaS privacy"
      />

      <BackgroundBlobs />

      {/* Hero Header */}
      <section className="relative z-10 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              GLOBAL PRIVACY &amp; DATA TRUST
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-6">
            <strong>LIVEASE TECHNOLOGY SOLUTIONS INC.</strong> (&quot;Livi Leads&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy across all jurisdictions globally. This policy outlines our international data collection, usage, and security practices.
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
              <Globe className="w-3.5 h-3.5 text-[#5B04C5]" />
              <span>Scope: <strong>Worldwide Multi-Tenant SaaS</strong></span>
            </div>
          </div>
        </div>

        {/* 3 Quick Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-10">
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200/60 dark:border-emerald-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Zero Data Sale Guarantee</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We never monetize, rent, or sell your customer lists, leads, or business records.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center shrink-0 border border-[#5B04C5]/20">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Enterprise Encryption</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                TLS 1.2/1.3 in-transit and AES-256 cloud encryption with role-based access isolation.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-200/60 dark:border-blue-800/40">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">Global Privacy Rights</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Full compliance with GDPR, CCPA/CPRA, and international data portability rights.
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
                  12 Sections
                </span>
              </div>

              <nav className="space-y-0.5">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
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
                  title="Privacy Support"
                >
                  <Mail className="w-3.5 h-3.5 text-[#5B04C5]" />
                  <span>support@livileads.com</span>
                </a>
                <span className="text-[10px] text-slate-400 font-medium">Privacy Desk</span>
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
              <section id="introduction" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Introduction &amp; Global Scope
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    <strong>LIVEASE TECHNOLOGY SOLUTIONS INC.</strong> (&quot;Livi Leads&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a corporation organized under the laws of the State of New York, USA, is committed to protecting your privacy across all jurisdictions in which we operate globally.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, process, store, transfer, and safeguard your personal and business data when accessing or utilizing the Livi Leads cloud-based Software-as-a-Service (SaaS) platform, website (<code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#5B04C5] font-mono text-xs">livileads.com</code>), mobile applications, APIs, and associated online services (collectively, the &quot;Service&quot;).
                  </p>
                  <p>
                    By registering an account, subscribing to a plan, or accessing the Service, you acknowledge that you have read, understood, and agreed to the data practices described in this Privacy Policy and our <Link href="/terms-and-conditions" className="text-[#5B04C5] font-semibold hover:underline">Terms of Service</Link>.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="information-we-collect" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Global Information Collection
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We collect personal, commercial, and technical information from users worldwide across the following categories:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-200/60 dark:border-blue-800/40">
                          <User className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          A. Account &amp; Identity Data
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Full name, company/business name, business email address, phone number, physical address, country of operation, account credentials, and billing contact information.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center border border-[#5B04C5]/20">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          B. Business Operational Data
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Invoices, quotations, sales leads, supplier profiles, product catalog masters, inventory data, employee and contractor records, payroll details, and business verification documents uploaded into the platform.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200/60 dark:border-emerald-800/40">
                          <Laptop className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          C. Technical &amp; Usage Data
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        IP addresses, geographic region, browser type and version, operating system, device identifiers, session timestamps, navigation events, error logs, and fraud prevention tokens.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-200/60 dark:border-purple-800/40">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          D. Subscription &amp; Payment Data
                        </h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Payment transaction IDs, subscription plan details, renewal cycles, and payment statuses. All credit card and banking details are processed directly by certified, PCI-DSS compliant third-party payment gateways; we do not store full card numbers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="international-transfers" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    International Data Transfers
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#5B04C5]/10 via-[#5B04C5]/5 to-transparent border border-[#5B04C5]/20 text-xs sm:text-sm flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#5B04C5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">Global Infrastructure Disclosure:</strong> Our cloud servers, database clusters, and accredited service providers (including cloud hosting, content delivery networks, and payment gateways) may be located in the United States, Europe, or other regions worldwide.
                    </div>
                  </div>
                  <p>
                    By using Livi Leads, you expressly acknowledge and consent to the transfer, storage, and processing of your personal and business data to and within these international facilities, subject to industry-standard safeguards and contractual protections.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="how-we-use-share" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    How We Use &amp; Share Data
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We process your data strictly to deliver, maintain, authenticate, and improve the Livi Leads SaaS platform and to execute subscription transactions.
                  </p>

                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 text-emerald-950 dark:text-emerald-200 text-sm font-medium flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Zero Sale Guarantee:</strong> We do NOT sell, rent, lease, or monetize your personal information, customer lists, lead databases, or commercial records to any third-party marketing companies, brokers, or advertisers.
                    </div>
                  </div>

                  <p>We share data exclusively with trusted third-party providers under strict confidentiality agreements:</p>
                  <ul className="space-y-2.5 text-xs sm:text-sm pl-1">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Hosting &amp; Cloud Infrastructure:</strong> Highly secure cloud storage and server providers.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Payment Processors:</strong> Regulated payment gateways to process recurring subscription billing.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Transactional Communications:</strong> Email (SMTP/SES) and SMS delivery networks to send operational alerts and verification codes.</div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0 mt-0.5" />
                      <div><strong>Legal &amp; Regulatory Authorities:</strong> If required by applicable court order, subpoena, or statutory government mandate.</div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id="data-security-disclaimer" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Data Security &amp; Disclaimers
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We implement industry-standard administrative, physical, and technical safeguards, including TLS 1.2/1.3 encryption in transit, AES-256 encryption for sensitive records, role-based access control (RBAC), and multi-tenant database isolation.
                  </p>

                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Data Security Disclaimer:</strong> You expressly acknowledge that no method of transmission over the Internet or electronic storage is 100% secure. While we deploy robust protections, we cannot guarantee absolute or impenetrable security across all global networks and jurisdictions.
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="user-responsibility" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    User Responsibility for Uploaded Data
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    You are solely responsible for ensuring you have all requisite legal rights, authority, and explicit consent under applicable local data privacy laws (such as GDPR, CCPA, or regional personal data acts) to collect, upload, and process any employee records, client details, or third-party documents into Livi Leads.
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    You agree to indemnify, defend, and hold harmless LIVEASE TECHNOLOGY SOLUTIONS INC. against any and all claims, regulatory penalties, damages, or legal expenses arising from your unauthorized upload or processing of personal data.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="retention-google-api" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Data Retention &amp; Google API Disclosure
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We retain your personal and business data for as long as your account remains active. Upon account cancellation or deletion request, data is archived or purged in accordance with our cloud retention schedule, except where retention is required by tax, accounting, or statutory legal obligations.
                  </p>

                  <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <Server className="w-4 h-4 text-[#5B04C5]" />
                      Google Drive API &amp; Limited Use Disclosure
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      Livi Leads offers optional Google Drive integration for long-term document backup, requesting access exclusively to the <code className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px] text-[#5B04C5] dark:text-[#818cf8]">https://www.googleapis.com/auth/drive.file</code> scope. Our application only creates, accesses, and manages files inside the dedicated <code className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-[11px] text-[#5B04C5] dark:text-[#818cf8]">LiviLeads_Archive</code> folder. We do NOT access other files, sell data, or use data to train AI/ML models.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Livi Leads&apos;s use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="text-[#5B04C5] underline font-semibold">Google API Services User Data Policy</a>, including the Limited Use requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="privacy-rights" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    8
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Global Privacy Rights &amp; Choices
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    Depending on your jurisdiction (such as under GDPR in Europe, CCPA/CPRA in California, or other regional frameworks), you have the right to access, export, update, rectify, or request deletion of your personal information.
                  </p>
                  <p>
                    You can manage account information directly from your dashboard or submit a formal data privacy request to <a href="mailto:support@livileads.com" className="text-[#5B04C5] font-semibold hover:underline">support@livileads.com</a>.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="cookies-tracking" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    9
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Cookies &amp; Tracking Technologies
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We use essential session cookies and local storage tokens to maintain user authentication, secure user sessions, and store interface preferences (such as dark/light mode). Disabling necessary cookies via browser settings may prevent login and proper operation of the SaaS platform.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="children-privacy" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    10
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Children&apos;s Privacy
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    The Service is intended solely for businesses and individuals of legal age (18 years or older). We do not knowingly solicit or collect personal information from minors.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="changes-to-policy" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    11
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Changes to This Policy
                  </h2>
                </div>
                <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically to reflect enhancements in our software, operational adjustments, or legal mandates. When modified, we will revise the &quot;Effective Date&quot; at the top of this policy.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="contact-us" className="scroll-mt-32 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#5B04C5]/10 text-[#5B04C5] dark:bg-[#5B04C5]/20 dark:text-[#818cf8] flex items-center justify-center text-sm font-extrabold shrink-0 border border-[#5B04C5]/20">
                    12
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    Contact &amp; Privacy Support
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  <p>
                    For questions, inquiries, or data protection requests concerning this Privacy Policy, please contact our legal and privacy team:
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
                        <span className="text-slate-500 dark:text-slate-400">Email:</span>
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

export default PrivacyPolicy;
