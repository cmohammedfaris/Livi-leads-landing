"use client";

import {
  Sparkles,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Star,
  Briefcase,
  Download,
  BellRing,
  ArrowRight,
  Video,
  FileCheck2,
  Send,
  Zap,
} from "lucide-react";

export default function CustomerCardIllustration({ id, isTall, isWide }) {
  switch (id) {
    /* -------------------------------------------------------------
       1. DASHBOARD (Tall, row-span-2)
       Customer command center with active orders and ETA
    ------------------------------------------------------------- */
    case "dashboard":
      return (
        <div className="w-full flex flex-col justify-center gap-3 py-2 select-none">
          {/* Welcome Pill */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-600 block">Personal Portal</span>
              <span className="text-base font-extrabold text-slate-900 block mt-0.5">Welcome, Alex 👋</span>
            </div>
            <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-[#8B5CF6]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Active Service Order Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800">Home AC Deep Cleaning</span>
              <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-ping" /> Live ETA
              </span>
            </div>

            {/* Technician assigned info */}
            <div className="flex items-center gap-2 p-2 bg-slate-50/80 rounded-xl mb-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white font-bold text-[10px] flex items-center justify-center">
                VP
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-slate-800 block truncate">Technician Vikram P.</span>
                <span className="text-[9px] text-slate-600">Arriving in approx 18 mins</span>
              </div>
            </div>

            {/* Stepper bar */}
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#8B5CF6] h-full rounded-full w-3/4" />
            </div>

            {/* Reward Points */}
            <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-100 text-[10px]">
              <span className="text-slate-600">Active Bookings: 2</span>
              <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                ✨ 350 Livi Coins
              </span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       2. TASKS & OPERATIONS TRACKING (Wide, col-span-2)
       Customer appointment and booking tracker
    ------------------------------------------------------------- */
    case "tasks":
      return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 select-none">
          {/* Appointment 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">AC Maintenance Visit</span>
                  <span className="text-[10px] text-slate-600">Apex Services Ltd</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Confirmed
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
              <span>Today, 3:30 PM • Onsite Technician</span>
            </div>
          </div>

          {/* Appointment 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-purple-100 text-[#8B5CF6] flex items-center justify-center shrink-0">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Interior Design Video Call</span>
                  <span className="text-[10px] text-slate-600">Studio Craft</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                Link Ready
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
              <Clock className="w-3 h-3 text-indigo-500 shrink-0" />
              <span>Tomorrow, 11:00 AM • Google Meet</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       3. USER DOCUMENT HUB (Single, 1x1)
       Secure personal files and verification status
    ------------------------------------------------------------- */
    case "documents":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#8B5CF6] flex items-center justify-center">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-800 block truncate">Govt_ID_Proof.pdf</span>
                  <span className="text-[10px] text-slate-600">Encrypted Cloud Vault</span>
                </div>
              </div>
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px]">
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Verified by Vendor ✓
              </span>
              <span className="text-slate-600">Protected</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       4. ENQUIRY SUBMISSION (Single, 1x1)
       Direct customer enquiry submission widget
    ------------------------------------------------------------- */
    case "enquiries":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800">Quick Service Enquiry</span>
              <Zap className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div className="bg-slate-50 p-2 rounded-xl text-[11px] text-slate-600 flex items-center justify-between mb-2">
              <span className="font-medium truncate">Solar Rooftop Setup</span>
              <span className="text-[9px] font-bold text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">3 Matches</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-emerald-600 font-semibold">
              <span>⚡ Average response: &lt; 5 mins</span>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       5. SERVICE & BUSINESS DIRECTORY (Wide, col-span-2)
       Browse verified businesses cards with ratings
    ------------------------------------------------------------- */
    case "directory":
      return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 select-none">
          {/* Provider 1 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#8B5CF6] flex items-center justify-center font-bold text-xs shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800 block truncate">Apex Electricals</span>
                <span className="text-[10px] text-slate-600 block">Indiranagar • 1.2 km</span>
                <div className="flex items-center gap-1 mt-0.5 text-[10px]">
                  <span className="font-bold text-amber-500 flex items-center">
                    <Star className="w-2.5 h-2.5 fill-current mr-0.5" /> 4.9
                  </span>
                  <span className="text-slate-600">(148 reviews)</span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 shrink-0">
              Verified Pro
            </span>
          </div>

          {/* Provider 2 */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-[#5B5CE6] flex items-center justify-center font-bold text-xs shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800 block truncate">Nexus Tech Solutions</span>
                <span className="text-[10px] text-slate-600 block">Koramangala • 2.5 km</span>
                <div className="flex items-center gap-1 mt-0.5 text-[10px]">
                  <span className="font-bold text-amber-500 flex items-center">
                    <Star className="w-2.5 h-2.5 fill-current mr-0.5" /> 4.8
                  </span>
                  <span className="text-slate-600">(92 reviews)</span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 shrink-0">
              Instant Book
            </span>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       6. JOBS & CAREERS (Tall, row-span-2)
       Job discovery and real-time application tracker
    ------------------------------------------------------------- */
    case "jobs":
      return (
        <div className="w-full flex flex-col justify-center py-2 select-none">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-xs flex flex-col gap-3">
            {/* Header / Role */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-2.5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 block">Open Opportunity</span>
                <span className="text-xs font-extrabold text-slate-900">Operations Specialist</span>
                <span className="text-[10px] text-slate-600 block">Livi Partner Network • Bangalore</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                Active Role
              </span>
            </div>

            {/* Compensation & Tags */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                ₹35k - ₹50k/mo
              </span>
              <span className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md">
                Full-time
              </span>
              <span className="text-[10px] font-medium text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md">
                Hybrid
              </span>
            </div>

            {/* Application Timeline Stepper */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <span className="text-[10px] font-bold text-slate-700 block">Application Progress</span>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Application Submitted
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> Profile Shortlisted
                </div>
                <div className="flex items-center gap-1.5 text-[#8B5CF6] font-bold bg-purple-50 p-1.5 rounded-lg">
                  <Clock className="w-3 h-3" /> Interview: Tomorrow, 2:30 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       7. QUOTATION RECEIVER (Single, 1x1)
       Quotation review card with Accept action
    ------------------------------------------------------------- */
    case "quotations":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800">Quotation #QT-812</span>
              <span className="text-[9px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                Received
              </span>
            </div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-[10px] text-slate-600">Urban Interior Decor</span>
              <span className="text-sm font-extrabold text-slate-900">₹14,500</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex-1 py-1 bg-[#8B5CF6] text-white text-[10px] font-bold rounded-lg shadow-2xs hover:bg-purple-700 transition-colors">
                Accept & Pay
              </button>
              <button className="px-2 py-1 bg-slate-100 text-slate-700 text-[10px] font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                Details
              </button>
            </div>
          </div>
        </div>
      );

    /* -------------------------------------------------------------
       8. NOTIFICATIONS (Single, 1x1)
       Live push and email notifications
    ------------------------------------------------------------- */
    case "notifications":
      return (
        <div className="w-full flex items-center justify-center py-1 select-none">
          <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-100 shadow-xs">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#8B5CF6] flex items-center justify-center shrink-0 mt-0.5">
                <BellRing className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 truncate">Technician Arrival</span>
                  <span className="text-[9px] text-slate-600">Just now</span>
                </div>
                <p className="text-[10px] text-slate-600 truncate mt-0.5">
                  &ldquo;Vikram has reached your gate.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

