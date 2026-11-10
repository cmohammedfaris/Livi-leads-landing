// src/api/modules/tasksApi.js
import axiosInstance from "../axiosInstance.js";
import { TASKS_API } from "../endpoints.js";

export const getTasks = async (params) => {
  const response = await axiosInstance.get(TASKS_API.TASKS, { params });
  return response.data;
};

export const getTaskById = async (id) => {
  const response = await axiosInstance.get(TASKS_API.TASK_DETAIL(id));
  return response.data;
};

export const createTask = async (data) => {
  const response = await axiosInstance.post(TASKS_API.TASKS, data);

  // Handle success flag as requested by user
  if (response.data && response.data.success === false) {
    throw response.data; // Throw the whole error object for the UI to handle
  }

  return response.data;
};

export const updateTask = async (id, data) => {
  const response = await axiosInstance.patch(TASKS_API.TASK_DETAIL(id), data);

  if (response.data && response.data.success === false) {
    throw response.data;
  }

  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axiosInstance.delete(TASKS_API.TASK_DETAIL(id));
  return response.data;
};

export const createAssignment = async (data) => {
  const response = await axiosInstance.post(TASKS_API.ASSIGNMENTS, data);
  return response.data;
};

export const respondToAssignment = async (id, data) => {
  const response = await axiosInstance.post(
    `${TASKS_API.ASSIGNMENTS}${id}/respond/`,
    data,
  );
  return response.data;
};

export const getEmployees = async () => {
  const response = await axiosInstance.get(TASKS_API.GET_EMPLOYEES);
  return response.data;
};

export const checkMeetingAvailability = async (date) => {
  const response = await axiosInstance.get(TASKS_API.MEETING_AVAILABILITY, {
    params: { date },
  });
  return response.data;
};

export const getTaskComments = async (taskId) => {
  const response = await axiosInstance.get(TASKS_API.COMMENTS(taskId));
  return response.data;
};

export const addTaskComment = async (taskId, data) => {
  const response = await axiosInstance.post(TASKS_API.COMMENTS(taskId), data);
  return response.data;
};
