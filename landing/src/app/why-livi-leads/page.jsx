"use client";

import React from "react";
import SEO from "@/components/Common/SEO/SEO";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import WhyLiviLeadsSection from "@/components/landing/WhyLiviLeadsSection";
import CTACard from "@/components/landing/CTACard";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function WhyLiviLeadsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="Why Livi Leads | More Than a Business Directory. More Than a Management Tool."
        description="Livi Leads brings business discovery, customer engagement and operational tools together into one connected environment. Practical tools for everyday operations."
        keywords="why livi leads, business directory, management tool, unified operations, lead management"
      />

      <BackgroundBlobs />

      <div className="pt-10 sm:pt-16 pb-20">
        <WhyLiviLeadsSection />

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
}

