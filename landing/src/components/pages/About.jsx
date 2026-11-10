"use client";

import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/Common/SEO/SEO";
import { openPreRegistrationModal } from "@/utils/tracking";
import {
  Compass,
  Target,
  HeartHandshake,
  CheckCircle2,
  Building2,
  User,
  Quote,
} from "lucide-react";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="About Us | Business is About People. Growth is About Connections."
        description="Livi Leads was created to bring businesses and customers closer together while making everyday business activities easier to manage."
        keywords="about Livi Leads, business growth, mission, vision, philosophy, business management"
      />

      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20">
        {/* Header Block */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          {/* Subtle Radial Glow behind Header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] sm:w-[38rem] h-48 bg-gradient-to-r from-blue-400/15 via-[#5B04C5]/20 to-purple-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
              ABOUT US
            </span>
            <span className="h-[1px] w-5 bg-[#5B04C5]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Business is About People. <br />
            <span className="bg-gradient-to-r from-[#5B04C5] via-[#4B03A4] to-[#7974F5] bg-clip-text text-transparent">
              Growth is About Connections.
            </span>
          </h1>

          <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-3 max-w-2xl mx-auto font-normal">
            <p>
              Every business begins with an idea. Every customer begins with a need.
            </p>
            <p>
              But between finding the right people, managing conversations and getting work done, things can become complicated.
            </p>
            <p className="text-slate-900 font-bold text-lg sm:text-xl pt-1">
              We believe business should be simpler.
            </p>
          </div>
        </motion.div>

        {/* Story Section: Simple Humanized Interconnection */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-10 lg:p-14 border border-slate-200/90 shadow-[0_4px_30px_-5px_rgba(15,23,42,0.06)] mb-14 sm:mb-20 overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#5B04C5]/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
                <span className="h-[1px] w-5 bg-[#5B04C5]" />
                <span>OUR PURPOSE</span>
                <span className="h-[1px] w-5 bg-[#5B04C5]" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight text-center lg:text-left">
                Bringing Businesses and <br className="hidden sm:inline" />
                Customers Closer Together.
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal text-center lg:text-left">
                <p>
                  Livi Leads was created to bring businesses and customers closer together while making everyday business activities easier to manage.
                </p>
                <p>
                  Our platform connects business discovery, customer engagement and business management in one connected environment.
                </p>
              </div>

              {/* Redesigned Purpose Highlight Quote */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50/90 via-white to-[#5B04C5]/[0.04] border border-slate-200/90 shadow-2xs overflow-hidden">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#5B04C5]/10 border border-[#5B04C5]/20 text-[#5B04C5] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Quote className="w-5 h-5 fill-[#5B04C5]/20 text-[#5B04C5]" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed">
                      &ldquo;We want businesses to spend less time dealing with complexity and more time creating opportunities.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#5B04C5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B04C5]" />
                      <span>Our Guiding Principle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Humanized Interconnection Card (5 cols) */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md bg-gradient-to-b from-slate-50/70 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
                {/* Card 1: The Customer */}
                <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-2">
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 text-[#5B04C5] flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#5B04C5]">The Customer</div>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">Seeking Trusted Services</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-1">
                    Discovers verified providers, requests clear quotes, and manages enquiries with ease.
                  </p>
                </div>

                {/* Interconnection Connector */}
                <div className="relative py-3 sm:py-4 flex items-center justify-center">
                  {/* Vertical Connection Line */}
                  <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-[#5B04C5]/30 via-[#5B04C5] to-purple-400/30" />

                  {/* Central Handshake Pill */}
                  <div className="relative z-10 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[#5B04C5]/25 shadow-sm text-[10px] sm:text-xs font-bold text-[#5B04C5] max-w-full text-center">
                    <HeartHandshake className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#5B04C5] shrink-0" />
                    <span>Direct Connection &bull; Zero Middlemen</span>
                  </div>
                </div>

                {/* Card 2: The Business */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-purple-600">The Business</div>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900">Delivering &amp; Growing</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-1">
                    Connects with genuine customers, manages quotes &amp; tasks, and builds lasting relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision, Mission, Philosophy 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {/* Vision */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
            className="relative bg-gradient-to-b from-blue-500/[0.04] via-white to-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-blue-400/50 transition-all flex flex-col justify-between group overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-blue-50 border border-blue-200/70 text-blue-600 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Compass className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    Our Vision
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700">
                  Vision
                </span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                To make business connections and everyday business management simpler and more accessible.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Accessible to businesses everywhere</span>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
            className="relative bg-gradient-to-b from-[#5B04C5]/[0.05] via-white to-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/50 transition-all flex flex-col justify-between group overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B04C5] to-[#817DF8]" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-[#5B04C5]/10 border border-[#5B04C5]/25 text-[#5B04C5] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <Target className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#5B04C5] transition-colors">
                    Our Mission
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#5B04C5]/10 border border-[#5B04C5]/20 text-[#5B04C5]">
                  Mission
                </span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                To empower businesses and customers through technology that makes discovering, connecting and managing easier.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-[#5B04C5] shrink-0" />
              <span>Empowering both customers &amp; providers</span>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
            className="relative bg-gradient-to-b from-emerald-500/[0.04] via-white to-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-emerald-400/50 transition-all flex flex-col justify-between group overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl p-3 aspect-square shrink-0 bg-emerald-50 border border-emerald-200/70 text-emerald-600 flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <HeartHandshake className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                    Our Philosophy
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700">
                  Values
                </span>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Great technology should work for people, not the other way around.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Human-centric technology design</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <CTACard
          title={
            <>
              Every Great Business Relationship <br className="hidden sm:inline" />
              Starts with a Connection.
            </>
          }
          subtitle="Make that connection count with Livi Leads."
          primaryText="Get Started Today"
          onPrimaryClick={openPreRegistrationModal}
          secondaryText="Discover Business Features"
          secondaryHref="/business"
          className="px-0"
        />
      </div>
    </div>
  );
};

export default About;