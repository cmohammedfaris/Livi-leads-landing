"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  Tag,
  MapPin,
  ShoppingBag,
  Monitor,
  FileText,
  Rocket,
  Camera,
  UserPlus,
  ShieldCheck,
  Smartphone,
  Server,
  BarChart3,
  Megaphone,
  Code,
  Check,
  X,
  ArrowRight,
  Filter,
  RotateCcw,
  Building2,
  PhoneCall,
  BadgePercent,
  CheckCircle2,
} from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";
import { openPreRegistrationModal } from "@/utils/tracking";
import { fetchPublicLandingServices } from "@/api/modules/publicServiceApi";

export const ALL_SERVICES = [
  {
    id: 1,
    title: "E-Commerce Web Store Development & Launch",
    category: "Web & Software Development",
    subCategory: "E-COMMERCE WEB SOLUTIONS",
    description: "Full-fledged e-commerce store with high-converting landing pages, payment gateway, and inventory sync.",
    provider: "Apex Digital Innovations",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹8,500.00",
    originalPrice: "₹11,000.00",
    numericPrice: 8500,
    originalNumericPrice: 11000,
    hasDiscount: true,
    discountPercent: 23,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: Monitor,
    deliverables: [
      "Custom responsive storefront design",
      "Integrated payment gateway & checkout",
      "Real-time inventory management sync",
      "Automated order notification emails & SMS",
      "Mobile-optimized progressive web view",
    ],
  },
  {
    id: 2,
    title: "Private Limited Company GST Registration & Filing",
    category: "Business & Accounting Services",
    subCategory: "TAX & COMPLIANCE",
    description: "Hassle-free GST registration, documentation review, monthly filings, and end-to-end statutory compliance.",
    provider: "Prime Tax Consultants",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹5,500.00",
    originalPrice: "₹7,500.00",
    numericPrice: 5500,
    originalNumericPrice: 7500,
    hasDiscount: true,
    discountPercent: 27,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    icon: FileText,
    deliverables: [
      "End-to-end GST certificate registration",
      "Documentation & verification review",
      "First 3 months GSTR-1 & GSTR-3B filings",
      "Dedicated chartered accountant support",
      "Statutory compliance health report",
    ],
  },
  {
    id: 3,
    title: "Brand Identity & Performance Marketing",
    category: "Digital Marketing & SEO",
    subCategory: "GROWTH MARKETING",
    description: "Full-funnel brand design, high-converting social campaigns, and multi-channel ROAS optimization.",
    provider: "GrowthX Media",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹14,500.00",
    originalPrice: "₹18,000.00",
    numericPrice: 14500,
    originalNumericPrice: 18000,
    hasDiscount: true,
    discountPercent: 19,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-orange-500 via-red-500 to-rose-600",
    icon: Rocket,
    deliverables: [
      "Brand style guide & typography kit",
      "Logo suite in SVG, PNG & print vector formats",
      "3 high-converting Meta & Google ad campaigns",
      "Target audience persona research",
      "Bi-weekly ROAS performance reports",
    ],
  },
  {
    id: 4,
    title: "SEO & Organic Discovery Growth Package",
    category: "Digital Marketing & SEO",
    subCategory: "SEARCH VISIBILITY",
    description: "Technical SEO audits, keyword ranking strategies, and schema markup to rank #1 in local search.",
    provider: "Apex Digital Innovations",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹7,000.00",
    originalPrice: "₹9,000.00",
    numericPrice: 7000,
    originalNumericPrice: 9000,
    hasDiscount: true,
    discountPercent: 22,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    icon: Search,
    deliverables: [
      "Comprehensive technical SEO audit",
      "Competitor keyword gap analysis",
      "On-page meta tags & schema markup setup",
      "Google Business Profile optimization",
      "Monthly rank tracking dashboard",
    ],
  },
  {
    id: 5,
    title: "Corporate Photography & Commercial Media",
    category: "Digital Marketing & SEO",
    subCategory: "MEDIA PRODUCTION",
    description: "High-resolution product shoot, founder portraits, and promotional 4K video reel production.",
    provider: "Studio Lumina",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹12,000.00",
    originalPrice: "₹15,000.00",
    numericPrice: 12000,
    originalNumericPrice: 15000,
    hasDiscount: true,
    discountPercent: 20,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-amber-400 via-orange-500 to-red-500",
    icon: Camera,
    deliverables: [
      "Full-day on-site corporate photo shoot",
      "Up to 25 retouched high-resolution images",
      "Founder & team executive headshots",
      "Two 30-second 4K social promo reels",
      "Commercial copyright ownership license",
    ],
  },
  {
    id: 6,
    title: "End-to-End Payroll & HR Staffing Suite",
    category: "HR & Payroll",
    subCategory: "TALENT MANAGEMENT",
    description: "Automated salary disbursements, PF/ESI filing, offer letter onboarding, and contract drafting.",
    provider: "TalentPro HR Systems",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹9,500.00",
    originalPrice: "₹12,500.00",
    numericPrice: 9500,
    originalNumericPrice: 12500,
    hasDiscount: true,
    discountPercent: 24,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    icon: UserPlus,
    deliverables: [
      "Automated monthly payroll calculations",
      "PF, ESI & Professional Tax statutory compliance",
      "Standardized employment contracts & NDAs",
      "Digital onboarding & employee records vault",
      "Direct salary slip email delivery",
    ],
  },
  {
    id: 7,
    title: "Legal Due Diligence & Trademark Registration",
    category: "Business & Accounting Services",
    subCategory: "IP & LEGAL PROTECTION",
    description: "Trademark search, objection responses, NDA drafts, and partnership agreement structuring.",
    provider: "LegalShield Associates",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹6,500.00",
    originalPrice: "₹8,500.00",
    numericPrice: 6500,
    originalNumericPrice: 8500,
    hasDiscount: true,
    discountPercent: 24,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-amber-500 via-pink-500 to-purple-600",
    icon: ShieldCheck,
    deliverables: [
      "Comprehensive trademark conflict search",
      "Trademark class filing & registry tracking",
      "Legally vetted mutual NDA template",
      "Founder & co-founder agreement drafting",
      "Direct attorney consultation call",
    ],
  },
  {
    id: 8,
    title: "Custom iOS & Android Mobile Application",
    category: "Web & Software Development",
    subCategory: "NATIVE & FLUTTER APPS",
    description: "High-performance cross-platform mobile apps with native capabilities, push notifications, and analytics.",
    provider: "Apex Digital Innovations",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹22,000.00",
    originalPrice: "₹28,000.00",
    numericPrice: 22000,
    originalNumericPrice: 28000,
    hasDiscount: true,
    discountPercent: 21,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-purple-600 via-indigo-600 to-blue-600",
    icon: Smartphone,
    deliverables: [
      "React Native or Flutter cross-platform build",
      "REST API backend integration & auth",
      "Push notifications setup via FCM",
      "App Store & Google Play submission prep",
      "30-day post-launch bug warranty",
    ],
  },
  {
    id: 9,
    title: "Cloud Infrastructure & DevOps Setup",
    category: "Web & Software Development",
    subCategory: "CLOUD & SERVER OPS",
    description: "AWS/GCP infrastructure architecture, CI/CD pipeline automation, automated backups, and 99.9% uptime SLA.",
    provider: "CloudForge Labs",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹11,000.00",
    originalPrice: null,
    numericPrice: 11000,
    originalNumericPrice: null,
    hasDiscount: false,
    discountPercent: 0,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-blue-500 via-cyan-600 to-teal-600",
    icon: Server,
    deliverables: [
      "Secure AWS/GCP architecture setup",
      "Automated GitHub Actions CI/CD deployment",
      "SSL certificate & Cloudflare DNS protection",
      "Daily automated database backups",
      "24/7 server health monitoring & alerting",
    ],
  },
  {
    id: 10,
    title: "Fractional CFO & Bookkeeping Suite",
    category: "Business & Accounting Services",
    subCategory: "FINANCIAL PLANNING",
    description: "Monthly P&L reporting, unit economic modeling, investor decks, and cash flow projections.",
    provider: "Vanguard Capital Partners",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹16,500.00",
    originalPrice: "₹21,000.00",
    numericPrice: 16500,
    originalNumericPrice: 21000,
    hasDiscount: true,
    discountPercent: 21,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-teal-500 via-emerald-600 to-green-600",
    icon: BarChart3,
    deliverables: [
      "Monthly P&L, balance sheet & cash flow report",
      "Unit economics & CAC/LTV financial model",
      "Investor-ready financial projection deck",
      "Monthly 1-on-1 strategic finance consultation",
      "Expense audit & tax savings strategy",
    ],
  },
  {
    id: 11,
    title: "Multi-Channel Social Media Growth & Ads",
    category: "Digital Marketing & SEO",
    subCategory: "PAID MEDIA & CONTENT",
    description: "Meta & Google Ads management, viral short-form video creation, and weekly community management.",
    provider: "GrowthX Media",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹8,500.00",
    originalPrice: "₹11,000.00",
    numericPrice: 8500,
    originalNumericPrice: 11000,
    hasDiscount: true,
    discountPercent: 23,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-rose-500 via-pink-600 to-purple-600",
    icon: Megaphone,
    deliverables: [
      "8 branded social media graphics per month",
      "4 short-form vertical reels (Instagram/YouTube)",
      "Ad spend optimization & A/B creative testing",
      "Comment & message engagement monitoring",
      "Monthly conversion & growth report",
    ],
  },
  {
    id: 12,
    title: "Custom CRM & Third-Party API Integration",
    category: "Web & Software Development",
    subCategory: "SYSTEM AUTOMATION",
    description: "Connect WhatsApp Business API, payment gateways, and custom inventory databases seamlessly.",
    provider: "Apex Digital Innovations",
    location: "Kochi, India",
    city: "Kochi",
    price: "₹15,000.00",
    originalPrice: null,
    numericPrice: 15000,
    originalNumericPrice: null,
    hasDiscount: false,
    discountPercent: 0,
    priceType: "FIXED PRICE",
    verified: true,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    icon: Code,
    deliverables: [
      "Official WhatsApp Business API setup",
      "Razorpay/Stripe automated webhooks",
      "Custom CRM lead sync & status triggers",
      "Zapier/Make workflow automation connect",
      "Complete API documentation & handover",
    ],
  },
];

