"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskRejectModal({
  isOpen,
  onClose,
  onReject,
  loading = false,
}) {
  const [rejectReason, setRejectReason] = useState("");
  const [error, setError] = useState("");

  const handleReject = () => {
    if (!rejectReason.trim()) {
      setError("Please enter a reason for rejection.");
      return;
    }
    setError("");
    onReject(rejectReason.trim());
  };

  const handleClose = () => {
    if (loading) return;
    setRejectReason("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/30 backdrop-blur-[6px]"
          onClick={handleClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white dark:bg-darksecondary rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center w-[90vw] max-w-[524px] p-8"
        >
          {/* Red Circle Icon */}
          <div className="w-20 h-20 bg-[#EF2929] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#EF2929]/30 transition-transform hover:scale-105">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 10L10 30M10 10L30 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="20"
                cy="20"
                r="16.5"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-[#212844] dark:text-white font-lato text-[20px] font-bold leading-6 text-center mb-3">
            Reject Task
          </h3>

          {/* Description */}
          <p className="text-[#9397BB] dark:text-gray-400 font-inter text-[16px] leading-[24px] text-center max-w-[444px] mb-6">
            Are you sure you want to reject this task? The assigner will be
            notified.
          </p>

          {/* Reject Reason Input */}
          <div className="w-full flex flex-col gap-2 mb-8">
            <label className="text-[#212844] dark:text-gray-300 font-lato text-[16px] font-semibold leading-5">
              Reject Reason
            </label>
            <textarea
              className={`w-full min-h-[100px] px-4 py-3 bg-white dark:bg-[#0F1724] border rounded-lg outline-none transition-all font-lato text-[16px] text-[#212844] dark:text-white placeholder:text-[#9397BB] resize-none ${
                error
                  ? "border-[#EF2929] focus:border-[#EF2929]"
                  : "border-[#DEDFEE] dark:border-gray-700 focus:border-[#EF2929]"
              }`}
              placeholder="Enter Reject Reason"
              value={rejectReason}
              onChange={(e) => {
                setRejectReason(e.target.value);
                if (error && e.target.value.trim()) setError("");
              }}
              disabled={loading}
            />
            {error && (
              <span className="text-[#EF2929] text-[13px] font-medium">
                {error}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between w-full gap-6">
            <button
              className="flex-1 h-[44px] bg-white dark:bg-gray-700 border border-[#DEDFEE] dark:border-gray-600 text-[#9397BB] dark:text-gray-300 font-lato font-bold text-[16px] rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 active:scale-95 outline-none"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="flex-1 h-[44px] bg-[#EF2929] text-white font-lato font-bold text-[16px] rounded-lg hover:bg-[#d42424] transition-all duration-200 shadow-lg shadow-[#EF2929]/25 active:scale-95 outline-none flex items-center justify-center gap-2 disabled:opacity-60"
              onClick={handleReject}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Rejecting...
                </>
              ) : (
                "Reject"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
