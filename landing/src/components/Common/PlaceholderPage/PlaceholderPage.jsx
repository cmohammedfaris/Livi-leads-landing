"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

/**
 * A premium placeholder component for features that are still under development.
 * 
 * @param {Object} props
 * @param {string} props.title - The name of the feature/page.
 * @param {string} props.description - A brief explanation of what the page will eventually do.
 */
const PlaceholderPage = ({ 
  title = "Feature Under Development", 
  description = "We're currently working on this module to provide you with the best experience. Check back soon for updates!" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center animate-fade-in">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-24 h-24 mb-8 flex items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary shadow-xl shadow-primary/20 backdrop-blur-sm border border-primary/20"
      >
        <Clock size={48} strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          Coming Soon
        </span>
        <h1 className="text-4xl font-black text-[#212844] dark:text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="max-w-md mx-auto text-lg text-textsecondary dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex space-x-3"
      >
        <div className="h-1.5 w-12 rounded-full bg-primary opacity-30" />
        <div className="h-1.5 w-12 rounded-full bg-primary opacity-60" />
        <div className="h-1.5 w-12 rounded-full bg-primary" />
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
