// src/api/modules/companyApi.js
import axiosInstance from "../axiosInstance.js";
import { COMPANY_API } from "../endpoints.js";

/**
 * Fetch the current authenticated user's company profile.
 */
export const getCompanyProfile = async () => {
  const response = await axiosInstance.get(COMPANY_API.GET_PROFILE);
  return response.data;
};

/**
 * Update the user's company profile.
 * Expected data format: { vision: "...", mission: "...", name: "..." }
 */
export const updateCompanyProfile = async (data) => {
  // Uses PATCH to update only the fields provided in `data`
  const response = await axiosInstance.patch(COMPANY_API.UPDATE_PROFILE, data);
  return response.data;
};

/**
 * Achievements CRUD
 */
export const getAchievements = async () => {
  const response = await axiosInstance.get(COMPANY_API.ACHIEVEMENTS);
  return response.data;
};

export const addAchievement = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.ACHIEVEMENTS, data);
  return response.data;
};

export const updateAchievement = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.ACHIEVEMENTS}${id}/`,
    data,
  );
  return response.data;
};

export const deleteAchievement = async (id) => {
  const response = await axiosInstance.delete(
    `${COMPANY_API.ACHIEVEMENTS}${id}/`,
  );
  return response.data;
};

/**
 * Company Works CRUD
 */
export const getCompanyWorks = async () => {
  const response = await axiosInstance.get(COMPANY_API.COMPANY_WORKS);
  return response.data;
};

export const addCompanyWork = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.COMPANY_WORKS, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateCompanyWork = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.COMPANY_WORKS}${id}/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const deleteCompanyWork = async (id) => {
  const response = await axiosInstance.delete(
    `${COMPANY_API.COMPANY_WORKS}${id}/`,
  );
  return response.data;
};

/**
 * Testimonials CRUD
 */
export const getTestimonials = async () => {
  const response = await axiosInstance.get(COMPANY_API.TESTIMONIALS);
  return response.data;
};

export const addTestimonial = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.TESTIMONIALS, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const updateTestimonial = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.TESTIMONIALS}${id}/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const deleteTestimonial = async (id) => {
  const response = await axiosInstance.delete(
    `${COMPANY_API.TESTIMONIALS}${id}/`,
  );
  return response.data;
};

/**
 * Bank Details CRUD
 */
export const getBankDetails = async () => {
  const response = await axiosInstance.get(COMPANY_API.BANK_DETAILS);
  return response.data;
};

export const addBankAccount = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.BANK_DETAILS, data);
  return response.data;
};

export const updateBankAccount = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.BANK_DETAILS}${id}/`,
    data,
  );
  return response.data;
};

export const deleteBankAccount = async (id) => {
  const response = await axiosInstance.delete(
    `${COMPANY_API.BANK_DETAILS}${id}/`,
  );
  return response.data;
};

/**
 * Company Documents CRUD
 */
export const getCompanyDocuments = async () => {
  const response = await axiosInstance.get(COMPANY_API.COMPANY_DOCUMENTS);
  return response.data;
};

export const getCompanyDocument = async (id) => {
  const response = await axiosInstance.get(
    `${COMPANY_API.COMPANY_DOCUMENTS}${id}/`,
  );
  return response.data;
};

export const addCompanyDocument = async (data) => {
  const response = await axiosInstance.post(
    COMPANY_API.COMPANY_DOCUMENTS,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const updateCompanyDocument = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.COMPANY_DOCUMENTS}${id}/`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const deleteCompanyDocument = async (id) => {
  const response = await axiosInstance.delete(
    `${COMPANY_API.COMPANY_DOCUMENTS}${id}/`,
  );
  return response.data;
};

/**
 * Custom Templates CRUD
 */
export const getCustomTemplates = async () => {
  const response = await axiosInstance.get(COMPANY_API.CUSTOM_TEMPLATES);
  return response.data;
};

export const createCustomTemplate = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.CUSTOM_TEMPLATES, data);
  return response.data;
};

export const updateCustomTemplate = async (id, data) => {
  const response = await axiosInstance.patch(
    `${COMPANY_API.CUSTOM_TEMPLATES}${id}/`,
    data,
  );
  return response.data;
};

export const checkVisibleNameAvailability = async (visible_name) => {
  const response = await axiosInstance.post(
    COMPANY_API.CHECK_NAME_AVAILABILITY,
    { visible_name },
  );
  return response.data;
};

export const getDashboardData = async () => {
  const response = await axiosInstance.get(COMPANY_API.DASHBOARD);
  return response.data;
};

export const getPublicCompanies = async (params) => {
  const response = await axiosInstance.get(COMPANY_API.PUBLIC_DIRECTORY, { params });
  return response.data;
};

export const getPublicCompanyDetails = async (id) => {
  const response = await axiosInstance.get(COMPANY_API.PUBLIC_COMPANY_DETAIL(id));
  return response.data;
};

// QR Code Generator API
export const getQRCodes = async () => {
  const response = await axiosInstance.get(COMPANY_API.QR_CODES);
  return response.data;
};

export const createQRCode = async (data) => {
  const response = await axiosInstance.post(COMPANY_API.QR_CODES, data);
  return response.data;
};

export const getQRCodeDetail = async (id) => {
  const response = await axiosInstance.get(`${COMPANY_API.QR_CODES}${id}/`);
  return response.data;
};

export const updateQRCode = async (id, data) => {
  const response = await axiosInstance.patch(`${COMPANY_API.QR_CODES}${id}/`, data);
  return response.data;
};

export const deleteQRCode = async (id) => {
  const response = await axiosInstance.delete(`${COMPANY_API.QR_CODES}${id}/`);
  return response.data;
};

export const addHelplineContact = async (qrId, contactData) => {
  const response = await axiosInstance.post(`${COMPANY_API.QR_CODES}${qrId}/add-contact/`, contactData);
  return response.data;
};

export const removeHelplineContact = async (qrId, contactId) => {
  const response = await axiosInstance.delete(`${COMPANY_API.QR_CODES}${qrId}/remove-contact/${contactId}/`);
  return response.data;
};

export const editHelplineContact = async (qrId, contactId, contactData) => {
  const response = await axiosInstance.patch(`${COMPANY_API.QR_CODES}${qrId}/edit-contact/${contactId}/`, contactData);
  return response.data;
};

export const getPublicHelpline = async (id) => {
  const response = await axiosInstance.get(COMPANY_API.PUBLIC_HELPLINE(id));
  return response.data;
};
