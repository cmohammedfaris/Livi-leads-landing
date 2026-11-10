"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, AlertTriangle, CheckCircle2, RotateCcw, AlertCircle, LogOut } from 'lucide-react';
import SplashScreen from "../SplashScreen/SplashScreen";


const ConfirmActionModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText, 
  cancelText, 
  type = 'danger', // 'danger', 'warning', 'success', 'info'
  loading = false,
  children
}) => {
  const config = {
    danger: {
      color: '#EF2929',
      icon: Trash2,
      bg: 'bg-red-50 dark:bg-red-900/10'
    },
    warning: {
      color: '#F8A41F',
      icon: AlertTriangle,
      bg: 'bg-orange-50 dark:bg-orange-900/10'
    },
    success: {
      color: '#10B981',
      icon: CheckCircle2,
      bg: 'bg-green-50 dark:bg-green-900/10'
    },
    info: {
      color: '#5B04C5',
      icon: RotateCcw,
      bg: 'bg-blue-50 dark:bg-blue-900/10'
    },
    logout: {
      color: '#5B04C5', // Primary brand color
      icon: LogOut,
      bg: 'bg-[#5B04C5]/10 dark:bg-[#5B04C5]/20'
    }
  };

  const current = config[type] || config.danger;
  const Icon = current.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#212844]/40 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-darksecondary rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col items-center p-8 gap-6 w-full max-w-[480px] animate-in zoom-in-95 duration-300"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-400"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col items-center gap-5 w-full">
              {/* Icon Wrapper */}
              <div 
                style={{ background: current.color }}
                className="w-16 h-16 rounded-full flex items-center justify-center text-white shrink-0 shadow-xl shadow-current/20"
              >
                <Icon size={32} />
              </div>

              {/* Text Area */}
              <div className="flex flex-col items-center gap-2 w-full text-center">
                <h3 className="text-xl font-bold text-[#212844] dark:text-white leading-tight">
                  {title}
                </h3>
                <p className="text-sm font-medium text-[#9397BB] dark:text-gray-400 leading-relaxed max-w-[360px]">
                  {message}
                </p>
              </div>
            </div>

            {/* Optional Custom Content (e.g., inputs) */}
            {children && (
              <div className="w-full mt-2">
                {children}
              </div>
            )}

            {/* Buttons Area */}
            <div className="flex items-center gap-4 w-full mt-2">
              <button 
                onClick={onClose}
                disabled={loading}
                className="flex-1 h-11 bg-white dark:bg-transparent border border-[#DEDFEE] dark:border-gray-700 rounded-xl text-sm font-bold text-[#9397BB] hover:bg-gray-50 dark:hover:bg-white/5 transition-all active:scale-[0.98]"
              >
                {cancelText || 'Cancel'}
              </button>
              <button 
                onClick={onConfirm}
                disabled={loading}
                style={{ background: current.color }}
                className="flex-1 h-11 text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-current/20 disabled:opacity-50 active:scale-[0.98] flex items-center justify-center"
              >
                {loading ? (
                  <SplashScreen />
                ) : (confirmText || 'Confirm')}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmActionModal;
