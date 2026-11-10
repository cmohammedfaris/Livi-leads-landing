"use client";

import React, { useState } from "react";

function ToggleButton({ checked, onChange }) {
  const [internalState, setInternalState] = useState(false);

  const isControlled = typeof checked === "boolean";
  const isOn = isControlled ? checked : internalState;

  const handleToggle = () => {
    const newValue = !isOn;

    if (!isControlled) {
      setInternalState(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center h-6 w-12 rounded-full transition-all duration-300 ease-in-out
        ${isOn ? "bg-primary" : "bg-[#DEDFEE]"}
        shadow-[inset_1px_1px_2px_rgba(60,60,60,0.25),_inset_-1px_-1px_2px_rgba(180,180,180,0.2)]
        hover:shadow-[inset_1px_1px_2px_rgba(70,70,70,0.28),_inset_-1px_-1px_2px_rgba(190,190,190,0.22)]
        active:scale-[0.97]
      `}
    >
      <span
        className={`inline-block w-4 h-4 transform rounded-full transition-all duration-300 ease-in-out
          ${
            isOn
              ? "translate-x-7 bg-white shadow-[2px_2px_6px_rgba(0,0,0,0.6)]"
              : "translate-x-1 bg-textsecondary shadow-[2px_2px_6px_rgba(0,0,0,0.5)]"
          }
        `}
      />
    </button>
  );
}

export default ToggleButton;
