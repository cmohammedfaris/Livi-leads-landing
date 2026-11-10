"use client";

import React, { useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CalendarIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Toast } from "@components/Helpers/Custom/Toast/CustomToast";
import CalendarComponent, { CalendarDialog } from "../Calendar/Calendar";

import SelectInput from "../SelectInput/SelectInput";

export default function ReturnUploadModal({ data, onClose, onConfirmUpload }) {
  const fileInputRef = useRef(null);

  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [isFromCalendarOpen, setIsFromCalendarOpen] = useState(false);
  const [isToCalendarOpen, setIsToCalendarOpen] = useState(false);

  const allowedMime = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const MAX_FILE_SIZE = 3 * 1024 * 1024;

  const validateAndAddFiles = (fileList) => {
    const newFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      const f = fileList[i];
      if (!allowedMime.includes(f.type) && !f.type.startsWith?.("image/")) {
        Toast(
          "Only PDF, JPG/PNG and Word docs are allowed.",
          "Invalid file",
          "e",
        );
        continue;
      }
      if (f.size > MAX_FILE_SIZE) {
        Toast(`${f.name} exceeds 5 MB limit.`, "File too large", "e");
        continue;
      }
      newFiles.push({
        file: f,
        comments: "",
      });
    }
    if (newFiles.length) {
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dt = e.dataTransfer;
    if (dt?.files?.length) validateAndAddFiles(dt.files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleFileInputChange = (e) => {
    const fileList = e.target.files;
    if (fileList?.length) validateAndAddFiles(fileList);
    e.target.value = null;
  };

  const removeFileAt = (idx) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx));

  const setFileComment = (idx, value) =>
    setFiles((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], comments: value };
      return copy;
    });

  const handleBrowseClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
    fileInputRef.current.click();
  };
  const formatSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1048576) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / 1048576).toFixed(1)} MB`;
  };

  const handleUploadClick = async () => {
    if (!files.length) {
      Toast("Please add a file to upload.", "Upload Error", "e");
      return;
    }
    const parseToDate = (s) => {
      if (!s) return null;
      try {
        const [datePart, timePart] = s.split("|").map((p) => p.trim());
        const [day, month, year] = datePart.split("-");
        const [hour, minute] = timePart.split(":");
        return new Date(year, month - 1, day, hour, minute);
      } catch (e) {
        return null;
      }
    };

    const convertToBackendDate = (value) => {
      if (!value) return null;

      if (value instanceof Date && !isNaN(value.getTime())) {
        return value.toISOString();
      }

      if (typeof value === "string") {
        const s = value.trim();
        if (/\d{2}-\d{2}-\d{4}\s*\|\s*\d{2}:\d{2}/.test(s)) {
          try {
            const [datePart, timePart] = s.split("|").map((p) => p.trim());
            const [day, month, year] = datePart.split("-");
            const [hour, minute] = timePart.split(":");
            return `${year}-${month}-${day}T${hour}:${minute}:00`;
          } catch (e) {
            return null;
          }
        }
        const parsed = new Date(s);
        if (!isNaN(parsed.getTime())) return parsed.toISOString();
      }

      return null;
    };

    const backendFrom = convertToBackendDate(fromDate);
    const backendTo = convertToBackendDate(toDate);

    if (!backendFrom || !backendTo) {
      Toast("Please select valid From and To dates.", "Validation Error", "e");
      return;
    }

    if (fromDate && toDate) {
      const from = parseToDate(fromDate);
      const to = parseToDate(toDate);
      if (from && to && from > to) {
        Toast("From date cannot be later than To date.", "Validation", "e");
        return;
      }
    }

    setIsUploading(true);

    const { file, comments } = files[0];

    const payload = {
      file,
      document_name: file.name,
      document_data: data?.id ?? null,
      comments: comments || "-",
      remarks: comments || "-",
      size: formatSize(file.size),
      status: "Pending",
      is_available: true,
      file_type: fileType,
      from_date: backendFrom,
      to_date: backendTo,
    };

    const result = await onConfirmUpload(payload);

    if (result?.ok) {
      setFiles([]);
      setFileType("");
      setFromDate("");
      setToDate("");
      onClose && onClose();
    }

    setIsUploading(false);
  };

  const formatDateTime = (d) => {
    if (!d) return "";
    const dateObj = d instanceof Date ? d : new Date(d);
    if (isNaN(dateObj.getTime())) return String(d);
    const pad = (n) => String(n).padStart(2, "0");
    const day = pad(dateObj.getDate());
    const month = pad(dateObj.getMonth() + 1);
    const year = dateObj.getFullYear();
    const hours = pad(dateObj.getHours());
    const minutes = pad(dateObj.getMinutes());
    return `${day}-${month}-${year} | ${hours}:${minutes}`;
  };

  const handleFromDateSelect = (value) => {
    setFromDate(formatDateTime(value));
    setIsFromCalendarOpen(false);
  };
  const handleToDateSelect = (value) => {
    setToDate(formatDateTime(value));
    setIsToCalendarOpen(false);
  };

  return (
    // IMPORTANT: full width but capped, centered, scrollable — matches DataPicker sizing
    <div className="w-full max-w-3xl mx-auto max-h-[80vh] overflow-auto p-6 bg-white dark:bg-darksecondary rounded-3xl shadow-lg text-sm transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {data?.["Document Name"] || "Tax Return Form"}
        </h3>
        <button
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
          onClick={() => onClose && onClose()}
          aria-label="Close"
        >
          <XMarkIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        onChange={handleFileInputChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/*"
      />

      {/* Dropzone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
        className="border-dashed border-2 border-gray-300 dark:border-white/10 rounded-lg p-6 mb-4 text-center cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
            <ArrowUpTrayIcon className="w-5 h-5 text-gray-600 dark:text-gray-200" />
          </div>

          <div>
            <button
              type="button"
              className="text-blue-600 dark:text-blue-400 font-medium underline"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current && fileInputRef.current.click();
              }}
            >
              Click to upload the document
            </button>{" "}
            or drag and drop
            <div className="text-xs text-gray-400 dark:text-gray-400 mt-2">
              Pdf, Doc or Jpg — less than 3 MB
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 my-2">Or</div>

      {/* Form fields */}
      <div className="grid grid-cols-1 gap-4">
        {/* File type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            File type
          </label>
          <SelectInput
            name="fileType"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            placeholder="Choose file type"
            options={[
              { value: "tax_return", label: "Tax Return" },
              { value: "invoice", label: "Invoice" },
              { value: "salary_slip", label: "Salary Slip" },
              { value: "other", label: "Other" },
            ]}
          />
        </div>

        {/* Date range (From / To) - opens your existing calendar component */}
        <div className="grid grid-cols-2 gap-3">
          {/* From */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              From <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={fromDate}
                readOnly
                onClick={() => setIsFromCalendarOpen(true)}
                placeholder="dd-mm-yyyy | HH:MM"
                className="w-full border rounded-lg px-3 py-2 h-11 bg-white dark:bg-[#0F1724] text-sm outline-none cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setIsFromCalendarOpen(true)}
                className="absolute right-3 top-3 p-1"
                aria-label="Open from calendar"
              >
                <CalendarIcon className="w-4 h-4 text-gray-400" />
              </button>

              {isFromCalendarOpen && (
                <CalendarDialog
                  isOpen={isFromCalendarOpen}
                  onClose={() => setIsFromCalendarOpen(false)}
                  onDateSelect={(dt) => handleFromDateSelect(dt)}
                />
              )}
            </div>
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              To <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={toDate}
                readOnly
                onClick={() => setIsToCalendarOpen(true)}
                placeholder="dd-mm-yyyy | HH:MM"
                className="w-full border rounded-lg px-3 py-2 h-11 bg-white dark:bg-[#0F1724] text-sm outline-none cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setIsToCalendarOpen(true)}
                className="absolute right-3 top-3 p-1"
                aria-label="Open to calendar"
              >
                <CalendarIcon className="w-4 h-4 text-gray-400" />
              </button>

              {isToCalendarOpen && (
                <CalendarDialog
                  isOpen={isToCalendarOpen}
                  onClose={() => setIsToCalendarOpen(false)}
                  onDateSelect={(dt) => handleToDateSelect(dt)}
                />
              )}
            </div>
          </div>
        </div>

        {/* File list (preview + comments) */}
        <div>
          {files.length === 0 ? (
            <div className="text-sm text-gray-500">No files selected</div>
          ) : (
            <div className="space-y-3">
              {files.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 border rounded-lg p-3 bg-gray-50 dark:bg-white/5"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white dark:bg-transparent border">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 7h10M7 11h10M7 15h4"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        {item.file.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {(item.file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>

                    <div className="mt-2">
                      <input
                        placeholder="Add comment (optional)"
                        value={item.comments}
                        onChange={(e) => setFileComment(idx, e.target.value)}
                        className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-[#0F1724] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFileAt(idx)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 mt-2">
          <button
            onClick={() => {
              setFiles([]);
              setFileType("");
              setFromDate("");
              setToDate("");
              onClose && onClose();
            }}
            className="px-4 py-2 rounded-md border text-sm bg-white dark:bg-transparent"
          >
            Cancel
          </button>

          <button
            onClick={handleUploadClick}
            disabled={files.length === 0 || !fileType || !fromDate || !toDate || isUploading}
            className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2
    ${
      files.length === 0 || !fileType || !fromDate || !toDate || isUploading
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-gradient-to-br from-primary to-[#531DAB] text-white"
    }`}
          >
            {isUploading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
            ) : (
              "Upload"
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
