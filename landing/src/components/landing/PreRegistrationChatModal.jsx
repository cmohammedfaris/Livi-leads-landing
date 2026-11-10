"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import publicAxios from "@/api/publicAxios";
import { captureAndStoreUtmParams, getStoredAttribution, trackLeadConversion } from "@/utils/tracking";
import ThankYouGreetingModal from "./ThankYouGreetingModal";
import {
  XMarkIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  UserIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  UserGroupIcon,
  Squares2X2Icon,
  CheckIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  SparklesIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const PERSONA_OPTIONS = [
  { id: "VENDOR", label: "Vendor / Service Provider", icon: WrenchScrewdriverIcon, desc: "Offering home, technical or corporate services" },
  { id: "BUSINESS_OWNER", label: "Business Owner / Enterprise", icon: BuildingOffice2Icon, desc: "Managing sales, billing, teams and CRM" },
  { id: "FREELANCER", label: "Freelancer / Agency", icon: BriefcaseIcon, desc: "Independent professional or agency" },
  { id: "CUSTOMER", label: "Client Looking for Services", icon: UserIcon, desc: "Seeking trusted verified local providers" },
];

const COUNTRY_OPTIONS = [
  { id: "QA", name: "Qatar", code: "+974", flag: "ðŸ‡¶ðŸ‡¦" },
  { id: "AE", name: "United Arab Emirates", code: "+971", flag: "ðŸ‡¦ðŸ‡ª" },
  { id: "SA", name: "Saudi Arabia", code: "+966", flag: "ðŸ‡¸ðŸ‡¦" },
  { id: "IN", name: "India", code: "+91", flag: "ðŸ‡®ðŸ‡³" },
  { id: "OM", name: "Oman", code: "+968", flag: "ðŸ‡´ðŸ‡²" },
  { id: "KW", name: "Kuwait", code: "+965", flag: "ðŸ‡°ðŸ‡¼" },
  { id: "BH", name: "Bahrain", code: "+973", flag: "ðŸ‡§ðŸ‡­" },
  { id: "US", name: "United States / Canada", code: "+1", flag: "ðŸ‡ºðŸ‡¸" },
  { id: "GB", name: "United Kingdom", code: "+44", flag: "ðŸ‡¬ðŸ‡§" },
  { id: "OTHER", name: "Other / International", code: "+", flag: "ðŸŒ" },
];

const SERVICE_CATEGORY_OPTIONS = [
  { id: "MAINTENANCE", label: "Maintenance & Technical", desc: "AC, Electrical, Plumbing, HVAC, Handyman", icon: WrenchScrewdriverIcon },
  { id: "CLEANING", label: "Cleaning & Facilities", desc: "Residential, Commercial, Deep Cleaning", icon: SparklesIcon },
  { id: "PROFESSIONAL", label: "IT & Corporate Services", desc: "Tech, Software, Consulting, Accounts", icon: BriefcaseIcon },
  { id: "LOGISTICS", label: "Logistics & Moving", desc: "Relocation, Cargo, Freight, Delivery", icon: RocketLaunchIcon },
  { id: "EVENTS", label: "Events & Media", desc: "Photography, Catering, Production", icon: Squares2X2Icon },
  { id: "OTHER", label: "General & Other Services", desc: "Specialized service industry", icon: BuildingOffice2Icon },
];

const GOAL_OPTIONS = [
  { id: "High-Quality Leads", label: "Getting High-Quality Leads (0% Fee)", icon: RocketLaunchIcon },
  { id: "Invoicing & Quotations", label: "Invoicing & Quotations", icon: DocumentTextIcon },
  { id: "Staff & Task Management", label: "Managing Staff & Daily Tasks", icon: UserGroupIcon },
  { id: "Connected Platform", label: "Connected Business Platform", icon: Squares2X2Icon },
];

// Clean, modern Livi Bot emblem avatar (No human photo, no AI sparkles)
const LiviBotAvatar = ({ size = "sm" }) => {
  if (size === "lg") {
    return (
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-primary/25 border border-white/20">
          <span className="font-black text-xs tracking-wider">LIVI</span>
        </div>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#151621]" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-primary/15 to-indigo-600/15 border border-primary/25 text-primary flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-black tracking-tight shadow-xs">
      LB
    </div>
  );
};

export default function PreRegistrationChatModal({ isOpen, onClose }) {
  // Step sequence:
  // 1: Persona (Role / Business Type)
  // 2: Operating Country
  // 3: Specific Services / Category
  // 4: Primary Goal
  // 5: Full Name
  // 6: Business Name (with skip)
  // 7: Phone / WhatsApp (with Country Code selector)
  // 8: Email (single input + submit)
  // 9: Success VIP pass
  const [step, setStep] = useState(1);

  const [persona, setPersona] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0]); // default Qatar (+974)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Input states for active step typing
  const [inputName, setInputName] = useState("");
  const [inputBusiness, setInputBusiness] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successData, setSuccessData] = useState(null);
  const [showThankYouGreeting, setShowThankYouGreeting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const nameInputRef = useRef(null);
  const businessInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [viewportHeight, setViewportHeight] = useState(null);
  const [viewportOffsetTop, setViewportOffsetTop] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Dynamic visualViewport tracker for iOS Safari & Android mobile keyboards
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    const updateViewport = () => {
      if (window.visualViewport) {
        const vv = window.visualViewport;
        setViewportHeight(vv.height);
        setViewportOffsetTop(vv.offsetTop);

        // Detect if virtual keyboard is active (viewport shrinks significantly vs innerHeight)
        const isKb = vv.height < window.innerHeight * 0.85;
        setIsKeyboardOpen(isKb);
      }
    };

    updateViewport();
    window.visualViewport?.addEventListener("resize", updateViewport);
    window.visualViewport?.addEventListener("scroll", updateViewport);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
    };
  }, [isOpen]);

  const handleInputFocus = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        if (window.visualViewport) {
          const vv = window.visualViewport;
          setViewportHeight(vv.height);
          setViewportOffsetTop(vv.offsetTop);
          setIsKeyboardOpen(vv.height < window.innerHeight * 0.85);
        }
        // Auto-scroll chat messages to bottom smoothly so user sees the conversation
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const handleInputBlur = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo(0, 0);
        if (window.visualViewport) {
          const vv = window.visualViewport;
          setViewportHeight(vv.height);
          setViewportOffsetTop(vv.offsetTop);
          setIsKeyboardOpen(vv.height < window.innerHeight * 0.85);
        }
      }, 100);
    }
  };

  // Background scroll lock & prevent screen shift on modal open (iOS Safari fixed body lock)
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;

    const scrollY = window.scrollY || window.pageYOffset || 0;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalWidth = document.body.style.width;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0 && window.innerWidth >= 640) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.width = originalWidth;
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Capture UTM parameters when modal opens
  useEffect(() => {
    if (isOpen) {
      captureAndStoreUtmParams();
    }
  }, [isOpen]);

  // Auto-scroll chat to bottom smoothly inside the container whenever step changes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [step, loading, successData, isOpen]);

  // Auto focus current input on desktop only (avoid abrupt keyboard pop on mobile)
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    const timer = setTimeout(() => {
      if (window.innerWidth >= 640) {
        if (step === 5) nameInputRef.current?.focus();
        if (step === 6) businessInputRef.current?.focus();
        if (step === 7) phoneInputRef.current?.focus();
        if (step === 8) emailInputRef.current?.focus();
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [step, isOpen]);

  // Handlers for step progression
  const handleSelectPersona = (opt) => {
    setPersona(opt);
    setErrorMsg("");
    setStep(2);
  };

  const handleSelectCountry = (countryOpt) => {
    setSelectedCountry(countryOpt);
    setErrorMsg("");
    setStep(3);
  };

  const handleSelectCategory = (catOpt) => {
    setSelectedCategory(catOpt);
    setErrorMsg("");
    setStep(4);
  };

  const handleSelectGoal = (goalLabel) => {
    setSelectedGoal(goalLabel);
    setErrorMsg("");
    setStep(5);
  };

  const handleNameSubmit = (e) => {
    e?.preventDefault();
    if (!inputName.trim() || inputName.trim().length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters).");
      return;
    }
    setFullName(inputName.trim());
    setErrorMsg("");
    setStep(6);
  };

  const handleBusinessSubmit = (e) => {
    e?.preventDefault();
    setBusinessName(inputBusiness.trim());
    setErrorMsg("");
    setStep(7);
  };

  const handleSkipBusiness = () => {
    setBusinessName("");
    setErrorMsg("");
    setStep(7);
  };

  const handlePhoneSubmit = (e) => {
    e?.preventDefault();
    const digitsOnly = inputPhone.replace(/\D/g, "");
    if (!digitsOnly || digitsOnly.length < 5 || digitsOnly.length > 15) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    setPhone(inputPhone.trim());
    setErrorMsg("");
    setStep(8);
  };

  const handleFinalSubmit = async (e) => {
    e?.preventDefault();
    const finalEmail = inputEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(finalEmail)) {
      setErrorMsg("Please enter a valid email address (e.g. name@company.com).");
      return;
    }
    setEmail(finalEmail);
    setErrorMsg("");

    try {
      setLoading(true);
      const attribution = getStoredAttribution();
      const dialCode = selectedCountry?.code || "+974";
      const fullPhone = `${dialCode} ${phone.trim()}`;

      const payload = {
        full_name: fullName.trim(),
        email: finalEmail,
        phone_number: fullPhone,
        business_name: businessName.trim(),
        business_type: persona?.id || "VENDOR",
        primary_interest: selectedCategory?.label || selectedGoal || "General Early Access",
        challenges_or_needs: [
          `Country: ${selectedCountry?.name || "Qatar"} (${dialCode})`,
          `Category: ${selectedCategory?.label || "General Services"}`,
          `Goal: ${selectedGoal || "Getting Leads"}`,
        ],
        website_url_hp: honeypot, // Honeypot trap
        utm_source: attribution.utm_source || "",
        utm_medium: attribution.utm_medium || "",
        utm_campaign: attribution.utm_campaign || "",
        utm_term: attribution.utm_term || "",
        utm_content: attribution.utm_content || "",
        referrer_url: attribution.referrer_url || "",
      };

      const res = await publicAxios.post("v0/landing/pre-register/", payload);

      if (res?.data?.success) {
        const lead = res.data.data;
        setSuccessData(lead);
        setShowThankYouGreeting(true);
        setStep(9);
        trackLeadConversion(lead);
      } else {
        setErrorMsg(res?.data?.message || "Failed to register. Please check details.");
      }
    } catch (err) {
      console.error("Pre-registration error:", err);
      const msg = err?.response?.data?.message || err?.response?.data?.email?.[0] || "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const resetFlow = () => {
    setStep(1);
    setPersona(null);
    setSelectedCountry(COUNTRY_OPTIONS[0]);
    setSelectedCategory(null);
    setSelectedGoal("");
    setFullName("");
    setBusinessName("");
    setPhone("");
    setEmail("");
    setInputName("");
    setInputBusiness("");
    setInputPhone("");
    setInputEmail("");
    setShowCountryDropdown(false);
    setErrorMsg("");
    setSuccessData(null);
    setShowThankYouGreeting(false);
  };

  if (!mounted) return null;

  const firstName = fullName ? fullName.trim().split(" ")[0] : "Friend";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        /* Outer Container anchored to the Visual Viewport */
        <div
          style={{
            top: viewportOffsetTop ? `${viewportOffsetTop}px` : 0,
            height: viewportHeight ? `${viewportHeight}px` : "100dvh",
          }}
          className="fixed left-0 right-0 z-[9999] pointer-events-auto overflow-hidden"
        >
          {/* Dim Backdrop Overlay - Clicking outside closes drawer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            onTouchMove={(e) => e.preventDefault()}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] transition-opacity cursor-pointer"
          />

          {/* Right Drawer Slide-Over Panel */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.8 }}
            className="absolute top-0 right-0 w-full sm:max-w-lg h-full bg-white dark:bg-[#151621] sm:border-l border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col pointer-events-auto select-auto z-10"
          >
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/90 dark:bg-[#151621]/90 backdrop-blur-md flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <LiviBotAvatar size="lg" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-sans">
                  Pre-Registration
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Priority Access
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Founding Members â€¢ 0% Platform Fee</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer pointer-events-auto"
            aria-label="Close drawer"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Honeypot field (hidden from real users, traps spam bots) */}
        <input
          type="text"
          name="website_url_hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Chat Scroll Area - Scrollbars completely hidden */}
        <div
          ref={chatContainerRef}
          className="p-3.5 sm:p-5 overflow-y-auto overflow-x-hidden flex-1 space-y-4 font-sans text-xs no-scrollbar overscroll-contain"
        >
          {/* Welcome Message */}
          <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
            <LiviBotAvatar />
            <div className="p-3 sm:p-3.5 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-800 dark:text-gray-200 space-y-1.5 leading-relaxed shadow-xs">
              <p className="font-semibold text-gray-900 dark:text-white">
                Hi there! ðŸ‘‹ I am Livi Bot, your early access guide.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Give your business more opportunities, or find the services you need. Let us get you registered and connected in under a minute.
              </p>
            </div>
          </div>

          {/* â”€â”€ QUESTION 1: Role / Persona â”€â”€ */}
          <div className="space-y-3 pt-1">
            <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
              <LiviBotAvatar />
              <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium">
                To help me tailor your access, which of these best describes your business?
              </div>
            </div>

            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 sm:pl-9 pointer-events-auto">
                {PERSONA_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectPersona(opt)}
                      className="p-3 rounded-xl text-left border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 hover:border-primary/50 hover:bg-primary/5 active:scale-98 transition-all cursor-pointer flex items-start gap-2.5 group pointer-events-auto"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-xs">{opt.label}</div>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{opt.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {step > 1 && persona && (
              <div className="flex justify-end pr-1">
                <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                  <span className="break-words">{persona.label}</span>
                  <CheckCircleIcon className="w-4 h-4 shrink-0" />
                </div>
              </div>
            )}
          </div>

          {/* â”€â”€ QUESTION 2: Operating Country â”€â”€ */}
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  Which country or region does your business primarily operate in?
                </div>
              </div>

              {step === 2 && (
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pl-2 sm:pl-9 pointer-events-auto">
                  {COUNTRY_OPTIONS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectCountry(c)}
                      className="p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 hover:border-primary/50 hover:bg-primary/5 active:scale-98 transition-all cursor-pointer flex items-center gap-2 pointer-events-auto group"
                    >
                      <span className="text-base">{c.flag}</span>
                      <div className="min-w-0 text-left">
                        <div className="font-semibold text-gray-900 dark:text-white text-xs truncate">{c.name}</div>
                        <div className="text-[10px] text-gray-400 font-mono">{c.code}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {step > 2 && selectedCountry && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{selectedCountry.flag} {selectedCountry.name} ({selectedCountry.code})</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 3: Service Category / Specific Services â”€â”€ */}
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  What specific service category does your business specialize in?
                </div>
              </div>

              {step === 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 sm:pl-9 pointer-events-auto">
                  {SERVICE_CATEGORY_OPTIONS.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
                        className="p-3 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 hover:border-primary/50 hover:bg-primary/5 active:scale-98 transition-all cursor-pointer flex items-start gap-2.5 pointer-events-auto group text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-700/60 group-hover:bg-primary/10 text-gray-500 dark:text-gray-400 group-hover:text-primary flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-gray-900 dark:text-white">{cat.label}</div>
                          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{cat.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {step > 3 && selectedCategory && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{selectedCategory.label}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 4: Primary Goal â”€â”€ */}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  What would you most like Livi Leads to help your business with upon launch?
                </div>
              </div>

              {step === 4 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 sm:pl-9 pointer-events-auto">
                  {GOAL_OPTIONS.map((g) => {
                    const Icon = g.icon;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => handleSelectGoal(g.label)}
                        className="p-3 rounded-xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 hover:border-primary/50 hover:bg-primary/5 active:scale-98 transition-all cursor-pointer flex items-center gap-2.5 pointer-events-auto group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-700/60 group-hover:bg-primary/10 text-gray-500 dark:text-gray-400 group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium leading-snug">{g.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {step > 4 && selectedGoal && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{selectedGoal}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 5: Full Name (Single Input) â”€â”€ */}
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  Awesome. May I have your full name so I know who to address the registration to?
                </div>
              </div>

              {step > 5 && fullName && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{fullName}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 6: Business / Brand Name (Single Input with Skip) â”€â”€ */}
          {step >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  Pleasure to meet you, {firstName}! What is your business or company name? (Feel free to skip if you work independently)
                </div>
              </div>

              {step > 6 && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{businessName || "Individual / Independent Specialist"}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 7: Phone / WhatsApp with Country Code â”€â”€ */}
          {step >= 7 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  Where should we text your priority launch invitation? Please enter your phone or WhatsApp number:
                </div>
              </div>

              {step > 7 && phone && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{selectedCountry?.code} {phone}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* â”€â”€ QUESTION 8: Email Address (Final Single Input) â”€â”€ */}
          {step >= 8 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 pt-1"
            >
              <div className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]">
                <LiviBotAvatar />
                <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white font-medium leading-relaxed">
                  Almost done! What is your email address so we can email your registration confirmation &amp; founding access link?
                </div>
              </div>

              {step > 8 && email && (
                <div className="flex justify-end pr-1">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3.5 py-2 rounded-xl rounded-tr-xs bg-primary text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 break-words">
                    <span className="break-words">{email}</span>
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Loading status bubble */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 max-w-[92%] sm:max-w-[90%]"
            >
              <LiviBotAvatar />
              <div className="p-3 rounded-xl rounded-tl-xs bg-[#F3F4F6] dark:bg-gray-800 text-primary font-medium flex items-center gap-2">
                <ArrowPathIcon className="w-4 h-4 animate-spin text-primary" />
                <span>Reserving your priority launch spot...</span>
              </div>
            </motion.div>
          )}

          {/* Inline Error Banner */}
          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {/* â”€â”€ STEP 9: Registration Confirmation Ticket â”€â”€ */}
          {step === 9 && successData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4 pt-2 text-center"
            >
              {/* Clean subtle check badge */}
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/80 flex items-center justify-center mx-auto shadow-xs">
                <CheckIcon className="w-6 h-6 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#212844] dark:text-white">
                  Registration Confirmed!
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                  Thank you, <strong>{successData.full_name}</strong>. Your founding early access request has been recorded.
                </p>
              </div>

              {/* Clean confirmation ticket card */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 max-w-sm mx-auto text-left space-y-3">
                <div className="flex items-center justify-between pb-2.5 border-b border-gray-200/60 dark:border-gray-700/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      Early Access Ticket
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary/10 text-primary border border-primary/20">
                    {successData.vip_number || "CONFIRMED"}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <span>Name</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{successData.full_name}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <span>Region</span>
                    <span className="font-medium text-gray-900 dark:text-white">{selectedCountry?.name || "Qatar"}</span>
                  </div>
                  {selectedCategory && (
                    <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                      <span>Category</span>
                      <span className="font-medium text-gray-900 dark:text-white">{selectedCategory.label}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <span>Email</span>
                    <span className="font-medium text-gray-900 dark:text-white font-mono text-[11px]">{successData.email}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500 dark:text-gray-400">
                    <span>Phone</span>
                    <span className="font-medium text-gray-900 dark:text-white font-mono text-[11px]">{selectedCountry?.code} {phone}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                  <span>Launch Status</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircleIcon className="w-3.5 h-3.5 inline" /> Verified Priority (0% Fee)
                  </span>
                </div>
              </div>

              {/* Done button */}
              <div className="pt-2 max-w-sm mx-auto w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-xs shadow-md shadow-primary/20 transition-all cursor-pointer pointer-events-auto"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* â”€â”€ Active Bottom Input Bar (Step 5 to 8) â”€â”€ */}
        {step >= 5 && step <= 8 && (
          <div
            className={`p-3 sm:p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-[#181926] shrink-0 transition-all ${
              isKeyboardOpen
                ? "pb-3 sm:pb-4"
                : "pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            }`}
          >
            {/* Step 5: Full Name Input */}
            {step === 5 && (
              <form onSubmit={handleNameSubmit} className="space-y-2">
                {errorMsg && (
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 min-w-0">
                    <input
                      ref={nameInputRef}
                      type="text"
                      required
                      placeholder="Type your full name..."
                      value={inputName}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      onChange={(e) => {
                        setInputName(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-base sm:text-xs text-gray-900 dark:text-white focus:outline-none focus:border-primary shadow-xs transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputName.trim()}
                    className="px-4 py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-lg font-bold text-xs shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer pointer-events-auto shrink-0"
                  >
                    <span>Send</span>
                    <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 6: Business / Brand Name Input (with Skip button) */}
            {step === 6 && (
              <form onSubmit={handleBusinessSubmit} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1 min-w-0">
                    <input
                      ref={businessInputRef}
                      type="text"
                      placeholder="e.g. Apex Tech Solutions..."
                      value={inputBusiness}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      onChange={(e) => {
                        setInputBusiness(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-base sm:text-xs text-gray-900 dark:text-white focus:outline-none focus:border-primary shadow-xs transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-xs shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer pointer-events-auto shrink-0"
                  >
                    <span>Send</span>
                    <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSkipBusiness}
                    className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-primary underline cursor-pointer"
                  >
                    Skip (I am an individual / freelance provider)
                  </button>
                </div>
              </form>
            )}

            {/* Step 7: Phone Number Input WITH COUNTRY CODE PICKER */}
            {step === 7 && (
              <form onSubmit={handlePhoneSubmit} className="space-y-2">
                {errorMsg && (
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {/* Interactive Country Code Selector */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-1.5 px-3 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-xs hover:border-primary transition-all cursor-pointer"
                      title="Select Country Code"
                    >
                      <span className="text-sm">{selectedCountry?.flag || "ðŸ‡¶ðŸ‡¦"}</span>
                      <span className="font-mono text-xs">{selectedCountry?.code || "+974"}</span>
                      <ChevronDownIcon className="w-3.5 h-3.5 text-gray-400" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute bottom-full mb-1 left-0 w-60 max-h-52 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 p-1 space-y-0.5">
                        <div className="px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          Select Country Code
                        </div>
                        {COUNTRY_OPTIONS.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setShowCountryDropdown(false);
                            }}
                            className={`w-full px-2.5 py-1.5 rounded-lg text-left text-xs flex items-center justify-between hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer ${
                              selectedCountry?.id === c.id ? "bg-primary/10 text-primary font-bold" : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            <span className="flex items-center gap-2 truncate">
                              <span>{c.flag}</span>
                              <span className="truncate">{c.name}</span>
                            </span>
                            <span className="font-mono text-[11px] text-gray-400 font-semibold shrink-0 ml-1">{c.code}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phone input */}
                  <div className="relative flex-1 min-w-0">
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="5555 1234"
                      value={inputPhone}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      onChange={(e) => {
                        const sanitized = e.target.value.replace(/[^\d\s-]/g, "");
                        setInputPhone(sanitized);
                        if (errorMsg) setErrorMsg("");
                      }}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-base sm:text-xs text-gray-900 dark:text-white focus:outline-none focus:border-primary shadow-xs transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={!inputPhone.trim()}
                    className="px-4 py-2.5 bg-primary hover:bg-primary/90 disabled:opacity-50 text-white rounded-lg font-bold text-xs shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer pointer-events-auto shrink-0"
                  >
                    <span>Send</span>
                    <PaperAirplaneIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 8: Email Address Input */}
            {step === 8 && (
              <form onSubmit={handleFinalSubmit} className="space-y-2">
                {errorMsg && (
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
                <div className="flex flex-row items-center gap-2">
                  <div className="relative flex-1 min-w-0">
                    <input
                      ref={emailInputRef}
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={inputEmail}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      onChange={(e) => {
                        setInputEmail(e.target.value);
                        if (errorMsg) setErrorMsg("");
                      }}
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-base sm:text-xs text-gray-900 dark:text-white focus:outline-none focus:border-primary shadow-xs transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || !inputEmail.trim()}
                    className="px-3.5 sm:px-4 py-2.5 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-500 disabled:opacity-60 text-white rounded-lg font-bold text-xs shadow-md shadow-primary/25 flex items-center justify-center gap-1.5 transition-all cursor-pointer pointer-events-auto shrink-0"
                  >
                    {loading ? (
                      <ArrowPathIcon className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span className="hidden sm:inline">Confirm Pre-Registration</span>
                        <span className="sm:hidden">Confirm</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </motion.div>

      {/* Delightful Thank You Modal in Livi Leads palette that pops up upon submission and auto-dismisses in 3 seconds */}
      <ThankYouGreetingModal
        isOpen={showThankYouGreeting}
        onClose={() => setShowThankYouGreeting(false)}
        name={successData?.full_name || fullName}
        vipNumber={successData?.vip_number || "VIP #0042"}
        duration={3000}
      />
    </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