const CATEGORIES = [
  "All",
  "Web & Software Development",
  "Business & Accounting Services",
  "Digital Marketing & SEO",
  "HR & Payroll",
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "price_asc", label: "Price: Low to High" },
  { id: "price_desc", label: "Price: High to Low" },
  { id: "name_asc", label: "Name: A to Z" },
  { id: "name_desc", label: "Name: Z to A" },
];

const PRICE_PRESETS = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under_8k", label: "Under ₹8,000", min: 0, max: 8000 },
  { id: "8k_15k", label: "₹8,000 – ₹15,000", min: 8000, max: 15000 },
  { id: "above_15k", label: "Above ₹15,000", min: 15000, max: Infinity },
];

const CITIES = ["All Cities", "Kochi", "Bengaluru", "Mumbai", "Remote"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [pricePreset, setPricePreset] = useState("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  const [servicesList, setServicesList] = useState(ALL_SERVICES);
  const [categories, setCategories] = useState(CATEGORIES);
  const [, setIsLoading] = useState(false);

  const sortDropdownRef = useRef(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync URL search params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get("search");
      const cityParam = params.get("city");
      const catParam = params.get("category");
      if (searchParam) setSearchQuery(searchParam);
      if (cityParam) setSelectedCity(cityParam);
      if (catParam && CATEGORIES.includes(catParam)) setSelectedCategory(catParam);
    }

    async function loadAllServices() {
      setIsLoading(true);
      try {
        const data = await fetchPublicLandingServices({ limit: 100 });
        if (data && data.results && data.results.length > 0) {
          // Augment API services with numeric price and defaults if missing
          const augmented = data.results.map((item, idx) => {
            const rawPrice = item.price || item.base_price;
            const numeric = typeof rawPrice === "number" ? rawPrice : parseFloat(String(rawPrice || "").replace(/[^0-9.]/g, "")) || 8500;
            return {
              ...item,
              numericPrice: item.numericPrice || numeric,
              hasDiscount: item.hasDiscount ?? (item.originalPrice ? true : false),
              city: item.city || item.company_city || "Kochi",
              deliverables: item.deliverables || [
                "Full project delivery & milestone tracker",
                "Direct communication with verified vendor",
                "Transparent invoice & milestone approvals",
                "Customer satisfaction assurance",
              ],
              icon: item.icon || ALL_SERVICES[idx % ALL_SERVICES.length]?.icon || Monitor,
              gradient: item.gradient || ALL_SERVICES[idx % ALL_SERVICES.length]?.gradient || "from-blue-600 via-indigo-600 to-purple-600",
            };
          });
          setServicesList(augmented);
          if (data.categories && data.categories.length > 1) {
            setCategories(["All", ...data.categories.filter((c) => c !== "All")]);
          }
        }
      } catch (e) {
        console.warn("Using fallback services on /services page", e?.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadAllServices();
  }, []);

  // Calculate active filter count for badge
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (discountOnly) count++;
    if (selectedCity !== "All Cities") count++;
    if (pricePreset !== "all") count++;
    if (verifiedOnly) count++;
    return count;
  }, [selectedCategory, discountOnly, selectedCity, pricePreset, verifiedOnly]);

  // Reset all filters to default
  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setDiscountOnly(false);
    setSelectedCity("All Cities");
    setPricePreset("all");
    setVerifiedOnly(false);
    setSortBy("featured");
  };

  // Filter and Sort Services
  const filteredAndSortedServices = useMemo(() => {
    const selectedPresetObj = PRICE_PRESETS.find((p) => p.id === pricePreset) || PRICE_PRESETS[0];

    const result = servicesList.filter((svc) => {
      const title = svc.title || svc.name || "";
      const category = svc.category || svc.category_name || "";
      const subCategory = svc.subCategory || svc.sub_category_name || "";
      const provider = svc.provider || svc.company_name || "";
      const location = svc.location || svc.company_city || "";
      const city = svc.city || svc.company_city || "";

      // 1. Category Filter
      const matchesCategory =
        selectedCategory === "All" || category === selectedCategory;

      // 2. Search Query
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query) ||
        subCategory.toLowerCase().includes(query) ||
        provider.toLowerCase().includes(query) ||
        location.toLowerCase().includes(query) ||
        (svc.description && svc.description.toLowerCase().includes(query));

      // 3. Discount Filter
      const isDiscounted =
        svc.hasDiscount ||
        (svc.originalPrice && svc.price && svc.originalPrice !== svc.price);
      const matchesDiscount = !discountOnly || isDiscounted;

      // 4. City / Location Filter
      const matchesCity =
        selectedCity === "All Cities" ||
        city.toLowerCase().includes(selectedCity.toLowerCase()) ||
        location.toLowerCase().includes(selectedCity.toLowerCase());

      // 5. Price Preset Filter
      const numPrice = svc.numericPrice || 8500;
      const matchesPrice =
        numPrice >= selectedPresetObj.min && numPrice <= selectedPresetObj.max;

      // 6. Verified Only Filter
      const matchesVerified = !verifiedOnly || svc.verified !== false;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesDiscount &&
        matchesCity &&
        matchesPrice &&
        matchesVerified
      );
    });

    // Sorting logic
    return result.sort((a, b) => {
      const priceA = a.numericPrice || 8500;
      const priceB = b.numericPrice || 8500;
      const titleA = (a.title || a.name || "").toLowerCase();
      const titleB = (b.title || b.name || "").toLowerCase();

      switch (sortBy) {
        case "price_asc":
          return priceA - priceB;
        case "price_desc":
          return priceB - priceA;
        case "name_asc":
          return titleA.localeCompare(titleB);
        case "name_desc":
          return titleB.localeCompare(titleA);
        case "featured":
        default:
          return (a.id || 0) - (b.id || 0);
      }
    });
  }, [
    servicesList,
    selectedCategory,
    searchQuery,
    discountOnly,
    selectedCity,
    pricePreset,
    verifiedOnly,
    sortBy,
  ]);

  const currentSortLabel =
    SORT_OPTIONS.find((s) => s.id === sortBy)?.label || "Featured";

  return (
    <>
      <BackgroundBlobs />

      <div className="min-h-screen pt-4 sm:pt-6 pb-20 overflow-hidden">
        {/* HEADER SECTION */}
        <section className="relative z-10 px-4 pt-6 sm:pt-10 pb-6 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3"
          >
            All Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-8 font-normal"
          >
            Explore business-class service packages from verified providers
          </motion.p>

          {/* SEARCH & FILTER TOOLBAR (Exact matching PDF Layout) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-pill rounded-2xl md:rounded-full p-2.5 sm:p-2 sm:pl-4 shadow-sm border border-slate-200/80 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2.5 sm:gap-3"
          >
            {/* Search Input with Clear Button */}
            <div className="flex items-center gap-2.5 flex-1 w-full text-slate-600 px-2 sm:px-1">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, categories, or providers..."
                className="w-full bg-transparent focus:outline-none text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills Controls */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 w-full md:w-auto shrink-0 justify-start md:justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-200/50">
              {/* SORT DROPDOWN */}
              <div className="relative" ref={sortDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                    isSortOpen || sortBy !== "featured"
                      ? "border-[#5B04C5] text-[#5B04C5] bg-indigo-50/70"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{currentSortLabel}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                      isSortOpen ? "rotate-180 text-[#5B04C5]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isSortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-1.5 z-50 text-left overflow-hidden"
                    >
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Sort By
                      </div>
                      {SORT_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => {
                            setSortBy(opt.id);
                            setIsSortOpen(false);
                          }}
                          className={`w-full px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                            sortBy === opt.id
                              ? "bg-indigo-50/80 text-[#5B04C5] font-bold"
                              : "text-slate-700 hover:bg-slate-50 font-medium"
                          }`}
                        >
                          <span>{opt.label}</span>
                          {sortBy === opt.id && (
                            <Check className="w-3.5 h-3.5 text-[#5B04C5]" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* DISCOUNT TOGGLE BUTTON */}
              <button
                type="button"
                onClick={() => setDiscountOnly(!discountOnly)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                  discountOnly
                    ? "bg-indigo-50 border-[#5B04C5] text-[#5B04C5] shadow-2xs font-bold"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
                title="Toggle packages with active discounts"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>% Discount</span>
              </button>

              {/* ADVANCED FILTERS MODAL BUTTON */}
              <button
                type="button"
                onClick={() => setIsFiltersModalOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                  activeFiltersCount > 0
                    ? "bg-indigo-50 border-[#5B04C5] text-[#5B04C5]"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-[#5B04C5] text-white text-[10px] flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          {/* HORIZONTAL CATEGORY PILLS (Scrollable on mobile, matching PDF exactly) */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-6 overflow-x-auto sm:flex-wrap no-scrollbar pb-2 px-1 max-w-full">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ACTIVE FILTER CHIPS ROW (shown when any filter is active) */}
          {activeFiltersCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center flex-wrap gap-2 mt-4 text-xs"
            >
              <span className="text-slate-400 font-medium">Active filters:</span>
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {discountOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-50 text-[#5B04C5] font-medium border border-indigo-100">
                  Discounted Only
                  <button
                    onClick={() => setDiscountOnly(false)}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCity !== "All Cities" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  City: {selectedCity}
                  <button
                    onClick={() => setSelectedCity("All Cities")}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {pricePreset !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                  {PRICE_PRESETS.find((p) => p.id === pricePreset)?.label}
                  <button
                    onClick={() => setPricePreset("all")}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {verifiedOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-100">
                  Verified Only
                  <button
                    onClick={() => setVerifiedOnly(false)}
                    className="hover:text-red-500"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-slate-500 hover:text-slate-800 underline font-semibold ml-1 cursor-pointer"
              >
                Reset all
              </button>
            </motion.div>
          )}
        </section>

        {/* RESULTS COUNT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 mb-6">
          <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
            <span className="text-xs font-semibold text-slate-500">
              Showing {filteredAndSortedServices.length} {filteredAndSortedServices.length === 1 ? "service" : "services"}
              {discountOnly ? " (Discounted)" : ""}
            </span>
            {filteredAndSortedServices.length > 0 && (
              <span className="text-xs text-slate-400 hidden sm:inline">
                Click any package to view deliverables & enquiry
              </span>
            )}
          </div>
        </section>

        {/* SERVICES GRID (Exact 3-Column Grid matching PDF) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
          {filteredAndSortedServices.length === 0 ? (
            /* EMPTY STATE */
            <div className="text-center py-20 px-4 bg-white/70 rounded-3xl border border-dashed border-slate-300 max-w-lg mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 text-[#5B04C5] flex items-center justify-center">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                No matching services found
              </h3>
              <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
                Try adjusting your search keywords, clearing your filters, or browsing all service categories.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-primary-gradient text-white text-xs font-bold shadow-md cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredAndSortedServices.map((service, index) => {
                const IconComp = service.icon || Monitor;
                const gradient =
                  service.gradient ||
                  "from-blue-600 via-indigo-600 to-purple-600";

                return (
                  <motion.div
                    key={service.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    onClick={() => setSelectedServiceForModal(service)}
                    className="glass-card rounded-[28px] transition-all overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-indigo-300/60 cursor-pointer bg-white"
                  >
                    {/* Top Visual Card Banner with Gradient & Line Icon */}
                    <div
                      className={`relative h-44 bg-gradient-to-tr ${gradient} flex items-center justify-center p-6 overflow-hidden`}
                    >
                      {/* Ambient background glow inside header */}
                      <div className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-[1px]" />

                      {/* Central Line Icon in Glass Container */}
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
                        <IconComp className="w-8 h-8 stroke-[1.75]" />
                      </div>

                      {/* Discount Tag Badge (if discounted) */}
                      {service.hasDiscount && service.discountPercent && (
                        <div className="absolute top-3.5 right-3.5 z-10 bg-white/95 text-slate-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider backdrop-blur-sm">
                          <Tag className="w-2.5 h-2.5 text-[#5B04C5]" />
                          <span>{service.discountPercent}% OFF</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-3">
                          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                            {service.category || service.category_name}
                          </span>
                          {(service.subCategory || service.sub_category_name) && (
                            <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                              {service.subCategory || service.sub_category_name}
                            </span>
                          )}
                          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wide">
                            <MapPin className="w-2.5 h-2.5" />
                            IN YOUR LOCATION
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-[#5B04C5] transition-colors">
                          {service.title || service.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Provider & Location */}
                        <div className="space-y-1.5 text-xs text-slate-500 mb-5">
                          <div className="flex items-center gap-1.5">
                            <ShoppingBag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="font-medium text-slate-600 truncate">
                              {service.provider || service.company_name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-slate-500">
                              {service.location ||
                                (service.company_city
                                  ? `${service.company_city}, ${
                                      service.company_country || "India"
                                    }`
                                  : "India")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Price Section */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            {service.priceType ||
                              (service.price_type === "range"
                                ? "STARTING AT"
                                : "FIXED PRICE")}
                          </div>
                          <div className="flex items-baseline gap-1.5">
                            {service.originalPrice && (
                              <span className="text-xs line-through text-slate-400">
                                {service.originalPrice}
                              </span>
                            )}
                            <span className="text-base font-extrabold text-slate-900">
                              {service.price ||
                                (service.base_price
                                  ? `₹${parseFloat(service.base_price).toLocaleString("en-IN")}`
                                  : "Contact for price")}
                            </span>
                          </div>
                        </div>

                        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                          Verified Package
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* BOTTOM CTA CARD */}
        <CTACard
          className="mt-6 sm:mt-10"
          title="Start your Livi Leads journey today"
          subtitle="Set up in minutes — no training, no onboarding calls needed."
          primaryText="Pre-Register for Early Access"
          onPrimaryClick={openPreRegistrationModal}
          secondaryText="Join as a Customer"
          secondaryHref="/customer"
        />
      </div>

      {/* =========================================================================
          FILTERS MODAL / SLIDE-OVER (Drawer)
      ========================================================================== */}
      <AnimatePresence>
        {isFiltersModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFiltersModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#5B04C5] flex items-center justify-center">
                    <Filter className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg">
                    Filter Services
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="text-xs text-slate-400 hover:text-slate-700 font-semibold px-2 py-1"
                  >
                    Reset All
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFiltersModalOpen(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 overflow-y-auto space-y-6 flex-1 text-left">
                {/* 1. Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedCategory === cat
                            ? "bg-slate-900 text-white shadow-xs"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Price Range */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRICE_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setPricePreset(preset.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left ${
                          pricePreset === preset.id
                            ? "bg-indigo-50 border-[#5B04C5] text-[#5B04C5]"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Location / City */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Location / City
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CITIES.map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setSelectedCity(city)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          selectedCity === city
                            ? "bg-[#5B04C5] border-[#5B04C5] text-white"
                            : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Special Criteria */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Package Features
                  </label>

                  {/* Discount toggle */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <BadgePercent className="w-4 h-4 text-[#5B04C5]" />
                      <span className="text-xs font-semibold text-slate-800">
                        Discounted Packages Only
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={discountOnly}
                      onChange={(e) => setDiscountOnly(e.target.checked)}
                      className="w-4 h-4 rounded text-[#5B04C5] focus:ring-[#5B04C5]"
                    />
                  </label>

                  {/* Verified toggle */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200/80 cursor-pointer hover:bg-slate-100/70 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-semibold text-slate-800">
                        Verified Business Packages Only
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                    />
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setIsFiltersModalOpen(false)}
                  className="flex-1 py-2.5 rounded-full btn-primary-gradient text-white text-xs font-bold shadow-md cursor-pointer text-center"
                >
                  Apply Filters ({filteredAndSortedServices.length} Results)
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          SERVICE PACKAGE DETAIL & ENQUIRY MODAL
      ========================================================================== */}
      <AnimatePresence>
        {selectedServiceForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedServiceForModal(null)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[92vh]"
            >
              {/* Header Gradient */}
              <div
                className={`relative h-32 bg-gradient-to-tr ${
                  selectedServiceForModal.gradient || "from-blue-600 to-indigo-600"
                } p-6 flex items-center justify-between text-white`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-inner">
                    {(() => {
                      const Icon = selectedServiceForModal.icon || Monitor;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                      {selectedServiceForModal.category}
                    </span>
                    <h3 className="font-extrabold text-white text-sm sm:text-base leading-tight">
                      Package Details
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-left flex-1">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {selectedServiceForModal.category}
                    </span>
                    {selectedServiceForModal.subCategory && (
                      <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {selectedServiceForModal.subCategory}
                      </span>
                    )}
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 uppercase">
                      <MapPin className="w-2.5 h-2.5" />
                      {selectedServiceForModal.location}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">
                    {selectedServiceForModal.title}
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {selectedServiceForModal.description}
                  </p>
                </div>

                {/* Provider info box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#5B04C5] shadow-2xs">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        {selectedServiceForModal.provider}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {selectedServiceForModal.location}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                    Verified Vendor
                  </span>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What&apos;s Included In This Package
                  </h4>
                  <ul className="space-y-2">
                    {(selectedServiceForModal.deliverables || [
                      "Full scope implementation & milestone tracker",
                      "Direct line with designated service specialist",
                      "Formal invoice & milestone payment release",
                      "Platform-backed quality assurance",
                    ]).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-700"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Box */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5B04C5]">
                      Package Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      {selectedServiceForModal.originalPrice && (
                        <span className="text-xs line-through text-slate-400">
                          {selectedServiceForModal.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-extrabold text-slate-900">
                        {selectedServiceForModal.price}
                      </span>
                    </div>
                  </div>
                  {selectedServiceForModal.discountPercent && (
                    <span className="px-3 py-1 rounded-full bg-[#5B04C5] text-white text-xs font-extrabold shadow-sm">
                      Save {selectedServiceForModal.discountPercent}%
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="px-5 py-3 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServiceForModal(null);
                    openPreRegistrationModal();
                  }}
                  className="flex-1 py-3 rounded-full btn-primary-gradient text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Quote & Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
