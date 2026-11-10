"use client";

import { motion } from "framer-motion";
import { UserPlus, Binoculars, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 01",
      tag: "Quick Setup",
      icon: UserPlus,
      title: "Create Your Account",
      desc: "Sign up in minutes. No complex setup, no training needed. Just log in and go.",
    },
    {
      step: "Step 02",
      tag: "Smart Discovery",
      icon: Binoculars,
      title: "Find & Connect",
      desc: "Businesses get discovered by local customers. Customers find exactly what they need in their area.",
    },
    {
      step: "Step 03",
      tag: "Connected Workspace",
      icon: Rocket,
      title: "Manage & Grow",
      desc: "Send quotes, manage tasks, track documents, and collect payments — all in one dashboard.",
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 px-4 pt-12 pb-16 sm:pt-18 sm:pb-24 max-w-6xl mx-auto text-center scroll-mt-20 sm:scroll-mt-24">
      {/* Eyebrow Tag */}
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="h-[1px] w-5 bg-[#5B04C5]" />
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5B04C5]">
          HOW IT WORKS
        </span>
        <span className="h-[1px] w-5 bg-[#5B04C5]" />
      </div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight"
      >
        How it Works
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14 font-normal"
      >
        Simple steps for both businesses and customers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.05)] hover:shadow-xl hover:border-[#5B04C5]/30 p-6 sm:p-7 text-left transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold text-[#5B04C5] bg-[#5B04C5]/10 border border-[#5B04C5]/20 px-2.5 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {step.tag}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#5B04C5]/10 border border-[#5B04C5]/20 flex items-center justify-center mb-5 text-[#5B04C5] group-hover:scale-105 group-hover:bg-[#5B04C5] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
