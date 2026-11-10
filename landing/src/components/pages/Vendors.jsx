"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SEO from "@/components/Common/SEO/SEO";
import { openPreRegistrationModal } from "@/utils/tracking";
import {
  CreateAccountIcon,
  CompanyDetailsIcon,
  ManageOperationsIcon,
  TrackPerformanceIcon,
} from "../../assets/Icons/VendorIcons";

const Vendors = () => {
  return (
    <div className="flex flex-col bg-[#F0F0F0] dark:bg-[#0A0B10] transition-colors duration-300 overflow-hidden min-h-screen">
      <SEO
        title="CRM & Leads App for Vendors"
        description="Empower your business operations with the Livi Leads Vendor suite. Track leads performance, manage company workspaces, and boost sales conversions."
        keywords="vendors CRM, lead generation, sales tracker, Livi Leads vendor platform"
      />
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center gap-[24px] w-full max-w-[753px]"
        >
          <div className="flex flex-col justify-center items-center gap-[14px] w-full">
            <h1 className="w-full font-inter font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] text-[#0A0B10] dark:text-white text-center">
              Built for Vendors
            </h1>
            <p className="w-full font-inter font-normal text-[16px] md:text-[18px] leading-[1.5] text-[#7A7A7A] text-center max-w-[90%] sm:max-w-full">
              Manage your complete business operations in one platform.
            </p>
          </div>

          <button
            type="button"
            onClick={openPreRegistrationModal}
            className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-fit min-w-[200px] h-[56px] rounded-xl mt-2 cursor-pointer active:scale-95 group"
            style={{
              background:
                "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 100%)",
              border: "1px solid rgba(248, 248, 250, 0.5)",
              boxShadow:
                "0px 0.42px 0.92px -0.42px rgba(28, 70, 255, 0.13), 0px 1.60px 3.52px -0.83px rgba(28, 70, 255, 0.17), 0px 7px 15.4px -1.25px rgba(28, 70, 255, 0.36)",
            }}
          >
            <span className="font-inter font-medium text-[16px] leading-[24px] flex items-center text-white">
              Pre-Register as Vendor
            </span>
          </button>
        </motion.div>
      </section>

      {/* Main Features Container */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 flex flex-col items-center w-full">
        <div className="flex flex-col gap-[64px] lg:gap-[80px] w-full max-w-[1344px]">
          {/* Top / Benefits Section */}
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
                src="/vendors_1.png"
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
              <h2 className="w-full font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#0A0B10] dark:text-white text-center lg:text-left">
                Benefits Section
              </h2>

              {/* Highlights Checklist Grid */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start gap-x-[48px] gap-y-[16px] w-full mt-2">
                {[
                  "Centralized data",
                  "Sales tracking",
                  "Workforce management",
                  "Inventory control",
                  "Secure document exchange",
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
            </motion.div>
          </div>

          {/* Bottom / Workflow Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[48px] w-full">
            {/* Left Content (Cards Grid) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start p-0 gap-[32px] w-full lg:w-[55%] xl:w-[706px] order-2 lg:order-1"
            >
              <h2 className="w-full font-inter font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] text-[#0A0B10] dark:text-white text-center lg:text-left">
                Workflow Section
              </h2>

              {/* 2x2 Grid for Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] sm:gap-[24px] w-full max-w-[584px]">
                {/* Card 1 */}
                <div className="flex flex-col items-center p-[20px] sm:p-[24px] gap-[16px] sm:gap-[24px] w-full bg-white dark:bg-darkprimary rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <div className="box-border flex flex-row justify-center items-center p-[4px] w-[40px] h-[40px] bg-[#3B34FA] border border-[#80A8FF] rounded-[12px] shadow-[inset_0px_0.24px_0.24px_rgba(255,255,255,0.04),inset_0px_2px_2px_rgba(255,255,255,0.3)] shrink-0">
                    <CreateAccountIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white/90" />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-[8px] w-full">
                    <h3 className="font-inter font-semibold text-[15px] sm:text-[16px] leading-[24px] text-center text-[#0A0B10] dark:text-white">
                      Create Account
                    </h3>
                    <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] text-center text-[#7A7A7A]">
                      Register your vendor profile and gain secure access to the
                      Livi Leads platform.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center p-[20px] sm:p-[24px] gap-[16px] sm:gap-[24px] w-full bg-white dark:bg-darkprimary rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <div className="box-border flex flex-row justify-center items-center p-[4px] w-[40px] h-[40px] bg-[#3B34FA] border border-[#80A8FF] rounded-[12px] shadow-[inset_0px_0.24px_0.24px_rgba(255,255,255,0.04),inset_0px_2px_2px_rgba(255,255,255,0.3)] shrink-0">
                    <CompanyDetailsIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white/90" />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-[8px] w-full">
                    <h3 className="font-inter font-semibold text-[15px] sm:text-[16px] leading-[24px] text-center text-[#0A0B10] dark:text-white">
                      Add Company Details
                    </h3>
                    <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] text-center text-[#7A7A7A]">
                      Enter your business information, services, documents, and
                      operational data.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center p-[20px] sm:p-[24px] gap-[16px] sm:gap-[24px] w-full bg-white dark:bg-darkprimary rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <div className="box-border flex flex-row justify-center items-center p-[4px] w-[40px] h-[40px] bg-[#3B34FA] border border-[#80A8FF] rounded-[12px] shadow-[inset_0px_0.24px_0.24px_rgba(255,255,255,0.04),inset_0px_2px_2px_rgba(255,255,255,0.3)] shrink-0">
                    <ManageOperationsIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white/90" />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-[8px] w-full">
                    <h3 className="font-inter font-semibold text-[15px] sm:text-[16px] leading-[24px] text-center text-[#0A0B10] dark:text-white">
                      Manage Operations
                    </h3>
                    <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] text-center text-[#7A7A7A]">
                      Handle tasks, documents from one unified system.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center p-[20px] sm:p-[24px] gap-[16px] sm:gap-[24px] w-full bg-white dark:bg-darkprimary rounded-[20px] sm:rounded-[24px] shadow-sm">
                  <div className="box-border flex flex-row justify-center items-center p-[4px] w-[40px] h-[40px] bg-[#3B34FA] border border-[#80A8FF] rounded-[12px] shadow-[inset_0px_0.24px_0.24px_rgba(255,255,255,0.04),inset_0px_2px_2px_rgba(255,255,255,0.3)] shrink-0">
                    <TrackPerformanceIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white/90" />
                  </div>
                  <div className="flex flex-col justify-start items-center gap-[8px] w-full">
                    <h3 className="font-inter font-semibold text-[15px] sm:text-[16px] leading-[24px] text-center text-[#0A0B10] dark:text-white">
                      Track Performance
                    </h3>
                    <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] text-center text-[#7A7A7A]">
                      Monitor revenue, employee activity, and business
                      performance through real-time dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={openPreRegistrationModal}
                className="box-border flex flex-row justify-center items-center px-[24px] py-[16px] gap-[8px] w-full sm:w-fit h-[56px] rounded-xl mt-[8px] group cursor-pointer active:scale-95"
                style={{
                  background:
                    "radial-gradient(88% 75% at 50% 50%, #3B34FA 37.45%, #5B04C5 100%)",
                  border: "1px solid rgba(248, 248, 250, 0.5)",
                  boxShadow:
                    "0px 0.42px 0.92px -0.42px rgba(28, 70, 255, 0.13), 0px 1.60px 3.52px -0.83px rgba(28, 70, 255, 0.17), 0px 7px 15.4px -1.25px rgba(28, 70, 255, 0.36)",
                }}
              >
                <span className="font-inter font-medium text-[16px] leading-[24px] flex items-center text-white">
                  Pre-Register as Vendor
                </span>
                <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Right Image Box */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[45%] xl:w-[526px] h-[280px] sm:h-[350px] lg:h-[400px] bg-[#F0F0F0] rounded-[24px] sm:rounded-[32px] overflow-hidden shrink-0 order-1 lg:order-2 mx-auto flex justify-center items-center"
              style={{
                boxShadow:
                  "0px 0px 0px 5px #F8F8FA, 0px 0.42px 1.26px -0.42px rgba(28, 70, 255, 0.01), 0px 1.6px 4.8px -0.83px rgba(28, 70, 255, 0.01), 0px 7px 21px -1.25px rgba(28, 70, 255, 0.03)",
              }}
            >
              <div className="absolute inset-0 bg-[url('/platform/platform_bg.png')] bg-no-repeat bg-cover sm:bg-[length:110%_110%] bg-center sm:bg-[30px] transform -scale-x-100 dark:hidden"></div>
              <img
                src="/FeaturesSection/fs_company.jpg"
                alt="Desktop Dashboard"
                className="absolute w-[90%] max-w-[536px] h-auto rounded-2xl left-[5%] lg:left-[38px] top-12 sm:top-20 lg:top-28 object-cover shadow-lg"
              />
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
          {/* Background Gradient & Fading Dots Mask (Now visible on smaller screens too) */}
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
                Pre-Register for Early Access
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

export default Vendors;
