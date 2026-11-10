// src/api/modules/adminApi.js
import axiosInstance from "../axiosInstance.js";
import { ADMIN_API } from "../endpoints.js";

export const getAdminDashboard = async () => {
  const response = await axiosInstance.get(ADMIN_API.DASHBOARD);
  return response.data;
};

export const getTemplates = async () => {
  const response = await axiosInstance.get(ADMIN_API.TEMPLATES);
  return response.data;
};

export const getAdminUsers = async () => {
  const response = await axiosInstance.get(ADMIN_API.USERS);
  return response.data;
};

export const toggleAdminUserStatus = async (id, note = "") => {
  const response = await axiosInstance.delete(`${ADMIN_API.USERS}${id}/`, {
    data: { note }
  });
  return response.data;
};

export const getAdminBusinesses = async () => {
  const response = await axiosInstance.get(ADMIN_API.BUSINESSES);
  return response.data;
};

export const toggleAdminBusinessStatus = async (id) => {
  const response = await axiosInstance.delete(`${ADMIN_API.BUSINESSES}${id}/`);
  return response.data;
};

export const verifyAdminBusiness = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.VERIFY_BUSINESS(id));
  return response.data;
};

export const rejectAdminBusiness = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.REJECT_BUSINESS(id));
  return response.data;
};

export const getAdminSupportTickets = async () => {
  const response = await axiosInstance.get(ADMIN_API.SUPPORT_TICKETS);
  return response.data;
};

export const getAdminUserDetail = async (id) => {
  const response = await axiosInstance.get(`${ADMIN_API.USERS}${id}/`);
  return response.data;
};

export const getAdminBusinessDetail = async (id) => {
  const response = await axiosInstance.get(`${ADMIN_API.BUSINESSES}${id}/`);
  return response.data;
};

export const submitContactForm = async (data) => {
  const response = await axiosInstance.post(ADMIN_API.PUBLIC_SUPPORT_TICKETS, data);
  return response.data;
};

export const getAdminCategories = async (params = {}) => {
  const response = await axiosInstance.get(ADMIN_API.CATEGORIES, { params });
  return response.data;
};

export const getAdminSubCategories = async (params = {}) => {
  const response = await axiosInstance.get(ADMIN_API.SUBCATEGORIES, { params });
  return response.data;
};

export const getAdminServices = async (params = {}) => {
  const response = await axiosInstance.get(ADMIN_API.SERVICES, { params });
  return response.data;
};

export const approveAdminCategory = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.APPROVE_CATEGORY(id));
  return response.data;
};

export const rejectAdminCategory = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.REJECT_CATEGORY(id));
  return response.data;
};

export const approveAdminSubCategory = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.APPROVE_SUBCATEGORY(id));
  return response.data;
};

export const rejectAdminSubCategory = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.REJECT_SUBCATEGORY(id));
  return response.data;
};

export const approveAdminService = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.APPROVE_SERVICE(id));
  return response.data;
};

export const rejectAdminService = async (id) => {
  const response = await axiosInstance.post(ADMIN_API.REJECT_SERVICE(id));
  return response.data;
};

export const deleteAdminCategory = async (id) => {
  const response = await axiosInstance.delete(`${ADMIN_API.CATEGORIES}${id}/`);
  return response.data;
};

export const getAdminCategoryDetail = async (id) => {
  const response = await axiosInstance.get(`${ADMIN_API.CATEGORIES}${id}/`);
  return response.data;
};

export const deleteAdminSubCategory = async (id) => {
  const response = await axiosInstance.delete(`${ADMIN_API.SUBCATEGORIES}${id}/`);
  return response.data;
};

export const deleteAdminService = async (id) => {
  const response = await axiosInstance.delete(`${ADMIN_API.SERVICES}${id}/`);
  return response.data;
};

export const getAdminServicesStats = async () => {
  const response = await axiosInstance.get(ADMIN_API.SERVICES_STATS);
  return response.data;
};

export const getAdminServiceDetail = async (id) => {
  const response = await axiosInstance.get(`${ADMIN_API.SERVICES}${id}/`);
  return response.data;
};

