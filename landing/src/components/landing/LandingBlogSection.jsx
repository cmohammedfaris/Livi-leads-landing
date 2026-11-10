"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "@components/Common/SEO/BlogCard";
import { getBlogs } from "@api/modules/blogApi";
import SplashScreen from "../Common/SplashScreen/SplashScreen";


const LandingBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setIsLoading(true);
        // Fetch the first 3 latest blogs
        const data = await getBlogs({ page: 1, page_size: 3 });
        setBlogs(data.data || []);
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
        setError("Failed to load articles.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <section id="blog-section" className="relative flex w-full flex-col items-center justify-center bg-[#F0F1F2] dark:bg-darkprimary px-4 sm:px-6 py-12 lg:py-24 isolate overflow-hidden">
      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-7xl flex-col gap-10 sm:gap-12"
      >
        
        {/* Header Text Group */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold leading-tight text-[#0A0B10] md:text-5xl lg:text-[48px] lg:leading-[1.2]">
              Latest Insights & News
            </h2>
            <p className="max-w-[604px] font-['Inter'] text-sm sm:text-base leading-6 text-[#7A7A7A]">
              Stay updated with the latest trends, tips, and insights on business operations, HR, and sales management.
            </p>
          </div>
          <Link href="/blogs"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-[#3B34FA] text-[#3B34FA] rounded-full font-semibold hover:bg-[#3B34FA] hover:text-white transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <SplashScreen />
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-100">
            <p className="text-red-500 font-medium">{error}</p>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[32px] p-12 text-center shadow-[0px_12px_24px_-4px_rgba(0,0,0,0.02)] max-w-md mx-auto my-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#5B04C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-[#5B04C5]/10 to-[#5B04C5]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 ring-4 ring-[#EFEFFD] dark:ring-gray-700">
              <svg className="w-10 h-10 text-[#5B04C5] dark:text-[#8c88ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-[#212844] dark:text-white mb-3">No Articles Yet</h3>
            <p className="text-sm text-[#8487A8] dark:text-gray-400 leading-relaxed">
              We're currently preparing some great content. Check back later for our latest updates and insights!
            </p>
          </motion.div>
        )}

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center mt-4">
          <Link href="/blogs"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#3B34FA] text-[#3B34FA] rounded-full font-semibold hover:bg-[#3B34FA] hover:text-white transition-colors duration-300 w-full"
          >
            View All Articles
          </Link>
        </div>

      </motion.div>
    </section>
  );
};

export default LandingBlogSection;
