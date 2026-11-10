import axiosInstance from "../axiosInstance.js";
import { ENQUIRY_API } from "../endpoints.js";

// Customer: Get my submitted enquiries
export const getUserEnquiries = async (params = {}) => {
  const response = await axiosInstance.get(ENQUIRY_API.USER_ENQUIRIES, { params });
  return response.data;
};

// Customer: Submit a new service/product enquiry
export const createEnquiry = async (data) => {
  const response = await axiosInstance.post(ENQUIRY_API.USER_ENQUIRIES, data);
  return response.data;
};

// Business: Get enquiries/leads list
export const getBusinessEnquiries = async (params = {}) => {
  const response = await axiosInstance.get(ENQUIRY_API.BUSINESS_ENQUIRIES, { params });
  return response.data;
};

// Business: Update enquiry status (Active, Pending, Loss)
export const updateEnquiryStatus = async (id, status) => {
  const response = await axiosInstance.patch(`${ENQUIRY_API.BUSINESS_ENQUIRIES}${id}/`, { status });
  return response.data;
};

// Business: Get enquiry/leads stats
export const getBusinessEnquiryStats = async () => {
  const response = await axiosInstance.get(`${ENQUIRY_API.BUSINESS_ENQUIRIES}stats/`);
  return response.data;
};

// Customer: Get individual enquiry details
export const getUserEnquiryDetail = async (id) => {
  const response = await axiosInstance.get(`${ENQUIRY_API.USER_ENQUIRIES}${id}/`);
  return response.data;
};

// Business: Get individual enquiry details
export const getBusinessEnquiryDetail = async (id) => {
  const response = await axiosInstance.get(`${ENQUIRY_API.BUSINESS_ENQUIRIES}${id}/`);
  return response.data;
};

