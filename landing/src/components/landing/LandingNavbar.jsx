"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Briefcase,
  User,
  Menu,
  X,
  Search,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/landing/Logo";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function LandingNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isFeaturesActive = pathname === "/business" || pathname === "/customer";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo (links to Home) */}
        <Link href="/" className="flex items-center group shrink-0 outline-none focus:outline-none" aria-label="Livi Leads Home">
          <Logo className="h-9 sm:h-10 lg:h-11 w-auto group-hover:scale-[1.03] transition-transform" />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-slate-200/90 bg-white/80 backdrop-blur-md shadow-2xs">
          {/* Home */}
          <Link
            href="/"
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/"
                ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/about"
                ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          {/* Features Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 outline-none ${
                isFeaturesActive || dropdownOpen
                  ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                  : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
              }`}
            >
              <span>Features</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-[#5B04C5]" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Box */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white p-2.5 shadow-xl border border-slate-200/90 z-50 flex flex-col gap-1"
                >
                  <Link
                    href="/business"
                    onClick={() => setDropdownOpen(false)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === "/business"
                        ? "bg-[#5B04C5]/10"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#5B04C5] border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                        Business Features
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        Visibility, leads, quotations, inventory, team and tasks in one place
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/customer"
                    onClick={() => setDropdownOpen(false)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                      pathname === "/customer"
                        ? "bg-[#5B04C5]/10"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">
                        Customer Features
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        Discover, connect, request and organise your service enquiries
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Why Livi Leads */}
          <Link
            href="/why-livi-leads"
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/why-livi-leads"
                ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
            }`}
          >
            Why Livi Leads
          </Link>

          {/* FAQs */}
          <Link
            href="/faqs"
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/faqs"
                ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
            }`}
          >
            FAQs
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
              pathname === "/contact"
                ? "bg-[#5B04C5]/10 text-[#5B04C5] font-bold"
                : "text-slate-600 hover:text-[#5B04C5] hover:bg-slate-50"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA Buttons (Find a Service & List Your Business – It's Free) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Find a Service (Secondary/Outline) */}
          <Link
            href="/services"
            className="rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-xs px-4 py-2 transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5 text-[#5B04C5]" />
            <span>Find a Service</span>
          </Link>

          {/* List Your Business – It's Free (Solid/Primary) */}
          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="rounded-full btn-primary-gradient font-bold text-xs px-5 py-2.5 shadow-md shadow-[#5B04C5]/25 flex items-center gap-2 transition-all cursor-pointer active:scale-95 outline-none whitespace-nowrap"
          >
            <span>List Your Business – It&apos;s Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/"
                className={`py-2 text-sm font-semibold border-b border-slate-100 ${
                  pathname === "/" ? "text-[#5B04C5] font-bold" : "text-slate-700"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`py-2 text-sm font-semibold border-b border-slate-100 ${
                  pathname === "/about" ? "text-[#5B04C5] font-bold" : "text-slate-700"
                }`}
              >
                About Us
              </Link>

              {/* Mobile Features Accordion */}
              <div className="border-b border-slate-100 py-2">
                <button
                  type="button"
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="w-full flex items-center justify-between text-sm font-semibold text-slate-700"
                >
                  <span className={isFeaturesActive ? "text-[#5B04C5] font-bold" : ""}>
                    Features
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileFeaturesOpen ? "rotate-180 text-[#5B04C5]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {mobileFeaturesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="pl-3 pt-2 pb-1 flex flex-col gap-2 overflow-hidden"
                    >
                      <Link
                        href="/business"
                        className="py-1 text-xs font-medium text-slate-600 hover:text-[#5B04C5] flex items-center gap-2"
                      >
                        <Briefcase className="w-3.5 h-3.5 text-[#5B04C5]" />
                        <span>Business Features</span>
                      </Link>
                      <Link
                        href="/customer"
                        className="py-1 text-xs font-medium text-slate-600 hover:text-[#5B04C5] flex items-center gap-2"
                      >
                        <User className="w-3.5 h-3.5 text-purple-600" />
                        <span>Customer Features</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/why-livi-leads"
                className={`py-2 text-sm font-semibold border-b border-slate-100 ${
                  pathname === "/why-livi-leads" ? "text-[#5B04C5] font-bold" : "text-slate-700"
                }`}
              >
                Why Livi Leads
              </Link>

              <Link
                href="/faqs"
                className={`py-2 text-sm font-semibold border-b border-slate-100 ${
                  pathname === "/faqs" ? "text-[#5B04C5] font-bold" : "text-slate-700"
                }`}
              >
                FAQs
              </Link>

              <Link
                href="/contact"
                className={`py-2 text-sm font-semibold border-b border-slate-100 ${
                  pathname === "/contact" ? "text-[#5B04C5] font-bold" : "text-slate-700"
                }`}
              >
                Contact Us
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openPreRegistrationModal();
                  }}
                  className="w-full py-3 rounded-full btn-primary-gradient font-bold text-xs text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>List Your Business – It&apos;s Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full border border-slate-300 bg-white text-slate-800 font-semibold text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5 text-[#5B04C5]" />
                  <span>Find a Service</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
