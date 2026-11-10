"use client";

import React, { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { getBlogs, getCategories } from "@api/modules/blogApi";
import BlogCard from "@components/Common/SEO/BlogCard";
import SEO from "@/components/Common/SEO/SEO";
import { motion } from "framer-motion";
import SplashScreen from "../../Common/SplashScreen/SplashScreen";

import "./Blog.css";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchBlogs();
    console.log("blog section listed");
    
  }, [selectedCategory, page]);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      if (res.success) {
        setCategories(res.data || []);
      }
    } catch (err) {
      console.error("Failed to load blog categories:", err);
    }
  };

  const fetchBlogs = async (isSearch = false) => {
    setLoading(true);
    try {
      const params = {
        page: isSearch ? 1 : page,
        category: selectedCategory || undefined,
        search: searchQuery || undefined,
      };
      if (isSearch) setPage(1);

      const res = await getBlogs(params);
      if (res.success) {
        setBlogs(res.data || []);
        const count = res.count || 0;
        setTotalPages(Math.ceil(count / 10) || 1);
      }
    } catch (err) {
      console.error("Failed to load blog posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogs(true);
  };

  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.livileads.com";

  // Build standard schema for sitemap listings
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogs.map((blog, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `${origin}/blogs/${blog.slug}`,
      "name": blog.title
    }))
  };

  return (
    <div className="blog-section-container min-h-screen pt-10 sm:pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 font-lato">
      <SEO
        title="Livi Leads Blog - Insights, Guides & Updates"
        description="Explore articles, tutorials, and business tips on lead generation and HR automation from the Livi Leads expert team."
        keywords="CRM blogs, Lead management guides, HRMS tutorials, Livi Leads news"
        schemaMarkup={schemaMarkup}
      />

      {/* Header section with rich soft purple gradient overlay */}
      <div className="blog-hero mb-12 sm:mb-16 text-center md:text-left py-8 px-6 md:px-10 rounded-3xl bg-gradient-to-br from-[#5B04C5]/10 via-[#5B04C5]/5 to-transparent border border-[#5B04C5]/5 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              KNOWLEDGE CENTRE
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#212844] mt-4 mb-2 dark:text-white">
            Livi Leads Insights & Blog
          </h1>
          <p className="text-[#8487A8] dark:text-gray-400 text-xs md:text-sm leading-relaxed">
            Stay up to date with the latest industry trends, product releases, and expert tutorials to accelerate your company workflow.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-no-repeat bg-contain hidden md:block" style={{ backgroundImage: 'url("/assets/illustrations/analytics.svg")' }} />
      </div>

      {/* Toolbar: Category tabs and Search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => {
              setSelectedCategory("");
              setPage(1);
            }}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shadow-sm border ${
              selectedCategory === ""
                ? "bg-[#5B04C5] text-white border-[#5B04C5]"
                : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.slug);
                setPage(1);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shadow-sm border ${
                selectedCategory === cat.slug
                  ? "bg-[#5B04C5] text-white border-[#5B04C5]"
                  : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search input Form */}
        <form onSubmit={handleSearchSubmit} className="flex h-10 w-full md:w-80 items-center rounded-xl bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden shadow-sm transition-all focus-within:border-[#5B04C5]">
          <input
            type="text"
            placeholder="Search articles..."
            className="h-full w-full bg-transparent px-4 py-2 text-xs text-[#212844] dark:text-white outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="h-full w-10 flex items-center justify-center bg-[#5B04C5] text-white hover:opacity-90">
            <Search size={16} />
          </button>
        </form>
      </div>

      {/* Main Grid View */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-[#8487A8]">
          <SplashScreen />
          <span className="text-xs">Loading articles...</span>
        </div>
      ) : blogs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[32px] p-12 text-center shadow-[0px_12px_24px_-4px_rgba(0,0,0,0.02)] max-w-md mx-auto my-12 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5B04C5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-24 h-24 bg-gradient-to-br from-[#5B04C5]/10 to-[#5B04C5]/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 ring-4 ring-[#EFEFFD] dark:ring-gray-700">
            <Search className="w-10 h-10 text-[#5B04C5] dark:text-[#8c88ff]" />
          </div>
          <h3 className="text-xl font-extrabold text-[#212844] dark:text-white mb-3">No Articles Found</h3>
          <p className="text-sm text-[#8487A8] dark:text-gray-400 leading-relaxed mb-6">
            We couldn't find any articles matching your search criteria. Please try again with a different query or browse all categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("");
              setPage(1);
            }}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#5B04C5] text-white font-bold text-xs hover:bg-[#524dd0] hover:shadow-lg hover:shadow-[#5B04C5]/20 transition-all duration-300"
          >
            View All Articles
          </button>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                &larr; Prev
              </button>
              <span className="text-xs text-[#8487A8] dark:text-gray-400">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1.5 text-xs font-bold rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                Next &rarr;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
