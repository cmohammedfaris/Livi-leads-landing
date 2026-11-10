"use client";

import React from "react";
import FAQSection from "@/components/landing/FAQSection";
import BackgroundBlobs from "@/components/landing/BackgroundBlobs";
import CTACard from "@/components/landing/CTACard";
import { openPreRegistrationModal } from "@/utils/tracking";

export default function FAQsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundBlobs />
      <div className="pt-10 sm:pt-16 pb-20">
        <FAQSection />

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