import publicAxios from "../publicAxios";
import { INVENTORY_API } from "../endpoints";

/**
 * Fetches public approved services for landing page with limited preview & search.
 * @param {Object} params - { search, category, city, limit }
 */
export const fetchPublicLandingServices = async (params = {}) => {
  try {
    const response = await publicAxios.get(INVENTORY_API.PUBLIC_LANDING_SERVICES, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching public landing services:", error);
    throw error;
  }
};
