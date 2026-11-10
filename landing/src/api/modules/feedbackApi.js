// src/api/modules/feedbackApi.js
import axiosInstance from "../axiosInstance.js";
import { FEEDBACK_API } from "../endpoints.js";

export const getFeedbacks = async (params) => {
  const response = await axiosInstance.get(FEEDBACK_API.FEEDBACKS, { params });
  return response.data;
};

export const getFeedbackById = async (id) => {
  const response = await axiosInstance.get(FEEDBACK_API.FEEDBACK_DETAIL(id));
  return response.data;
};

export const createFeedback = async (formData) => {
  const response = await axiosInstance.post(FEEDBACK_API.FEEDBACKS, formData);

  if (response.data && response.data.success === false) {
    throw response.data;
  }

  return response.data;
};

export const getFeedbackStats = async () => {
  const response = await axiosInstance.get(FEEDBACK_API.FEEDBACK_STATS);
  return response.data;
};

export const updateFeedbackStatus = async (id, status) => {
  const response = await axiosInstance.patch(FEEDBACK_API.FEEDBACK_DETAIL(id), { status });
  return response.data;
};

