"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/landing/Logo";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-12 px-4 sm:px-6 mt-16 bg-[#0B1120] text-slate-300 border-t border-slate-800/80 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 mb-14">
          {/* Block 1: Brand Block (Desktop col-span-5, Mobile col-span-2) */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="mb-4 group inline-flex items-center" aria-label="Livi Leads Home">
              <Logo variant="light" className="h-11 sm:h-12 w-auto group-hover:scale-[1.03] transition-transform" />
            </Link>
            <p className="text-white font-bold text-sm sm:text-base mt-3">
              More Connections. More Opportunities. Better Business.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-1.5 font-normal">
              Helping businesses connect, manage and grow. A connected platform designed to help businesses move forward and customers find the services they need.
            </p>
          </div>

          {/* Block 2: Company */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Block 3: Features */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4">
              Features
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/business"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Business Features
                </Link>
              </li>
              <li>
                <Link
                  href="/customer"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Customer Features
                </Link>
              </li>
              <li>
                <Link
                  href="/why-livi-leads"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Why Livi Leads
                </Link>
              </li>
            </ul>
          </div>

          {/* Block 4: Get Started */}
          <div className="col-span-2 sm:col-span-1 md:col-span-3">
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  type="button"
                  onClick={openPreRegistrationModal}
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors text-left cursor-pointer"
                >
                  List Your Business – It&apos;s Free
                </button>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white text-xs sm:text-sm transition-colors"
                >
                  Find a Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© Livi Leads {currentYear}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
