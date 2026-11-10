"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BUSINESS_CARDS_DATA = [
  {
    id: 0,
    title: "Operations & Inventory Management",
    category: "Inventory",
    badge: "Real-time Sync",
    image: "/showcase/showcase-inventory.jpg",
    fallback: "/showcase/card-0.png",
  },
  {
    id: 1,
    title: "Flagship Company Dashboard",
    category: "Business Dashboard",
    badge: "Live Active",
    image: "/showcase/showcase-company.jpg",
    fallback: "/showcase/card-1.png",
  },
  {
    id: 2,
    title: "Multi-Device Document Management",
    category: "Document Vault",
    badge: "Cross-Platform",
    image: "/showcase/showcase-documents.jpg",
    fallback: "/showcase/card-2.png",
  },
  {
    id: 3,
    title: "Tasks & Team Workflow",
    category: "Workflow",
    badge: "Automated",
    image: "/showcase/showcase-tasks.jpg",
    fallback: "/showcase/card-3.png",
  },
  {
    id: 4,
    title: "HR System & Employee Directory",
    category: "HR & Team",
    badge: "Enterprise",
    image: "/showcase/showcase-hr.jpg",
    fallback: "/showcase/card-4.png",
  },
  {
    id: 5,
    title: "Business Analytics & Growth Metrics",
    category: "Analytics",
    badge: "Real-time",
    image: "/showcase/showcase-analytics.jpg",
    fallback: "/showcase/card-1.png",
  },
];

const CUSTOMER_CARDS_DATA = [
  {
    id: 0,
    title: "Verified Service Directory",
    category: "Discovery",
    badge: "Live Listings",
    image: "/showcase/card-2-service-devices.png",
    fallback: "/showcase/card-2.png",
  },
  {
    id: 1,
    title: "Direct Provider Enquiries",
    category: "Communication",
    badge: "Instant Chat",
    image: "/showcase/card-4-customer-portal.png",
    fallback: "/showcase/card-4.png",
  },
  {
    id: 2,
    title: "Track Quotations & Invoices",
    category: "Finance",
    badge: "Digital Records",
    image: "/showcase/card-0-mobile-ops.png",
    fallback: "/showcase/card-0.png",
  },
];

const getCardOffset = (index, activeIndex, total) => {
  let diff = index - activeIndex;
  while (diff > total / 2) diff -= total;
  while (diff < -total / 2) diff += total;
  return diff;
};

export default function ShowcaseCoverflow() {
  const [activeView, setActiveView] = useState("business"); // "business" | "customer"
  const cards = activeView === "business" ? BUSINESS_CARDS_DATA : CUSTOMER_CARDS_DATA;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [spacing, setSpacing] = useState(380);

  useEffect(() => {
    setCurrentIndex(1);
  }, [activeView]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSpacing(210);
      } else if (window.innerWidth < 1024) {
        setSpacing(310);
      } else {
        setSpacing(380);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const prevCard = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextCard();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, nextCard]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCard, prevCard]);

  return (
    <section id="inside-look" className="relative z-10 py-16 sm:py-24 text-center w-full scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Section Header from livileads.com */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
            Take a look inside, before you
            <br className="hidden sm:inline" /> sign up
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            One workspace, built to feel just as simple for a business as it is for a customer.
          </p>

          {/* Business view / Customer view Switcher */}
          <div className="inline-flex items-center glass-pill rounded-full p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveView("business")}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeView === "business"
                  ? "btn-primary-gradient text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Business view
            </button>
            <button
              type="button"
              onClick={() => setActiveView("customer")}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                activeView === "customer"
                  ? "btn-primary-gradient text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Customer view
            </button>
          </div>
        </motion.div>

        {/* Carousel Viewport */}
        <div
          className="relative w-full max-w-7xl mx-auto select-none px-4 sm:px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-[250px] sm:h-[340px] md:h-[400px] flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden flex items-center justify-center"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 3%, rgba(0,0,0,0.7) 8%, black 15%, black 85%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.15) 97%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 3%, rgba(0,0,0,0.7) 8%, black 15%, black 85%, rgba(0,0,0,0.7) 92%, rgba(0,0,0,0.15) 97%, transparent 100%)",
              }}
            >
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -800 || offset.x < -45) {
                    nextCard();
                  } else if (swipe > 800 || offset.x > 45) {
                    prevCard();
                  }
                }}
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
              >
                {cards.map((card, index) => {
                  const offset = getCardOffset(index, currentIndex, cards.length);
                  const isCenter = offset === 0;
                  const isVisible = Math.abs(offset) <= 2;
                  const xPos = offset * spacing;
                  const scaleVal = isCenter ? 1.05 : Math.max(0.72, 1 - Math.abs(offset) * 0.16);
                  const zIndexVal = 30 - Math.abs(offset) * 5;
                  const opacityVal = isCenter ? 1 : Math.max(0.4, 0.85 - Math.abs(offset) * 0.25);

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={card.id}
                      animate={{
                        x: xPos,
                        scale: scaleVal,
                        opacity: opacityVal,
                        zIndex: zIndexVal,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                        mass: 0.8,
                      }}
                      onClick={() => {
                        if (!isCenter) setCurrentIndex(index);
                      }}
                      className="absolute w-[86vw] max-w-[320px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[620px] aspect-[16/10] sm:aspect-[16/9.5] cursor-pointer group"
                    >
                      <div
                        className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-300 ${
                          isCenter
                            ? "border-[#5B04C5]/50 shadow-[0_20px_50px_-10px_rgba(91, 4, 197,0.35)] ring-2 ring-[#5B04C5]/25"
                            : "border-slate-800 shadow-lg hover:border-slate-700"
                        }`}
                      >
                        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3.5 py-2 sm:px-4 sm:py-2.5 bg-slate-950/80 backdrop-blur-md border-b border-white/10 text-white">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500" />
                            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500" />
                            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500" />
                            <span className="text-[11px] sm:text-xs font-semibold text-slate-300 ml-1.5 sm:ml-2 truncate max-w-[150px] sm:max-w-[240px]">
                              {card.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-200 border border-white/10 whitespace-nowrap">
                            {card.badge}
                          </span>
                        </div>

                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-300 group-hover:scale-102"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={prevCard}
              aria-label="Previous slide"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#5B04C5] shadow-xl border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer active:scale-90 z-35"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={nextCard}
              aria-label="Next slide"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-[#5B04C5] shadow-xl border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer active:scale-90 z-35"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-4 sm:mt-5">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIndex
                    ? "w-7 h-2 bg-[#5B04C5] shadow-xs"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
