"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Create Your Account",
      role: "Create Your Account",
      text: `"Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We've seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!"`,
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Create Your Account",
      role: "Create Your Account",
      text: `"Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We've seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!"`,
      image: "https://i.pravatar.cc/150?img=47",
    },
  ];

  return (
    <section className="relative z-10 px-4 pt-16 pb-16 sm:pt-24 sm:pb-24 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight"
      >
        Client&apos;s Success Stories
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14"
      >
        Testimonials
      </motion.p>

      <div className="flex items-center justify-center gap-4 sm:gap-6 relative">
        <button className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200/80 items-center justify-center text-[#8B5CF6] hover:scale-105 active:scale-95 transition-transform shadow-xs z-10 cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-[28px] sm:rounded-[32px] p-8 text-left relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100">
                  <img
                    src={test.image}
                    alt={test.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {test.name}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    {test.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {test.text}
              </p>
            </motion.div>
          ))}
        </div>

        <button className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200/80 items-center justify-center text-[#8B5CF6] hover:scale-105 active:scale-95 transition-transform shadow-xs z-10 cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile nav buttons */}
      <div className="flex justify-center gap-4 mt-8 sm:hidden">
        <button className="flex shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200/80 items-center justify-center text-[#8B5CF6] hover:scale-105 transition-transform shadow-xs cursor-pointer">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="flex shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200/80 items-center justify-center text-[#8B5CF6] hover:scale-105 transition-transform shadow-xs cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
