"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Search } from "lucide-react";

const DropdownPortal = ({ isOpen, onClose, position, children, width, dropdownRef }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />
      <div
        ref={dropdownRef}
        className="fixed z-[9999] bg-white dark:bg-[#1E1F2B] rounded-lg shadow-2xl border border-[#DEDFEE] dark:border-gray-800 overflow-hidden"
        style={{
          top: position.top,
          left: position.left,
          bottom: position.bottom,
          width: width,
          maxHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="overflow-y-auto max-h-[300px] scrollbar-hide">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

function SelectInput({
  name,
  label,
  value,
  onChange,
  options = [],
  placeholder = "Choose...",
  rounded = "rounded-lg",
  height = "h-12",
  text = "text-base",
  width = "w-full",
  border = "border-[#DEDFEE]",
  error,
  inputClassName,
  onOpenChange,
  searchable,
  disabled,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: "auto", left: 0, bottom: "auto" });
  const [containerWidth, setContainerWidth] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const isSearchable = searchable !== undefined ? searchable : options.length > 8;

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = 300; // max height of dropdown
      
      let pos = {
        left: rect.left,
      };

      if (spaceBelow < dropdownHeight && rect.top > spaceBelow) {
        // Open upwards
        pos.top = "auto";
        pos.bottom = window.innerHeight - rect.top + 4;
      } else {
        // Open downwards
        pos.top = rect.bottom + 4;
        pos.bottom = "auto";
      }

      setDropdownPos(pos);
      setContainerWidth(rect.width);
    }
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
    if (onOpenChange) onOpenChange(false);
  }, [onOpenChange]);

  const handleScroll = useCallback(
    (e) => {
      // Don't close if the scroll happened inside the dropdown itself
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      }
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      setSearchQuery("");
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", updatePosition);
      if (isSearchable && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 50);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen, updatePosition, handleScroll, isSearchable]);

  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const filteredOptions = isSearchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const handleOptionClick = (optionValue) => {
    const syntheticEvent = {
      target: {
        name: name,
        value: optionValue,
      },
    };
    onChange(syntheticEvent);
    onClose();
  };

  return (
    <div className={`flex flex-col gap-2 ${width} text-textprimary`}>
      {label && (
        <label
          htmlFor={name}
          className="text-base font-semibold text-[#212844] dark:text-textsecondary"
        >
          {label}
        </label>
      )}

      <div className="relative" ref={buttonRef}>
        <button
          type="button"
          id={name}
          disabled={disabled}
          onClick={() => {
            if (disabled) return;
            const newState = !isOpen;
            setIsOpen(newState);
            if (onOpenChange) onOpenChange(newState);
          }}
          className={
            inputClassName
              ? inputClassName
              : `appearance-none w-full border ${border} pl-4 pr-10 outline-none text-nowrap text-left ${height} ${text} ${rounded} dark:text-textsecondary ${
                  error
                    ? "border-red-500"
                    : "hover:border-[#5B04C5] focus:border-[#5B04C5] dark:border-opacity-10 dark:border-black"
                } bg-white dark:bg-darkprimary ${
                  !value ? "text-[#9397BB]" : "text-[#212844] font-medium"
                } transition-all duration-200 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
          }
        >
          {displayText}
        </button>
        <ChevronDown
          className={`w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-[#212844] pointer-events-none transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />

        <DropdownPortal
          isOpen={isOpen}
          onClose={onClose}
          position={dropdownPos}
          width={containerWidth}
          dropdownRef={dropdownRef}
        >
          {isSearchable && (
            <div className="sticky top-0 z-10 bg-white dark:bg-[#1E1F2B] p-2 border-b border-[#DEDFEE] dark:border-gray-800">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search options..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F5F6FA] dark:bg-gray-800 border border-transparent rounded-md py-2 pl-9 pr-3 text-sm text-[#212844] dark:text-white outline-none focus:border-[#5B04C5] transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option.value)}
                className={`px-4 py-3 cursor-pointer transition-colors text-sm ${
                  value === option.value
                    ? "bg-[#5B04C5] text-white font-semibold"
                    : "text-[#212844] dark:text-white hover:bg-gray-50 dark:hover:bg-darksecondary"
                }`}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-4 py-6 text-center text-[#9397BB] text-sm italic">
              No options found
            </div>
          )}
        </DropdownPortal>
      </div>
      {error && (
        <p className="text-[10px] text-red-500 font-bold mt-[-4px] ml-1 uppercase tracking-tight">
          {error}
        </p>
      )}
    </div>
  );
}

export default SelectInput;

