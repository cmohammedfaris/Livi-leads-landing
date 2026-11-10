"use client";

import React, { useState } from "react";

function DualTab({ Tab1, Tab2, setActiveTabMain }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-[240px]">
      <div className="bg-[#F5F4F9] dark:bg-darkprimary p-1 rounded-lg flex relative items-center h-10">
        {/* Slider */}
        <div
          className={`absolute h-8 w-[calc(50%-4px)] bg-[#5B04C5] rounded-md transition-transform duration-300 ease-in-out shadow-sm ${
            activeTab === 0 ? "translate-x-0" : "translate-x-full"
          }`}
        />

        {/* Buttons */}
        <button
          onClick={() => {
            setActiveTab(0);
            setActiveTabMain(0);
          }}
          className={`relative z-10 flex-1 text-center h-8 text-xs font-lato font-semibold transition-colors duration-300 outline-none ${
            activeTab === 0 ? "text-white" : "text-[#9397BB] dark:text-gray-400"
          }`}
        >
          {Tab1}
        </button>
        <button
          onClick={() => {
            setActiveTab(1);
            setActiveTabMain(1);
          }}
          className={`relative z-10 flex-1 text-center h-8 text-xs font-lato font-semibold transition-colors duration-300 outline-none ${
            activeTab === 1 ? "text-white" : "text-[#9397BB] dark:text-gray-400"
          }`}
        >
          {Tab2}
        </button>
      </div>
    </div>
  );
}

export default DualTab;
