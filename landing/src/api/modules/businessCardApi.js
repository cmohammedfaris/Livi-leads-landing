import axiosInstance from "../axiosInstance.js";
import { BUSINESS_CARD_API } from "../endpoints.js";

/**
 * Fetch all digital business cards for the active company.
 */
export const getBusinessCards = async () => {
  const response = await axiosInstance.get(BUSINESS_CARD_API.CARDS);
  return response.data;
};

/**
 * Fetch detail for a specific card.
 */
export const getBusinessCardDetail = async (id) => {
  const response = await axiosInstance.get(`${BUSINESS_CARD_API.CARDS}${id}/`);
  return response.data;
};

/**
 * Create a new digital business card.
 */
export const createBusinessCard = async (formData) => {
  const response = await axiosInstance.post(BUSINESS_CARD_API.CARDS, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

/**
 * Update an existing digital business card.
 */
export const updateBusinessCard = async (id, formData) => {
  const response = await axiosInstance.patch(`${BUSINESS_CARD_API.CARDS}${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

/**
 * Delete a digital business card.
 */
export const deleteBusinessCard = async (id) => {
  const response = await axiosInstance.delete(`${BUSINESS_CARD_API.CARDS}${id}/`);
  return response.data;
};

/**
 * Retrieve a card's public details (unauthenticated scan landing).
 */
export const getPublicBusinessCard = async (id) => {
  const response = await axiosInstance.get(BUSINESS_CARD_API.PUBLIC_CARD(id));
  return response.data;
};

/**
 * Get direct download url helper for vCard export.
 */
export const getVCardDownloadUrl = (id) => {
  let envBase = "";
  if (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_API_BASE_URL) {
    envBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  } else {
    try {
      if (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) {
        envBase = import.meta.env.VITE_API_BASE_URL;
      }
    } catch (e) {}
  }
  
  const API_BASE = envBase 
    ? new URL(envBase).origin 
    : (typeof window !== "undefined" ? window.location.origin : "");
  return `${API_BASE}/api/${BUSINESS_CARD_API.VCARD(id)}`;
};
