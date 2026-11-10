"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
  Send,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import PhoneNumber from "@components/Helpers/Custom/PhoneNumber/PhoneNumber";
import { submitContactForm } from "@api/modules/adminApi";
import { Toast } from "@components/Helpers/Custom/Toast/CustomToast";
import SEO from "@/components/Common/SEO/SEO";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      Toast("Name, Email, and Message are required", "Validation Error", "w");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        ...formData,
        phone,
      };
      const response = await submitContactForm(payload);
      Toast(response?.message || "Message sent successfully!", "Success", "s");
      setFormData({
        name: "",
        email: "",
        website: "",
        message: "",
      });
      setPhone("");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.detail ||
        "Failed to send message. Please try again later.";
      Toast(errorMsg, "Error", "e");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Contact Sales & Customer Support | Livi Leads"
        description="Get in touch with the Livi Leads support and sales divisions. Ask questions about platform capabilities, vendor registration, or custom business features."
        keywords="contact sales, customer support, Livi Leads office, helpline number"
      />

      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20">
        {/* Header Block */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] sm:w-[36rem] h-44 bg-gradient-to-r from-blue-400/15 via-[#5B04C5]/20 to-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              GET IN TOUCH
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5 max-w-4xl mx-auto">
            Let&apos;s Start Building <br />
            <span className="bg-gradient-to-r from-[#5B04C5] via-[#4B03A4] to-[#7974F5] bg-clip-text text-transparent">
              Something Great Together.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Have questions about Livi Leads or looking for tailored features for your business? <br className="hidden sm:inline" />
            We&apos;re here to help you every step of the way.
          </p>
        </motion.div>

        {/* Main Content: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Card 1: Chat with Sales & Support */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="relative rounded-[24px] sm:rounded-3xl p-5 sm:p-7 bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/40 transition-all group overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl p-2.5 aspect-square shrink-0 bg-indigo-50 border border-indigo-100 text-[#5B04C5] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#5B04C5] transition-colors truncate">
                      Chat to Sales &amp; Support
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#5B04C5] border border-indigo-200/60 shrink-0">
                      Email
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Contact our team for general inquiries, platform onboarding, or support requests.
                  </p>
                  <div className="pt-1">
                    <a
                      href="mailto:cs@livileads.com"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5B04C5] hover:text-[#4B03A4] transition-colors"
                    >
                      <span>cs@livileads.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Corporate Office */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="relative rounded-[24px] sm:rounded-3xl p-5 sm:p-7 bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-purple-400/40 transition-all group overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl p-2.5 aspect-square shrink-0 bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors truncate">
                      Corporate Office
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-200/60 shrink-0">
                      Location
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Livi Leads Technologies Solutions Inc.
                  </p>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 pt-0.5">
                    New York, NY, United States
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Review our FAQs */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="relative rounded-[24px] sm:rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-slate-50/80 via-white to-[#5B04C5]/[0.03] border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-blue-400/40 transition-all group overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl p-2.5 aspect-square shrink-0 bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <HelpCircle className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      Review our FAQs
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200/60 shrink-0">
                      Self Help
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Still have questions? Explore our answers to common questions about services and operations.
                  </p>
                  <div className="pt-1.5">
                    <Link
                      href="/faqs"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs hover:shadow transition-all group-hover:border-[#5B04C5]/40"
                    >
                      <span>Explore FAQs</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#5B04C5]" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean White Contact Form (7 Cols) */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-7 relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-[0_4px_30px_-5px_rgba(15,23,42,0.06)] overflow-hidden"
          >
            {/* Soft Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#5B04C5]/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-7 text-left flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#5B04C5] mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B04C5]" />
                  <span>DIRECT INQUIRY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-left">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed text-left">
                  Fill in your details below and our team will get back to you within 24 business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B04C5] focus:ring-4 focus:ring-[#5B04C5]/10 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                      className="w-full bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B04C5] focus:ring-4 focus:ring-[#5B04C5]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Phone
                    </label>
                    <PhoneNumber
                      contactNumber={phone}
                      setContactNumber={setPhone}
                      className="relative flex items-center justify-start gap-2 w-full bg-slate-50/70 hover:bg-slate-50 focus-within:bg-white border border-slate-200 rounded-xl px-3.5 text-sm text-slate-900 focus-within:border-[#5B04C5] focus-within:ring-4 focus-within:ring-[#5B04C5]/10 transition-all h-[46px]"
                      inputClassName="w-full bg-transparent outline-none border-none text-sm text-slate-900 placeholder-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Website <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B04C5] focus:ring-4 focus:ring-[#5B04C5]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message or requirements here..."
                    rows={4}
                    required
                    className="w-full bg-slate-50/70 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#5B04C5] focus:ring-4 focus:ring-[#5B04C5]/10 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white bg-[#5B04C5] hover:bg-[#4B03A4] shadow-md shadow-[#5B04C5]/25 hover:shadow-lg transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
