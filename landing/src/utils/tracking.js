/**
 * Marketing Attribution & Event Tracking Utility for Livi Leads Pre-Registration
 */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const STORAGE_KEY = 'livileads_attribution';

export const captureAndStoreUtmParams = () => {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
    const current = {};
    let hasNewUtm = false;

    UTM_KEYS.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        current[key] = val.trim();
        hasNewUtm = true;
      }
    });

    // Also capture referrer if not direct
    if (document.referrer && !stored.referrer_url) {
      stored.referrer_url = document.referrer;
    }

    if (hasNewUtm) {
      const merged = { ...stored, ...current, captured_at: new Date().toISOString() };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }

    return stored;
  } catch (e) {
    console.warn("Failed to capture UTM parameters:", e);
    return {};
  }
};

export const getStoredAttribution = () => {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch (e) {
    return {};
  }
};

/**
 * Fires Meta Pixel and Google Tag Manager conversion events
 */
export const trackLeadConversion = (leadData) => {
  if (typeof window === 'undefined') return;

  // 1. Meta Pixel
  try {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Pre-Registration Early Access',
        content_category: leadData.business_type || 'General',
        lead_id: leadData.id || '',
        currency: 'USD',
        value: 0.00,
      });
    }
  } catch (err) {
    console.warn("Meta Pixel track error:", err);
  }

  // 2. Google Tag Manager / GA4
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pre_registration_lead',
      lead_type: leadData.business_type,
      lead_goal: leadData.primary_interest,
      utm_source: leadData.utm_source,
      utm_campaign: leadData.utm_campaign,
    });
  } catch (err) {
    console.warn("GTM track error:", err);
  }
};

import { usePreRegistrationStore } from "@/store/preRegistrationStore";

/**
 * Dispatches custom event and updates store to open the conversational pre-registration modal
 */
export const openPreRegistrationModal = () => {
  if (typeof window !== "undefined") {
    try {
      usePreRegistrationStore.getState().openModal();
    } catch (e) {
      console.warn("Could not call usePreRegistrationStore.getState().openModal()", e);
    }
    window.dispatchEvent(new CustomEvent("open-pre-register"));
  }
};
