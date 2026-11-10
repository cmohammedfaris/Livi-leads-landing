"use client";

import {
  TrendingUp,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  FileText,
  Check,
  QrCode,
  Truck,
  Users,
  AlertCircle,
  Building2,
  Package,
  Layers,
  ArrowUpRight,
  Download,
  Calendar,
  Sparkles,
  Search,
} from "lucide-react";

export default function BusinessCardIllustration({ id, isTall, isWide }) {
  switch (id) {
    /* -------------------------------------------------------------
       1. DASHBOARD (Tall, row-span-2)
       Rich vertical miniature SaaS analytics dashboard
    ------------------------------------------------------------- */
    case "dashboard":
      return (
        <div className="w-full flex flex-col justify-center gap-3 py-2 select-none">
          {/* Mini Top Stat Card */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-600 block">Total Revenue</span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-lg font-bold text-slate-900">₹1,48,200</span>
                <span className="inline-flex items-center text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                  <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +24%
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-[#5B5CE6]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Mini Chart Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-700">Weekly Performance</span>
              <span className="text-[9px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">Live</span>
            </div>

            {/* SVG Line & Area Chart */}
            <div className="h-20 w-full relative">
              <svg viewBox="0 0 200 70" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="dashGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5B5CE6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#5B5CE6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal grid lines */}
                <line x1="0" y1="20" x2="200" y2="20" stroke="#f1f5f9" strokeDasharray="3 3" />
                <line x1="0" y1="45" x2="200" y2="45" stroke="#f1f5f9" strokeDasharray="3 3" />
                {/* Area Fill */}
                <path
                  d="M 0,55 Q 35,50 65,30 T 130,22 T 200,8 L 200,70 L 0,70 Z"
                  fill="url(#dashGrad)"
                />
                {/* Line */}
                <path
                  d="M 0,55 Q 35,50 65,30 T 130,22 T 200,8"
                  fill="none"
                  stroke="#5B5CE6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Nodes */}
                <circle cx="65" cy="30" r="3" fill="#5B5CE6" className="drop-shadow-xs" />
                <circle cx="130" cy="22" r="3" fill="#5B5CE6" className="drop-shadow-xs" />
                <circle cx="200" cy="8" r="4" fill="#5B5CE6" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>

            {/* Bottom mini metric pills */}
            <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-100 text-center">
              <div>
                <span className="text-[9px] text-slate-600 block">Leads</span>
                <span className="text-[11px] font-bold text-slate-800">142</span>
              </div>
              <div className="border-x border-slate-100">
                <span className="text-[9px] text-slate-600 block">Conversion</span>
                <span className="text-[11px] font-bold text-emerald-600">76%</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-600 block">Avg Ticket</span>
                <span className="text-[11px] font-bold text-slate-800">₹8.4k</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       2. TASKS & OPERATIONS TRACKING (Wide, col-span-2)
       Interactive tasks board with GPS and status badges
    ------------------------------------------------------------- */
    case "tasks":
      return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 select-none">
          {/* Task 1: Onsite with GPS */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs font-bold text-slate-800 truncate">Onsite Equipment Setup</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                Done
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
              <span className="truncate">Indiranagar 100ft Rd • GPS Verified</span>
            </div>
          </div>

          {/* Task 2: Scheduled Meeting */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-indigo-100 text-[#5B5CE6] flex items-center justify-center shrink-0">
                  <Clock className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span className="text-xs font-bold text-slate-800 truncate">Client Project Review</span>
              </div>
              <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full shrink-0">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between mt-2.5 text-[10px] text-slate-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#5B5CE6]" /> Today, 2:30 PM
              </span>
              <div className="flex -space-x-1.5">
                <div className="w-4 h-4 rounded-full bg-indigo-400 text-[8px] font-bold text-white flex items-center justify-center border border-white">VJ</div>
                <div className="w-4 h-4 rounded-full bg-emerald-400 text-[8px] font-bold text-white flex items-center justify-center border border-white">SK</div>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       3. DOCUMENT MANAGEMENT (Single, 1x1)
       Secure document vault preview with verification badge
    ------------------------------------------------------------- */
    case "documents":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block truncate">Vendor_SLA_2026.pdf</span>
                  <span className="text-[10px] text-slate-600">2.4 MB • Cloud Synced</span>
                </div>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            </div>
            {/* Status & Progress bar */}
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mt-1.5">
              <div className="bg-emerald-500 h-full rounded-full w-full" />
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px]">
              <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Verified & Signed</span>
              <span className="text-slate-600">100% Complete</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       4. SERVICE LISTING & PRICING (Single, 1x1)
       Interactive service pricing cards with tags
    ------------------------------------------------------------- */
    case "services":
      return (
        <div className="w-full flex flex-col gap-2 py-1 select-none">
          {/* Service Item 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Annual Maintenance AMC</span>
              <span className="text-[10px] text-indigo-600 font-semibold bg-indigo-50 px-1.5 py-0.2 rounded">B2B Tier</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-extrabold text-slate-900 block">₹24,999</span>
              <span className="text-[9px] text-slate-600">per annum</span>
            </div>
          </div>
          {/* Service Item 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-800 block">On-Demand Diagnostic</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">Instant</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-extrabold text-slate-900 block">₹1,499</span>
              <span className="text-[9px] text-slate-600">per visit</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       5. ENQUIRY MANAGEMENT (Wide, col-span-2)
       Real-time lead inquiry stream with quick action buttons
    ------------------------------------------------------------- */
    case "enquiries":
      return (
        <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 py-1 select-none">
          {/* Incoming Enquiry Bubble */}
          <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-[10px] font-bold text-white flex items-center justify-center">
                  AS
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Aarav Sharma</span>
                  <span className="text-[9px] text-slate-600">Apex Enterprise • 2 min ago</span>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                High Priority
              </span>
            </div>
            <p className="text-[11px] text-slate-600 italic bg-slate-50/80 p-2 rounded-xl">
              &ldquo;Looking for commercial CCTV and access control quote for 3 floors.&rdquo;
            </p>
          </div>

          {/* Quick Response Actions */}
          <div className="sm:w-44 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-2xl p-3 border border-indigo-100/60 flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-indigo-900">Live Response</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <button className="w-full py-1.5 px-2 bg-[#5B5CE6] text-white text-[10px] font-bold rounded-xl shadow-xs hover:bg-indigo-600 transition-colors flex items-center justify-center gap-1">
              Send Quotation <ArrowUpRight className="w-3 h-3" />
            </button>
            <span className="text-[9px] text-center text-slate-600">Avg reply time: &lt; 4m</span>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       6. QUOTATION MANAGEMENT (Tall, row-span-2)
       Professional branded quotation sheet preview
    ------------------------------------------------------------- */
    case "quotations":
      return (
        <div className="w-full flex flex-col justify-center py-2 select-none">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-xs flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">Quotation Preview</span>
                <span className="text-xs font-extrabold text-slate-900">#QT-2026-9042</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Approved ✓
              </span>
            </div>

            {/* Line items table miniature */}
            <div className="space-y-1.5 text-[11px]">
              <div className="flex justify-between items-center text-slate-600">
                <span className="truncate pr-2">1. Cloud Server Setup & SLA</span>
                <span className="font-semibold text-slate-800 shrink-0">₹18,500</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span className="truncate pr-2">2. Hardware Gateway Integration</span>
                <span className="font-semibold text-slate-800 shrink-0">₹12,000</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span className="truncate pr-2">3. 1-Year Premium Onboarding</span>
                <span className="font-semibold text-slate-800 shrink-0">₹4,500</span>
              </div>
            </div>

            {/* Divider and Total */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-slate-600 block">Total Payable</span>
                <span className="text-base font-extrabold text-slate-900">₹35,000</span>
              </div>
              <div className="px-2.5 py-1 bg-indigo-50 text-[#5B5CE6] rounded-xl text-[10px] font-bold flex items-center gap-1 border border-indigo-100">
                <Download className="w-3 h-3" /> PDF Export
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       7. INVOICE MANAGEMENT (Single, 1x1)
       Tax Invoice receipt with big green PAID badge
    ------------------------------------------------------------- */
    case "invoices":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs relative overflow-hidden">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 block">Tax Invoice</span>
                <span className="text-xs font-extrabold text-slate-900">INV-2026-081</span>
              </div>
              {/* PAID stamp */}
              <div className="px-2 py-0.5 rounded-md bg-emerald-500 text-white font-extrabold text-[10px] tracking-wider uppercase rotate-2 shadow-xs flex items-center gap-0.5">
                <Check className="w-3 h-3 stroke-[3]" /> PAID
              </div>
            </div>
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
              <span className="text-[10px] text-slate-600">Amount Received</span>
              <span className="text-sm font-extrabold text-emerald-600">₹48,250.00</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       8. PRODUCT MASTER & CATALOGUE (Single, 1x1)
       Product cards with pricing and stock units
    ------------------------------------------------------------- */
    case "products":
      return (
        <div className="w-full flex items-center justify-between gap-2 py-1 select-none">
          <div className="flex-1 bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#5B5CE6] flex items-center justify-center mb-1.5">
              <Package className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 block truncate">Office Desktop Pro</span>
            <span className="text-[9px] text-slate-600 block">SKU: PROD-001</span>
            <div className="flex justify-between items-center mt-1 pt-1 border-t border-slate-100">
              <span className="text-[10px] font-extrabold text-slate-900">₹65,000</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">24 in stock</span>
            </div>
          </div>
          <div className="flex-1 bg-white/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs">
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-bold text-slate-800 block truncate">Gigabit Router Hub</span>
            <span className="text-[9px] text-slate-600 block">SKU: PROD-004</span>
            <div className="flex justify-between items-center mt-1 pt-1 border-t border-slate-100">
              <span className="text-[10px] font-extrabold text-slate-900">₹8,990</span>
              <span className="text-[8px] font-bold text-indigo-600 bg-indigo-50 px-1 rounded">50 in stock</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       9. INVENTORY MANAGEMENT (Tall, row-span-2)
       Multi-warehouse stock indicators with progress gauges
    ------------------------------------------------------------- */
    case "inventory":
      return (
        <div className="w-full flex flex-col justify-center py-2 select-none">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">Warehouse Stock</span>
                <span className="text-xs font-extrabold text-slate-900">Main Facility (Bay 4)</span>
              </div>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                1,840 Items
              </span>
            </div>

            {/* Gauge 1: Optimal */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
                <span>Smart Sensor Hubs</span>
                <span className="font-bold text-emerald-600">88% (Healthy)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[88%]" />
              </div>
            </div>

            {/* Gauge 2: Medium */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
                <span>Fiber Transceivers</span>
                <span className="font-bold text-indigo-600">52% (Moderate)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-[#5B5CE6] h-full rounded-full w-[52%]" />
              </div>
            </div>

            {/* Gauge 3: Low alert */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-700 mb-1">
                <span>Industrial Power Units</span>
                <span className="font-bold text-amber-600 flex items-center gap-0.5">
                  <AlertCircle className="w-2.5 h-2.5" /> 14% (Restock)
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-[14%]" />
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       10. HR MANAGEMENT (Wide, col-span-2)
       Employee roster with live statuses and attendance summary
    ------------------------------------------------------------- */
    case "hr":
      return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-1 select-none">
          {/* Employee 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
              BS
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-slate-800 block truncate">Brooklyn S.</span>
              <span className="text-[10px] text-slate-600 block truncate">Project Manager</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-semibold text-emerald-600">Active</span>
              </div>
            </div>
          </div>

          {/* Employee 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
              VJ
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-slate-800 block truncate">Victor James</span>
              <span className="text-[10px] text-slate-600 block truncate">Admin Lead</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-semibold text-emerald-600">Active</span>
              </div>
            </div>
          </div>

          {/* Employee 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-100 shadow-xs flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0">
              MK
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-bold text-slate-800 block truncate">Maya Kumar</span>
              <span className="text-[10px] text-slate-600 block truncate">UX Designer</span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="text-[9px] font-semibold text-amber-600">On Leave</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       11. DIGITAL BUSINESS CARDS & QR (Single, 1x1)
       Virtual vCard with QR code scanner graphic
    ------------------------------------------------------------- */
    case "vcards":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-3 shadow-md flex items-center justify-between">
            <div>
              <span className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest block">Digital vCard</span>
              <span className="text-xs font-extrabold text-white block mt-0.5">Livi Leads Profile</span>
              <span className="text-[10px] text-slate-400 block">Tap to Exchange</span>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl p-1 shadow-xs flex items-center justify-center">
              {/* Scalable Mini QR Code Graphic */}
              <svg viewBox="0 0 24 24" className="w-full h-full text-slate-900 fill-current">
                <path d="M2 2h7v7H2V2zm2 2v3h3V4H4zm5-2h6v2H9V2zm8 0h5v7h-5V2zm2 2v3h1V4h-1zM2 15h7v7H2v-7zm2 2v3h3v-3H4zm7-2h2v2h-2v-2zm4 0h2v4h-2v-4zm-4 4h4v3h-4v-3zm6-2h3v5h-3v-5zm-2 4h1v1h-1v-1zm4-12h2v2h-2V4zm-4 4h2v2h-2V8zm-5 1h2v4h-2V9zm4 1h1v2h-1v-2z" />
              </svg>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       12. SUPPLIER & PURCHASE ORDERS (Single, 1x1)
       PO tracker with shipment delivery progress
    ------------------------------------------------------------- */
    case "suppliers":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800">PO #8841 • Apex Ltd</span>
              <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                Dispatched
              </span>
            </div>
            {/* Stepper */}
            <div className="flex items-center justify-between gap-1 text-[9px] text-slate-600 mt-2">
              <div className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3 h-3" /> Ordered
              </div>
              <div className="flex-1 h-0.5 bg-emerald-400" />
              <div className="flex items-center gap-1 text-indigo-600 font-bold">
                <Truck className="w-3 h-3" /> Transit
              </div>
              <div className="flex-1 h-0.5 bg-slate-200" />
              <div className="text-slate-600 font-medium">Delivery</div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

