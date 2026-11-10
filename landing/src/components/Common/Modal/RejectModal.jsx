"use client";

import React, { useState } from "react";

export default function RejectModal({ onClose, onReject }) {
  const [rejectReason, setRejectReason] = useState("");

  const handleReject = () => {
    onReject(rejectReason);
    setRejectReason("");
    onClose();
  };

  return (
    <div className="bg-white dark:bg-darksecondary rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center w-[524px] min-h-[472px] p-6">
      {/* Icon Section */}
      <div className="w-[80px] h-[80px] bg-[#EF2929] rounded-[40px] flex items-center justify-center mb-6 shrink-0 shadow-sm transition-transform hover:scale-105">
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

      {/* Title & Description */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <h3 className="text-[#212844] dark:text-white font-lato text-[20px] font-bold leading-6 text-center">
          Reject the Submitted Document
        </h3>
        <p className="text-[#9397BB] dark:text-gray-400 font-inter text-[16px] leading-[24px] text-center max-w-[444px]">
          Please review the submitted document and provide the reason for rejection below, along with any additional instructions.
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full flex flex-col gap-2 mb-8 flex-1">
        <label className="text-[#212844] dark:text-gray-300 font-lato text-[16px] font-semibold leading-5">
          Reject Reason (required)
        </label>
        <textarea
          className="w-full min-h-[100px] px-4 py-3 bg-white dark:bg-[#0F1724] border border-[#DEDFEE] dark:border-gray-700 rounded-lg outline-none focus:border-[#EF2929] transition-all font-lato text-[16px] text-[#212844] dark:text-white placeholder:text-[#9397BB] resize-none"
          placeholder="Enter reason for rejection"
          value={rejectReason}
          onChange={(e) => setRejectReason(e.target.value)}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between w-full gap-6 mt-auto">
        <button
          className="flex-1 h-[44px] bg-white dark:bg-transparent border border-[#DEDFEE] dark:border-gray-700 text-[#9397BB] font-lato font-bold text-[16px] rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all outline-none"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="flex-1 h-[44px] bg-[#EF2929] text-white font-lato font-bold text-[16px] rounded-lg hover:bg-[#d42424] transition-all shadow-md active:scale-95 outline-none"
          onClick={handleReject}
          disabled={!rejectReason.trim()}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
