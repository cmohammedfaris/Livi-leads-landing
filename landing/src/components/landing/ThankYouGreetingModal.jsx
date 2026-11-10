"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ThankYouGreetingModal({
  isOpen,
  onClose,
  name = "Friend",
  vipNumber = "VIP #0042",
  duration = 3000, // 3 seconds display with smooth auto-dismiss
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  if (!mounted) return null;

  const firstName = name ? name.trim().split(" ")[0] : "Friend";

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-slate-950/45 backdrop-blur-sm select-none"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-white/95 dark:bg-[#151621]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(107,76,230,0.22)] border border-white/90 dark:border-slate-800 text-left overflow-hidden"
          >
          {/* Subtle brand ambient glow at the top right */}
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-[#6B4CE6]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Top Row: Brand check badge + Founding pill + Close button */}
          <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B4CE6] to-[#8B5CF6] text-white flex items-center justify-center shadow-md shadow-indigo-500/25 shrink-0">
                <Check className="w-5 h-5 stroke-[2.6]" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/60 text-[#6B4CE6] dark:text-purple-300 font-bold text-[11px] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B4CE6] dark:bg-purple-400" />
                <span>Founding Member Confirmed</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Heading with genuine appreciation */}
          <div className="space-y-2 mb-5 relative z-10">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Thank You, <span className="text-[#6B4CE6] dark:text-[#8B5CF6]">{firstName}!</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              We&apos;re truly thrilled to have you with us in the founding cohort of{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">Livi Leads</strong>. You&apos;ve unlocked{" "}
              <strong className="text-[#6B4CE6] dark:text-purple-400 font-semibold">0% launch fees</strong> and priority concierge onboarding on release.
            </p>
          </div>

          {/* Perks & VIP Ticket details block */}
          <div className="p-3.5 rounded-xl bg-[#F8F9FE] dark:bg-slate-900/60 border border-indigo-100/90 dark:border-indigo-950/80 text-xs space-y-2.5 mb-5 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400 font-medium">VIP Queue Ticket</span>
              <span className="font-mono font-bold text-[#6B4CE6] dark:text-purple-400 text-xs px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-200/70 dark:border-purple-800/60 shadow-2xs">
                {vipNumber}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400 font-medium">Launch Perks</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                0% Platform Fee &amp; Verified Priority
              </span>
            </div>
          </div>

          {/* 3-second animated countdown progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3.5 relative z-10">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#6B4CE6] to-[#8B5CF6]"
            />
          </div>

          {/* Bottom Action Row */}
          <div className="flex items-center justify-between text-xs relative z-10">
            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium">
              Closing in 3 seconds
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full btn-primary-gradient text-white text-xs font-bold shadow-md shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
