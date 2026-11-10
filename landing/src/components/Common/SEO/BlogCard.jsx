"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";

export default function BlogCard({ blog, baseRoute = "/blogs" }) {
  const publishDate = blog.publish_date
    ? new Date(blog.publish_date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Draft";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full font-lato group">
      {/* Featured Image */}
      <Link href={`${baseRoute}/${blog.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-gray-50 dark:bg-gray-700">
        {blog.og_image ? (
          <img
            src={blog.og_image}
            alt={blog.image_alt || blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5B04C5]/10 to-[#5B04C5]/5">
            <span className="text-[#5B04C5] font-bold text-lg">Livi Leads Blog</span>
          </div>
        )}
        
        {blog.category_name && (
          <span className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 text-[#5B04C5] dark:text-[#8c88ff] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
            {blog.category_name}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#8487A8] dark:text-gray-400 mb-3 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {blog.reading_time} min read
          </span>
          {blog.author_full_name && (
            <span className="flex items-center gap-1.5 ml-auto truncate max-w-[120px]">
              <User className="w-3.5 h-3.5 flex-shrink-0" />
              {blog.author_full_name}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#212844] dark:text-white mb-2 line-clamp-2 hover:text-[#5B04C5] dark:hover:text-[#8c88ff] transition-colors">
          <Link href={`${baseRoute}/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-textsecondary dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Action button */}
        <div className="mt-auto pt-3 border-t border-gray-50 dark:border-gray-700/50">
          <Link href={`${baseRoute}/${blog.slug}`}
            className="inline-flex items-center text-xs font-bold text-[#5B04C5] hover:text-[#524dd0] transition-colors"
          >
            Read Article &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
