"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
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
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white dark:bg-darksecondary rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center w-[90vw] max-w-[440px] p-8"
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
            <Trash2 className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-[#212844] dark:text-white text-xl font-bold mb-3 text-center">
            {title}
          </h3>

          {/* Message */}
          <p className="text-[#9397BB] dark:text-gray-400 text-sm text-center mb-8 px-4 leading-relaxed">
            {message}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between w-full gap-4">
            <button
              className="flex-1 h-12 bg-white dark:bg-gray-700 border border-[#DEDFEE] dark:border-gray-600 text-[#9397BB] dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 active:scale-95"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="flex-1 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg shadow-red-500/25 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-60"
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
