// src/api/modules/businessApi.js
import axiosInstance from "../axiosInstance.js";
import { BUSINESS_API } from "../endpoints.js";

export const getBusiness = async () => {
  const response = await axiosInstance.get(BUSINESS_API.GET_BUSINESS);
  return response.data;
};

export const createBusiness = async (data) => {
  const response = await axiosInstance.post(BUSINESS_API.CREATE_BUSINESS, data);
  return response.data;
};

export const updateBusiness = async (data) => {
  const response = await axiosInstance.put(BUSINESS_API.UPDATE_BUSINESS, data);
  return response.data;
};
