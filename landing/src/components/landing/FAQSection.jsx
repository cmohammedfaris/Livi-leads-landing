"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  // Grouped into the 3 categories specified in Section 8 of the Master Plan
  const faqGroups = [
    {
      category: "About the platform",
      items: [
        {
          id: 0,
          question: "What is Livi Leads?",
          answer:
            "Livi Leads is a business growth and management platform that connects businesses and customers while offering tools to organise business activities.",
        },
        {
          id: 1,
          question: "Who can use Livi Leads?",
          answer:
            "Businesses, service providers and customers looking to discover, connect and manage services can use the platform.",
        },
      ],
    },
    {
      category: "For businesses",
      items: [
        {
          id: 2,
          question: "Can I list my business?",
          answer:
            "Yes. Businesses can create a presence on the platform and showcase their services, subject to the applicable registration and listing terms.",
        },
        {
          id: 3,
          question: "Can I manage customer enquiries?",
          answer:
            "Livi Leads provides lead-management capabilities to help businesses organise and follow up on customer enquiries.",
        },
        {
          id: 4,
          question: "Does Livi Leads support quotations and invoices?",
          answer:
            "The platform includes quotation and invoicing capabilities for business users.",
        },
        {
          id: 5,
          question: "Can I manage my employees and business operations?",
          answer:
            "Available business tools include team and HR management, tasks, documents and inventory management.",
        },
      ],
    },
    {
      category: "Getting started",
      items: [
        {
          id: 6,
          question: "Is Livi Leads free?",
          answer:
            "Please refer to the current pricing and subscription information for the available plans and included features.",
        },
        {
          id: 7,
          question: "How do I get started?",
          answer:
            "Register on the platform, choose the relevant user journey and follow the registration instructions.",
        },
      ],
    },
  ];

  return (
    <section
      id="faqs"
      className="relative z-10 flex w-full justify-center px-4 sm:px-6 py-10 sm:py-14 max-w-7xl mx-auto scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
        {/* Left Column: Headlines & Contact Card (Sticky) */}
        <div className="flex flex-col justify-between gap-8 lg:gap-12 lg:sticky lg:top-24 w-full lg:w-[420px] shrink-0">
          <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="h-[1px] w-5 bg-[#5B04C5]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
                FAQS
              </span>
              <span className="h-[1px] w-5 bg-[#5B04C5] lg:hidden" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#0A0B10] tracking-tight lg:leading-[56px]">
              Frequently Asked <br className="hidden sm:block" />
              Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto lg:mx-0 font-normal">
              Everything you need to know about connecting, discovering, and managing with Livi Leads.
            </p>
          </div>

          {/* Contact Card: Section 8 Bottom "Still have a question?" */}
          <div className="flex w-full max-w-[360px] mx-auto lg:mx-0 flex-col gap-4 rounded-3xl bg-white p-6 sm:p-7 shadow-[0px_7px_21px_-1.25px_rgba(28,70,255,0.04)] border border-slate-200/90 items-start text-left">
            <div className="flex flex-col items-start gap-1.5 w-full text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#5B04C5] flex items-center justify-center mb-1">
                <HelpCircle className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A0B10] text-left">
                Still have a question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed text-left">
                Can&apos;t find what you&apos;re looking for? Reach out to our team and we&apos;ll help you out.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 btn-primary-gradient font-bold text-xs sm:text-sm text-white shadow-md hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer self-start"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Grouped FAQ Accordions */}
        <div className="flex flex-1 w-full flex-col gap-8">
          {faqGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#5B04C5] px-1">
                {group.category}
              </h3>

              <div className="flex flex-col gap-3">
                {group.items.map((faq) => {
                  const isOpen = openIndex === faq.id;

                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setOpenIndex(isOpen ? -1 : faq.id)}
                      className={`flex cursor-pointer flex-col rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border transition-all duration-200 ${
                        isOpen
                          ? "border-[#5B04C5]/40 shadow-md ring-1 ring-[#5B04C5]/20"
                          : "border-slate-200/80 shadow-2xs hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-sm sm:text-base font-bold text-[#0A0B10] leading-snug">
                          {faq.question}
                        </h4>
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800 transition-colors">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                          >
                            {isOpen ? (
                              <Minus className="w-4 h-4 stroke-[2.5]" />
                            ) : (
                              <Plus className="w-4 h-4 stroke-[2.5]" />
                            )}
                          </motion.div>
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pr-4 sm:pr-8 pt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
