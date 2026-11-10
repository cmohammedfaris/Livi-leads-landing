import axiosInstance from "../axiosInstance.js";
import { USER_API, DOCUMENTS_API } from "../endpoints.js";

export const getUsers = async () => {
  const response = await axiosInstance.get(USER_API.GET_USERS);
  return response.data;
};

export const getUser = async (id) => {
  const response = await axiosInstance.get(USER_API.GET_USER(id));
  return response.data;
};

export const checkUserAvailability = async (email) => {
  const response = await axiosInstance.post(
    `${USER_API.CHECK_AVAILABILITY}?email=${encodeURIComponent(email)}`,
  );
  return response.data;
};

export const createReturnDocumentFile = (formData) => {
  return axiosInstance.post(DOCUMENTS_API.RETURN_FILE_CREATE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const listReturnDocumentFiles = (documentDataId) => {
  return axiosInstance.get(
    `${DOCUMENTS_API.RETURN_FILE_LIST}${documentDataId}/`,
  );
};

export const updateReturnDocumentFile = (fileId, formData) => {
  return axiosInstance.patch(
    `${DOCUMENTS_API.RETURN_FILE_UPDATE}${fileId}/`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};
