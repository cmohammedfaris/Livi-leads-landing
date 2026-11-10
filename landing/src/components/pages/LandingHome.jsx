"use client";

import React, { useEffect } from "react";
import SEO from "@/components/Common/SEO/SEO";
import { captureAndStoreUtmParams, openPreRegistrationModal } from "@/utils/tracking";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import NewHeroSection from "@/components/landing/NewHeroSection";
import IntroductionSection from "@/components/landing/IntroductionSection";
import AudienceCards from "@/components/landing/AudienceCards";
import WhyLiviLeadsSection from "@/components/landing/WhyLiviLeadsSection";
import CTACard from "@/components/landing/CTACard";

const LandingHome = () => {
  useEffect(() => {
    captureAndStoreUtmParams();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Livi Leads | Business Growth & Management Platform"
        description="Your Business Deserves to Be Found. Your Opportunities Deserve to Grow. Livi Leads brings customers, businesses and essential business operations together in one connected platform."
        keywords="business growth, management platform, lead management, service discovery, quotations, invoicing, HR management, Livi Leads"
      />

      <BackgroundBlobs />

      <div className="min-h-screen pb-12">
        {/* 1. HOMEPAGE: HERO SECTION (Section 3.1) */}
        <NewHeroSection />

        {/* 2. HOMEPAGE: INTRODUCTION & THREE CORE BENEFITS (Section 3.2 & 3.3) */}
        <IntroductionSection />

        {/* 3. HOMEPAGE: FOR BUSINESSES & FOR CUSTOMERS (Section 3.4 & 3.5) */}
        <AudienceCards />

        {/* 4. HOMEPAGE: WHY LIVI LEADS PREVIEW (Section 7) */}
        <WhyLiviLeadsSection />

        {/* 5. HOMEPAGE: CLOSING SECTION (Section 3.6) */}
        <CTACard
          className="mt-4 sm:mt-6"
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
        />
      </div>
    </div>
  );
};

export default LandingHome;
