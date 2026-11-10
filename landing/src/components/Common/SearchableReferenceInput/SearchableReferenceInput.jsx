"use client";

import React, { useState, useEffect, useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { fetchDocumentByReference } from "@api/modules/documentsApi";

const SearchableReferenceInput = ({ 
  value, 
  onChange, 
  onFound, 
  placeholder = "Enter Reference Number (e.g., REQ-0001)",
  className = "" 
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debounceRef = useRef(null);

  // Sync internal state with external value prop
  useEffect(() => {
    if (value !== inputValue) {
      setInputValue(value || "");
      if (!value) setError("");
    }
  }, [value]);

  const handleSearch = async (ref) => {
    const trimmedRef = ref.trim();
    if (!trimmedRef || trimmedRef.length < 3) {
      setError("");
      if (onFound) onFound(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetchDocumentByReference(trimmedRef);
      if (response.data?.success && response.data?.data) {
        if (onFound) onFound(response.data.data);
      } else {
        setError("Reference not found");
        if (onFound) onFound(null);
      }
    } catch (err) {
      console.error("Reference lookup failed:", err);
      setError(err.response?.status === 404 ? "Reference not found" : "Failed to fetch details");
      if (onFound) onFound(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    onChange(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    
    if (!val.trim()) {
      setError("");
      if (onFound) onFound(null);
      return;
    }

    debounceRef.current = setTimeout(() => {
      handleSearch(val);
    }, 600);
  };

  const clearInput = () => {
    setInputValue("");
    onChange("");
    setError("");
    if (onFound) onFound(null);
  };

  return (
    <div className={`relative flex flex-col gap-1 w-full ${className}`}>
      <div className={`relative flex items-center px-4 py-3 bg-white border rounded-[8px] transition-all focus-within:ring-2 focus-within:ring-[#5B04C5]/10 focus-within:border-[#5B04C5] ${error ? "border-red-500" : "border-[#DEDFEE]"}`}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full text-[14px] md:text-[16px] font-medium text-[#212844] placeholder:text-[#9397BB] focus:outline-none bg-transparent"
        />
        
        <div className="flex items-center gap-2 ml-2 shrink-0">
          {loading ? (
            <ArrowPathIcon className="w-5 h-5 text-[#5B04C5] animate-spin" />
          ) : error ? (
            <XMarkIcon className="w-5 h-5 text-red-500 cursor-pointer" onClick={clearInput} />
          ) : inputValue ? (
            <XMarkIcon className="w-5 h-5 text-[#9397BB] cursor-pointer hover:text-[#212844]" onClick={clearInput} />
          ) : (
            <MagnifyingGlassIcon className="w-5 h-5 text-[#9397BB]" />
          )}
        </div>
      </div>
      
      {error && (
        <span className="text-[12px] font-medium text-red-500 ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default SearchableReferenceInput;
