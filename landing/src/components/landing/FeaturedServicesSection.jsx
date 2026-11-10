"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  FileText,
  Rocket,
  Search,
  Camera,
  UserPlus,
  ArrowRight,
  ShoppingBag,
  MapPin,
  Sparkles,
  SlidersHorizontal,
  Loader2,
} from "lucide-react";
import { fetchPublicLandingServices } from "@/api/modules/publicServiceApi";

// Curated fallbacks in case network/offline during build
const FALLBACK_CATEGORIES = [
  "All",
  "Business & Accounting Services",
  "Cloud, DevOps & Security",
  "Corporate & PRO Services",
  "Digital Marketing & SEO",
  "Web & Software Development",
  "HR & Payroll",
];

const FALLBACK_SERVICES = [
  {
    id: 1,
    name: "E-Commerce Web Store Development & Launch",
    category_name: "Web & Software Development",
    sub_category_name: "E-COMMERCE WEB SOLUTIONS",
    description:
      "Full-fledged e-commerce store with high-converting landing pages, payment gateway, and inventory sync.",
    company_name: "Apex Digital Innovations",
    company_city: "Kochi",
    company_country: "India",
    company_currency: "INR",
    base_price: "8500.00",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: Monitor,
  },
  {
    id: 2,
    name: "Private Limited Company GST Registration & Filing",
    category_name: "Business & Accounting Services",
    sub_category_name: "TAX & COMPLIANCE",
    description:
      "Hassle-free GST registration, documentation review, monthly filings, and end-to-end statutory compliance.",
    company_name: "Prime Tax Consultants",
    company_city: "Kochi",
    company_country: "India",
    company_currency: "INR",
    base_price: "8500.00",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    icon: FileText,
  },
  {
    id: 3,
    name: "Brand Identity & Performance Marketing",
    category_name: "Digital Marketing & SEO",
    sub_category_name: "GROWTH MARKETING",
    description:
      "Full-funnel brand design, high-converting social campaigns, and multi-channel ROAS optimization.",
    company_name: "GrowthX Media",
    company_city: "Kochi",
    company_country: "India",
    company_currency: "INR",
    base_price: "8500.00",
    gradient: "from-orange-500 via-red-500 to-rose-600",
    icon: Rocket,
  },
  {
    id: 4,
    name: "AWS/GCP Cloud Architecture & Terraform Setup",
    category_name: "Cloud, DevOps & Security",
    sub_category_name: "DEVOPS & INFRASTRUCTURE",
    description:
      "Production-ready scalable cloud deployment, automated CI/CD pipelines, and zero-downtime architecture.",
    company_name: "NexGen Digital Lab",
    company_city: "Bangalore",
    company_country: "India",
    company_currency: "INR",
    base_price: "32000.00",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    icon: Monitor,
  },
  {
    id: 5,
    name: "SEO & Organic Discovery Growth Package",
    category_name: "Digital Marketing & SEO",
    sub_category_name: "SEARCH VISIBILITY",
    description:
      "Technical SEO audits, keyword ranking strategies, and schema markup to rank #1 in local search.",
    company_name: "Apex Digital Innovations",
    company_city: "Kochi",
    company_country: "India",
    company_currency: "INR",
    base_price: "8500.00",
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    icon: Search,
  },
  {
    id: 6,
    name: "Annual Corporate Compliance & License Renewal",
    category_name: "Corporate & PRO Services",
    sub_category_name: "LEGAL & LICENSING",
    description:
      "Statutory annual filing, license renewals, registered office compliance, and official documentation audit.",
    company_name: "Royal Oasis Corporate",
    company_city: "Dubai",
    company_country: "UAE",
    company_currency: "AED",
    base_price: "1500.00",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    icon: FileText,
  },
];

const GRADIENTS = [
  "from-blue-600 via-indigo-600 to-purple-600",
  "from-emerald-500 via-teal-600 to-cyan-700",
  "from-orange-500 via-red-500 to-rose-600",
  "from-sky-500 via-blue-600 to-indigo-700",
  "from-pink-500 via-rose-500 to-purple-600",
  "from-amber-400 via-orange-500 to-red-500",
];

const ICONS = [Monitor, FileText, Rocket, Search, Camera, UserPlus];

