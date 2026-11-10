"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { getBlogBySlug } from "@api/modules/blogApi";
import SEO from "@/components/Common/SEO/SEO";
import ContentRenderer from "@components/Common/SEO/ContentRenderer";
import TableOfContents from "@components/Common/SEO/TableOfContents";
import SplashScreen from "../../Common/SplashScreen/SplashScreen";

import "./Blog.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogDetail();
  }, [slug]);

  const fetchBlogDetail = async () => {
    setLoading(true);
    try {
      const res = await getBlogBySlug(slug);
      if (res.success && res.data) {
        setBlog(res.data);
      } else {
        toast.error("Article not found");
        router.push("/blogs");
      }
    } catch (err) {
      toast.error("Failed to load article");
      router.push("/blogs");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-[#8487A8] font-lato">
        <SplashScreen />
        <span className="text-xs">Loading article details...</span>
      </div>
    );
  }

  if (!blog) return null;

  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.livileads.com";
  const pageUrl = typeof window !== "undefined" ? window.location.href : `${origin}/blogs/${slug || ""}`;
  const publishDate = blog.publish_date
    ? new Date(blog.publish_date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Draft";

  // Build JSON-LD Article & Breadcrumb Schemas for search crawlers
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": blog.og_image || "",
    "datePublished": blog.publish_date || blog.created_at,
    "dateModified": blog.updated_at,
    "author": {
      "@type": "Person",
      "name": blog.author?.user?.name || "Livi Leads Expert",
      "jobTitle": "Content Creator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Livi Leads",
      "logo": {
        "@type": "ImageObject",
        "url": `${origin}/logo.png`
      }
    },
    "description": blog.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${origin}/blogs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.title,
        "item": pageUrl
      }
    ]
  };

  const copyShareLink = () => {
    navigator.clipboard.writeText(pageUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="blog-detail-container min-h-screen pt-32 pb-8 px-4 md:px-8 font-lato max-w-4xl mx-auto">
      <SEO
        title={blog.meta_title || blog.title}
        description={blog.meta_description || blog.excerpt}
        canonicalUrl={blog.canonical_url || pageUrl}
        robots={blog.robots_directives}
        ogImage={blog.og_image}
        schemaMarkup={[articleSchema, breadcrumbSchema]}
      />

      {/* Back button */}
      <button onClick={() => router.push(-1)} className="inline-flex items-center gap-2 text-xs font-bold text-[#8487A8] hover:text-[#5B04C5] mb-6 transition-colors">
        <ArrowLeft size={16} />
        Back to Articles
      </button>

      {/* Article Header */}
      <header className="mb-6">
        {blog.category && (
          <span className="inline-block bg-[#EFEFFD] text-[#5B04C5] text-[11px] font-bold px-3 py-1.5 rounded-lg mb-3">
            {blog.category.name}
          </span>
        )}
        
        {/* EXACTLY ONE H1 FOR PERFECT SEO COMPLIANCE */}
        <h1 className="text-xl md:text-3xl font-extrabold text-[#212844] dark:text-white leading-tight mb-4">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#8487A8] dark:text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            {blog.author?.profile_picture ? (
              <img
                src={blog.author.profile_picture}
                alt=""
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-[#5B04C5]/10 flex items-center justify-center text-[#5B04C5] font-bold text-[10px]">
                U
              </div>
            )}
            <span>{blog.author?.user?.name || "Livi Leads Team"}</span>
          </div>

          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {publishDate}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {blog.reading_time} min read
          </span>
        </div>
      </header>

      {/* Featured Image */}
      {blog.og_image && (
        <div className="featured-image-wrapper rounded-3xl overflow-hidden aspect-[21/9] mb-8 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <img
            src={blog.og_image}
            alt={blog.image_alt || blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Two Column Article Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Table of Contents & Share Actions */}
        <aside className="w-full lg:w-64 lg:sticky lg:top-24 flex-shrink-0 order-2 lg:order-1">
          <TableOfContents content={blog.content_json} />

          {/* Social Share Box */}
          <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5">
            <h4 className="text-xs font-bold text-[#212844] dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5" /> Share Article
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-[#EFEFFD] hover:text-[#5B04C5] flex items-center justify-center text-gray-500 transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-[#EFEFFD] hover:text-[#5B04C5] flex items-center justify-center text-gray-500 transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-[#EFEFFD] hover:text-[#5B04C5] flex items-center justify-center text-gray-500 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={copyShareLink}
                className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-[#EFEFFD] hover:text-[#5B04C5] flex items-center justify-center text-gray-500 transition-colors ml-auto"
                title="Copy Link"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Right Side: Main content body */}
        <article className="flex-1 w-full order-1 lg:order-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-sm">
          <ContentRenderer content={blog.content_json} />

          {/* Author bio segment */}
          {blog.author && (
            <div className="author-bio-card mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex gap-4">
              {blog.author.profile_picture ? (
                <img
                  src={blog.author.profile_picture}
                  alt=""
                  className="w-12 h-12 rounded-2xl object-cover border border-gray-100 dark:border-gray-700"
                />
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-[#5B04C5]/10 flex items-center justify-center text-[#5B04C5] font-bold text-lg">
                  A
                </div>
              )}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-textsecondary">Written By</h4>
                <h3 className="text-sm font-bold text-[#212844] dark:text-white mt-0.5">{blog.author.user?.name || "Livi Leads Expert"}</h3>
                <p className="text-xs text-textsecondary mt-1.5 leading-relaxed">{blog.author.bio || "Staff writer and CRM specialist at LiviLeads."}</p>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
