"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskAcceptModal({
  isOpen,
  onClose,
  onConfirm,
  loading = false,
}) {
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
          onClick={!loading ? onClose : undefined}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white dark:bg-darksecondary rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center w-[90vw] max-w-[524px] p-8"
        >
          {/* Green Circle Icon */}
          <div className="w-20 h-20 bg-[#06B48A] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#06B48A]/30 transition-transform hover:scale-105">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.4375 20C3.4375 29.1472 10.8528 36.5625 20 36.5625C29.1472 36.5625 36.5625 29.1472 36.5625 20C36.5625 10.8528 29.1472 3.4375 20 3.4375M3.4375 20C3.4375 10.8528 10.8528 3.4375 20 3.4375M3.4375 20C3.4375 20 20 3.4375 20 3.4375"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.375 20.625L18.125 24.375L26.25 10.625"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-[#212844] dark:text-white font-lato text-[20px] font-bold leading-6 text-center mb-3">
            Confirm Acceptance
          </h3>

          {/* Description */}
          <p className="text-[#9397BB] dark:text-gray-400 font-inter text-[16px] leading-[24px] text-center max-w-[444px] mb-8">
            Are you sure you want to accept this task?
            <br />
            Once accepted, it will be added to your task list.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between w-full gap-6">
            <button
              className="flex-1 h-[44px] bg-white dark:bg-gray-700 border border-[#DEDFEE] dark:border-gray-600 text-[#9397BB] dark:text-gray-300 font-lato font-bold text-[16px] rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 active:scale-95 outline-none"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="flex-1 h-[44px] bg-[#06B48A] text-white font-lato font-bold text-[16px] rounded-lg hover:bg-[#059673] transition-all duration-200 shadow-lg shadow-[#06B48A]/25 active:scale-95 outline-none flex items-center justify-center gap-2 disabled:opacity-60"
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Accepting...
                </>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
