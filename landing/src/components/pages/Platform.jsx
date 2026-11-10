"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SEO from "@/components/Common/SEO/SEO";
import { openPreRegistrationModal } from "@/utils/tracking";

const Platform = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col bg-[#F0F0F0] dark:bg-[#0A0B10] transition-colors duration-300 overflow-hidden min-h-screen">
      <SEO
        title="Web & Mobile App Platform"
        description="Experience real-time CRM data sync between your web browser dashboard and the native Livi Leads mobile application. Work from anywhere on any device."
        keywords="CRM mobile app, lead manager software, real time database sync"
      />
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center gap-[24px] w-full max-w-4xl mx-auto"
        >
          <h1 className="w-full font-inter font-bold text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.15] text-[#0A0B10] dark:text-white">
            Web &amp; Mobile <br className="hidden sm:inline" /> Business Platform
          </h1>
          <p className="w-full font-inter font-normal text-[16px] md:text-[18px] leading-[1.5] text-[#7A7A7A] max-w-2xl mx-auto">
            Access Livi Leads from desktop and mobile with real-time sync.
          </p>
          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="inline-flex items-center justify-center px-[24px] py-[16px] w-full sm:w-fit h-[56px] bg-primary text-white rounded-xl font-semibold text-[16px] hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 mt-2 cursor-pointer active:scale-95"
          >
            Pre-Register for Early Access
          </button>
        </motion.div>
      </section>

      {/* Main Features Container */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 flex flex-col items-center w-full">
        <div className="flex flex-col gap-[64px] lg:gap-[80px] w-full max-w-[1344px]">
          {/* Top / Desktop Section */}
          <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[48px] w-full">
            {/* Left Image Box */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[45%] xl:w-[526px] h-[280px] sm:h-[350px] lg:h-[400px] bg-[#F0F0F0] rounded-[24px] sm:rounded-[32px] overflow-hidden shrink-0 mx-auto"
              style={{
                boxShadow:
                  "0px 0px 0px 5px #F8F8FA, 0px 0.42px 1.26px -0.42px rgba(28, 70, 255, 0.01), 0px 1.6px 4.8px -0.83px rgba(28, 70, 255, 0.01), 0px 7px 21px -1.25px rgba(28, 70, 255, 0.03)",
              }}
            >
              <div className="absolute inset-0 bg-[url('/platform/platform_bg.png')] bg-no-repeat bg-cover sm:bg-[length:110%_110%] bg-center sm:bg-[30px] transform -scale-x-100 dark:hidden"></div>
              <img
                src="/platform/platform_pc.png"
                alt="Desktop Dashboard"
                className="absolute w-[90%] max-w-[536px] h-auto rounded-2xl left-[5%] lg:left-[38px] bottom-0 object-cover shadow-lg"
              />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start p-0 gap-[20px] sm:gap-[24px] w-full lg:w-[55%] xl:w-[598px]"
            >
              {/* Headline Block */}
              <div className="flex flex-col items-center lg:items-start gap-[16px] w-full text-center lg:text-left">
                {/* Pill */}
                <div className="flex flex-row justify-center items-center py-[8px] pr-[12px] pl-[8px] gap-[8px] h-[40px] bg-white rounded-[40px] shadow-sm">
                  <div
                    className="flex flex-row justify-center items-center px-[8px] py-[4px] h-[24px] rounded-[30px]"
                    style={{
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 83.41%)",
                    }}
                  >
                    <span className="font-inter font-semibold text-[12px] leading-[16px] flex items-center text-white">
                      Platform
                    </span>
                  </div>
                  <span className="font-inter font-semibold text-[12px] leading-[16px] flex items-center text-[#0A0B10]">
                    Web Platform
                  </span>
                </div>

                <h2 className="w-full font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#0A0B10] dark:text-white">
                  Large dashboard mockup
                </h2>
              </div>

              {/* Highlights Block */}
              <div className="flex flex-col items-center lg:items-start gap-[8px] w-full">
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#7A7A7A]">
                  4 key highlights:
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-start gap-x-[48px] gap-y-[16px] w-full mt-2">
                  {[
                    "Advanced controls",
                    "Full reporting",
                    "Multi-module access",
                    "Admin management",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center gap-[8px] w-full sm:w-auto"
                    >
                      <div className="flex flex-col justify-center items-center w-[24px] h-[24px] shrink-0">
                        <CheckCircleIcon className="w-6 h-6 text-[#1B44FE]" />
                      </div>
                      <span className="font-inter font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#7A7A7A]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={openPreRegistrationModal}
                className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-fit h-[56px] rounded-xl mt-[8px] group mx-auto lg:mx-0 cursor-pointer active:scale-95"
                style={{
                  background:
                    "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 100%)",
                  border: "1px solid rgba(248, 248, 250, 0.5)",
                  boxShadow:
                    "0px 0.42px 0.92px -0.42px rgba(28, 70, 255, 0.13), 0px 1.60px 3.52px -0.83px rgba(28, 70, 255, 0.17), 0px 7px 15.4px -1.25px rgba(28, 70, 255, 0.36)",
                }}
              >
                <span className="font-inter font-medium text-[16px] leading-[24px] flex items-center text-white">
                  Pre-Register for Web Access
                </span>
                <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Bottom / Mobile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[48px] w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start p-0 gap-[20px] sm:gap-[24px] w-full lg:w-[55%] xl:w-[706px] order-2 lg:order-1"
            >
              {/* Headline Block */}
              <div className="flex flex-col items-center lg:items-start gap-[16px] w-full text-center lg:text-left">
                {/* Pill */}
                <div className="flex flex-row justify-center items-center py-[8px] pr-[12px] pl-[8px] gap-[8px] h-[40px] bg-white rounded-[40px] shadow-sm">
                  <div
                    className="flex flex-row justify-center items-center px-[8px] py-[4px] h-[24px] rounded-[30px]"
                    style={{
                      background:
                        "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 83.41%)",
                    }}
                  >
                    <span className="font-inter font-semibold text-[12px] leading-[16px] flex items-center text-white">
                      Platform
                    </span>
                  </div>
                  <span className="font-inter font-semibold text-[12px] leading-[16px] flex items-center text-[#0A0B10]">
                    Mobile App
                  </span>
                </div>

                <h2 className="w-full font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#0A0B10] dark:text-white">
                  Phone mockup
                </h2>
              </div>

              {/* Highlights Block */}
              <div className="flex flex-col items-center lg:items-start gap-[8px] w-full">
                <p className="font-inter font-normal text-[15px] sm:text-[16px] leading-[24px] text-[#7A7A7A]">
                  4 key highlights:
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-start gap-x-[48px] gap-y-[16px] w-full mt-2">
                  {["Live dashboard", "Task updates", "Document requests"].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-row items-center gap-[8px] w-full sm:w-auto"
                      >
                        <div className="flex flex-col justify-center items-center w-[24px] h-[24px] shrink-0">
                          <CheckCircleIcon className="w-6 h-6 text-[#1B44FE]" />
                        </div>
                        <span className="font-inter font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#7A7A7A]">
                          {item}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={openPreRegistrationModal}
                className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-fit h-[56px] rounded-xl mt-[8px] group mx-auto lg:mx-0 cursor-pointer active:scale-95"
                style={{
                  background:
                    "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 100%)",
                  border: "1px solid rgba(248, 248, 250, 0.5)",
                  boxShadow:
                    "0px 0.42px 0.92px -0.42px rgba(28, 70, 255, 0.13), 0px 1.60px 3.52px -0.83px rgba(28, 70, 255, 0.17), 0px 7px 15.4px -1.25px rgba(28, 70, 255, 0.36)",
                }}
              >
                <span className="font-inter font-medium text-[16px] leading-[24px] flex items-center text-white">
                  Pre-Register for Mobile Access
                </span>
                <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Right Image Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[45%] xl:w-[526px] h-[350px] sm:h-[400px] bg-[#F0F0F0] rounded-[24px] sm:rounded-[32px] overflow-hidden shrink-0 order-1 lg:order-2 flex justify-center items-center mx-auto"
              style={{
                boxShadow:
                  "0px 0px 0px 5px #F8F8FA, 0px 0.42px 1.26px -0.42px rgba(28, 70, 255, 0.01), 0px 1.6px 4.8px -0.83px rgba(28, 70, 255, 0.01), 0px 7px 21px -1.25px rgba(28, 70, 255, 0.03)",
              }}
            >
              {/* Abstract background specific to mobile mockup */}
              <div className="absolute inset-0 bg-[url('/platform/platform_bg.png')] bg-no-repeat bg-cover sm:bg-[length:120%] bg-center transform -scale-x-100 dark:hidden"></div>

              <div className="relative w-[240px] sm:w-[300px] h-auto transform -rotate-[22deg] translate-y-16 sm:translate-y-20 translate-x-8 sm:translate-x-12">
                <img
                  src="/phone_frame.png"
                  alt="Phone Frame"
                  className="w-full relative z-10 mt-40 sm:mt-52"
                />
                <img
                  src="/platform/platform_mobile.png"
                  alt="Phone App UI"
                  className="absolute top-[14%] left-[4.5%] w-[91%] h-[96%] object-contain rounded-[30px] sm:rounded-[40px] z-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW Banner / CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 flex justify-center w-full bg-white dark:bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start pt-10 lg:pt-[32px] pl-6 sm:pl-10 lg:pl-[48px] pr-6 lg:pr-0 pb-0 w-full max-w-[1344px] h-auto lg:h-[382px] bg-[#F7F7F7] dark:bg-[#1A1B23] rounded-[24px] overflow-hidden isolate"
          style={{
            boxShadow:
              "0px 0.24px 1.2px -0.62px rgba(0, 0, 0, 0.08), 0px 2px 10px -1.25px rgba(0, 0, 0, 0.19)",
          }}
        >
          {/* Background Gradient & Fading Dots Mask */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <div
              className="absolute right-0 top-0 w-full h-full opacity-10 sm:opacity-5 mix-blend-multiply dark:mix-blend-screen"
              style={{
                backgroundImage: "url('/starDot.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "12px",
                WebkitMaskImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 10.46%, #000000 64.08%, #000000 100%)",
                maskImage:
                  "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 10.46%, #000000 64.08%, #000000 100%)",
              }}
            />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#1B44FE,_transparent_40%)] sm:bg-[radial-gradient(circle_at_top_right,_#1B44FE,_transparent_30%)] pointer-events-none"></div>
          </div>

          {/* Left Content (Title & Button) */}
          <div className="flex flex-col justify-center items-center lg:items-start gap-[24px] w-full lg:w-[45%] xl:w-[500px] lg:h-[350px] pb-[40px] lg:pb-[32px] z-10 mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] sm:leading-[56px] text-[#0A0B10] dark:text-white">
              Start Your Livi Leads <br className="hidden lg:block" /> Journey
              Today
            </h2>
            <button
              type="button"
              onClick={openPreRegistrationModal}
              className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-fit min-w-[180px] h-[56px] rounded-xl cursor-pointer active:scale-95"
              style={{
                background:
                  "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 100%)",
                border: "1px solid rgba(248, 248, 250, 0.5)",
                boxShadow:
                  "0px 0.42px 0.92px -0.42px rgba(28, 70, 255, 0.13), 0px 1.6px 3.52px -0.83px rgba(28, 70, 255, 0.17), 0px 7px 15.4px -1.25px rgba(28, 70, 255, 0.36)",
              }}
            >
              <span className="font-inter font-medium text-[16px] leading-[24px] text-white">
                Pre-Register Now
              </span>
            </button>
          </div>

          {/* Right Dashboard Mockup (Matrix Transformed) */}
          <div className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[55%] xl:w-[571px] max-w-[1344px] h-[200px] sm:h-[250px] lg:h-[350px] z-10 mx-auto lg:mx-0 mt-4 lg:mt-0 lg:-right-[4.4rem] overflow-hidden flex justify-center lg:block">
            <div
              className="relative lg:absolute left-0 top-[2.5px] w-full max-w-[564px] h-[300px] sm:h-[403.12px] bg-white dark:bg-gray-800 rounded-[10px] overflow-hidden border border-[rgba(240,240,240,0.32)] origin-top lg:origin-top-left"
              style={{
                boxShadow:
                  "-0.48px 0px 10px rgba(0, 0, 0, 0.06), -4px 0px 16px -0.75px rgba(0, 0, 0, 0.1)",
                transform: "matrix(1, 0, -0.17, 0.98, 0, 0)",
              }}
            >
              <img
                src="/platform/platfrom_cta.jpg"
                alt="Livi Leads Dashboard"
                className="w-full h-full object-cover object-left-top"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Platform;