const POPULAR_CITIES = [
  "Kochi",
  "Dubai",
  "Bangalore",
  "Calicut",
  "Trivandrum",
  "Abu Dhabi",
  "Mumbai",
  "Sharjah",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Pune",
  "Thrissur",
  "Kottayam",
  "Kannur",
  "Doha",
  "Riyadh",
];

export default function FeaturedServicesSection() {
  const router = useRouter();
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [categories, setCategories] = useState(FALLBACK_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [city, setCity] = useState("");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalCount, setTotalCount] = useState(136);
  const [returnedCount, setReturnedCount] = useState(6);
  const [limit, setLimit] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Compute available and dynamically filtered cities
  const availableCities = Array.from(
    new Set([
      ...POPULAR_CITIES,
      ...services.map((s) => s.company_city).filter(Boolean),
    ])
  );

  const filteredCities = (
    city.trim()
      ? availableCities.filter((c) =>
          c.toLowerCase().includes(city.trim().toLowerCase())
        )
      : availableCities
  ).slice(0, 7);

  const handleSelectCity = (cityName) => {
    setCity(cityName);
    setIsCityDropdownOpen(false);
  };

  // Fetch from public API
  const loadServices = useCallback(async (search = "", cat = "All", cityQuery = "") => {
    setIsLoading(true);
    try {
      const params = { limit: 6 };
      if (search.trim()) params.search = search.trim();
      if (cat && cat !== "All") params.category = cat;
      if (cityQuery.trim()) params.city = cityQuery.trim();

      const data = await fetchPublicLandingServices(params);
      if (data && data.results && data.results.length > 0) {
        setServices(data.results);
        setTotalCount(data.total_count || 136);
        setReturnedCount(data.returned_count || data.results.length);
        setLimit(data.limit || 6);
        if (data.categories && data.categories.length > 1) {
          setCategories(data.categories);
        }
      }
    } catch (err) {
      console.warn("Using fallback curated services:", err?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadServices(searchQuery, selectedCategory, city);
  }, [loadServices, selectedCategory, city]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      loadServices(searchQuery, selectedCategory, city);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, city, loadServices]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (city.trim()) params.set("city", city.trim());
    if (selectedCategory && selectedCategory !== "All") params.set("category", selectedCategory);
    const queryStr = params.toString();
    router.push(queryStr ? `/services?${queryStr}` : "/services");
  };

  const formatPrice = (val, currency = "INR") => {
    if (!val) return "Contact for price";
    const num = parseFloat(val);
    if (isNaN(num)) return val;
    const symbol = currency === "AED" ? "AED " : "₹";
    return `${symbol}${num.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <section id="services" className="relative z-10 py-14 sm:py-20 max-w-6xl mx-auto px-4 scroll-mt-20 sm:scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
            VERIFIED SERVICES DIRECTORY &bull; LIVE PREVIEW
          </span>
          <span className="h-[1px] w-5 bg-[#5B04C5]" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          Popular Services on Livi Leads
        </h2>
        <p className="text-slate-500 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
          Browse business-class service packages from verified local service providers.
        </p>

        {/* CAPSULE SEARCH CONTAINER CARD */}
        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-4xl mx-auto rounded-full p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.06)] mt-7 mb-6"
        >
          {/* City Select Pill with Suggestions Dropdown */}
          <div ref={cityDropdownRef} className="relative w-full sm:w-1/3">
            <div className="flex items-center gap-2.5 px-5 py-3 w-full bg-slate-50/80 hover:bg-slate-50 rounded-full border border-slate-200/70 transition-colors focus-within:border-[#5B04C5]/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5B04C5]/10">
              <MapPin className="w-4 h-4 text-[#5B04C5] shrink-0" />
              <input
                type="text"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setIsCityDropdownOpen(true);
                }}
                onFocus={() => setIsCityDropdownOpen(true)}
                placeholder="Select your city"
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                autoComplete="off"
              />
              {city && (
                <button
                  type="button"
                  onClick={() => {
                    setCity("");
                    setIsCityDropdownOpen(true);
                  }}
                  className="text-slate-400 hover:text-slate-600 text-xs px-1 cursor-pointer"
                  title="Clear city"
                >
                  &times;
                </button>
              )}
            </div>

            {/* City Suggestions Dropdown */}
            <AnimatePresence>
              {isCityDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/90 shadow-xl z-50 overflow-hidden py-1.5 max-h-60 overflow-y-auto text-left"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                    <span>{city.trim() ? "Matching Cities" : "Popular Cities"}</span>
                    <span className="text-[9px] font-normal lowercase text-slate-400">click to select</span>
                  </div>
                  {filteredCities.length > 0 ? (
                    filteredCities.map((cityName) => {
                      const isSelected =
                        city.trim().toLowerCase() === cityName.toLowerCase();
                      return (
                        <button
                          key={cityName}
                          type="button"
                          onClick={() => handleSelectCity(cityName)}
                          className={`w-full text-left flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#5B04C5]/10 text-[#5B04C5] font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-[#5B04C5]"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <MapPin
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isSelected ? "text-[#5B04C5]" : "text-slate-400"
                              }`}
                            />
                            <span>{cityName}</span>
                          </div>
                          {isSelected && (
                            <span className="text-[10px] bg-[#5B04C5] text-white px-2 py-0.5 rounded-full font-medium">
                              Selected
                            </span>
                          )}
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-4 py-3 text-xs text-slate-400 text-center italic">
                      No matching cities found for &quot;{city}&quot;
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Service Search Input */}
          <div className="flex items-center gap-2.5 px-5 py-3 w-full sm:flex-1 bg-slate-50/80 hover:bg-slate-50 rounded-full border border-slate-200/70 transition-colors">
            <Search className="w-4 h-4 text-[#5B04C5] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a service..."
              className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
            />
            {isLoading && (
              <Loader2 className="w-4 h-4 text-[#5B04C5] animate-spin shrink-0" />
            )}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto partner-btn-primary px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white whitespace-nowrap flex items-center justify-center gap-2 self-stretch sm:self-auto cursor-pointer shadow-sm active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {services.map((service, index) => {
            const IconComponent =
              service.icon || ICONS[index % ICONS.length];
            const gradientClass =
              service.gradient || GRADIENTS[index % GRADIENTS.length];

            return (
              <motion.div
                key={service.id || index}
                layout
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/30 overflow-hidden flex flex-col transition-all duration-300 group"
              >
                {/* Header Gradient Banner */}
                <div
                  className={`relative h-40 bg-gradient-to-br ${gradientClass} p-4 flex flex-col justify-between overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-40 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white/95 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                      {service.price_type === "range"
                        ? "Price Range"
                        : "Fixed Price"}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-black/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                      Verified Provider
                    </span>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 stroke-[1.8]" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                      <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase truncate max-w-[170px]">
                        {service.category_name || "General Service"}
                      </span>
                      {service.sub_category_name && (
                        <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase truncate max-w-[130px]">
                          {service.sub_category_name}
                        </span>
                      )}
                      <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase">
                        <MapPin className="w-2.5 h-2.5" />
                        IN YOUR LOCATION
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base text-slate-900 leading-snug mb-2 group-hover:text-[#5B04C5] transition-colors line-clamp-2">
                      {service.name || service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                      {service.description ||
                        "Professional service package managed by verified service teams with milestone delivery and SLA guarantee."}
                    </p>

                    {/* Provider & Location */}
                    <div className="space-y-1 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate font-medium">
                          {service.company_name || service.provider || "Verified Business"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>
                          {service.company_city
                            ? `${service.company_city}, ${service.company_country || "India"}`
                            : service.location || "Kochi, India"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price info */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {service.price_type === "range" ? "STARTING AT" : "FIXED PRICE"}
                      </div>
                      <div className="text-base font-extrabold text-slate-900">
                        {formatPrice(service.base_price, service.company_currency)}
                      </div>
                    </div>

                    <Link
                      href={`/services?search=${encodeURIComponent(service.name || service.title || "")}`}
                      className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#5B04C5] bg-[#5B04C5]/10 hover:bg-[#5B04C5] hover:text-white inline-flex items-center gap-1.5 transition-all shadow-2xs hover:shadow-xs active:scale-95"
                    >
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Explore All Services CTA link */}
      <div className="mt-10 sm:mt-12 text-center">
        <Link
          href="/services"
          className="partner-btn-primary px-9 py-4 rounded-full font-bold text-xs sm:text-sm text-white shadow-md hover:shadow-indigo-500/25 transition-all inline-flex items-center gap-2 active:scale-95"
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
