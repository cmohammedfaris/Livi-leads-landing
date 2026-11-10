"use client";

import React, { useState } from "react";
import NormalInput from "../NormalInput/NormalInput";

export default function ApproveModal({ onClose, onApprove }) {
  const [uniqueNumber, setUniqueNumber] = useState("");

  const handleApprove = () => {
    onApprove(uniqueNumber);
    setUniqueNumber("");
    onClose();
  };

  return (
    <div className="bg-white dark:bg-darksecondary rounded-[24px] shadow-xl overflow-hidden flex flex-col items-center w-[524px] min-h-[416px] p-6">
      {/* Icon Section - Frame 1984077906 */}
      <div className="w-[80px] h-[80px] bg-[#06B48A] rounded-[40px] flex items-center justify-center mb-6 shrink-0 shadow-sm transition-transform hover:scale-105">
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

      {/* Title & Description */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <h3 className="text-[#212844] dark:text-white font-lato text-[20px] font-bold leading-6 text-center">
          Approve the Submitted Document
        </h3>
        <p className="text-[#9397BB] dark:text-gray-400 font-inter text-[16px] leading-[24px] text-center max-w-[444px]">
          Please review the details below to confirm that the document is complete and meets your requirements.
        </p>
      </div>

      {/* Input Section - Frame 1410103786 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <label className="text-[#212844] dark:text-gray-300 font-lato text-[16px] font-semibold leading-5">
          Approval Code / Reference Code / Voucher Code (if any)*
        </label>
        <div className="relative">
          <input
            type="text"
            className="w-full h-12 px-4 py-[14px] bg-white dark:bg-[#0F1724] border border-[#DEDFEE] dark:border-gray-700 rounded-lg outline-none focus:border-[#06B48A] transition-all font-lato text-[16px] text-[#212844] dark:text-white placeholder:text-[#9397BB]"
            placeholder="Enter Code"
            onChange={(e) => setUniqueNumber(e.target.value)}
            value={uniqueNumber}
          />
        </div>
      </div>

      {/* Footer - Modal-footer-frame */}
      <div className="flex items-center justify-between w-full gap-6 mt-auto">
        <button
          className="flex-1 h-[44px] bg-white dark:bg-transparent border border-[#DEDFEE] dark:border-gray-700 text-[#9397BB] font-lato font-bold text-[16px] rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all outline-none"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="flex-1 h-[44px] bg-[#06B48A] text-white font-lato font-bold text-[16px] rounded-lg hover:bg-[#059673] transition-all shadow-md active:scale-95 outline-none"
          onClick={handleApprove}
        >
          Approve
        </button>
      </div>
    </div>
  );
}
