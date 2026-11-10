// src/api/modules/hrmsApi.js
import axiosInstance from "../axiosInstance.js";
import { HRMS_API } from "../endpoints.js";

export const getRoles = async (params) => {
  const response = await axiosInstance.get(HRMS_API.ROLES, { params });
  return response.data;
};

export const createRole = async (data) => {
  const response = await axiosInstance.post(HRMS_API.ROLES, data);
  return response.data;
};

export const deleteRole = async (id) => {
  const response = await axiosInstance.delete(`${HRMS_API.ROLES}${id}/`);
  return response.data;
};


export const getEmployees = async (params) => {
  const response = await axiosInstance.get(HRMS_API.EMPLOYEES, { params });
  return response.data;
};

export const getEmployeeById = async (id) => {
  const response = await axiosInstance.get(`${HRMS_API.EMPLOYEES}${id}/`);
  return response.data;
};

export const createEmployee = async (data) => {
  const response = await axiosInstance.post(HRMS_API.EMPLOYEES, data);
  return response.data;
};

export const updateEmployee = async (id, data) => {
  const response = await axiosInstance.patch(`${HRMS_API.EMPLOYEES}${id}/`, data);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axiosInstance.delete(`${HRMS_API.EMPLOYEES}${id}/`);
  return response.data;
};

export const reassignAndTerminateEmployee = async (id, data) => {
  const response = await axiosInstance.post(HRMS_API.REASSIGN_AND_TERMINATE(id), data);
  return response.data;
};


export const bulkUploadEmployees = async (data) => {
  const isFormData = data instanceof FormData;
  const response = await axiosInstance.post(
    HRMS_API.BULK_UPLOAD, 
    data, 
    {
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
      },
    }
  );
  return response.data;
};

export const getPermissions = async (params) => {
  const response = await axiosInstance.get(HRMS_API.PERMISSIONS, { params });
  return response.data;
};

export const updateBulkPermissions = async (employeeId, permissions) => {
  const response = await axiosInstance.post(
    HRMS_API.UPDATE_PERMISSIONS(employeeId),
    { permissions }
  );
  return response.data;
};

export const getSalaryDetails = async (params) => {
  const response = await axiosInstance.get(HRMS_API.SALARY, { params });
  return response.data;
};

export const createSalaryDetails = async (data) => {
  const response = await axiosInstance.post(HRMS_API.SALARY, data);
  return response.data;
};

export const getBankDetails = async (params) => {
  const response = await axiosInstance.get(HRMS_API.BANK_DETAILS, { params });
  return response.data;
};

export const createBankDetails = async (data) => {
  const response = await axiosInstance.post(HRMS_API.BANK_DETAILS, data);
  return response.data;
};

export const updateBankDetails = async (id, data) => {
  const response = await axiosInstance.patch(`${HRMS_API.BANK_DETAILS}${id}/`, data);
  return response.data;
};

export const getEmployeeDocuments = async (params) => {
  const response = await axiosInstance.get(HRMS_API.DOCUMENTS, { params });
  return response.data;
};

export const uploadEmployeeDocument = async (formData) => {
  const response = await axiosInstance.post(HRMS_API.DOCUMENTS, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const checkEmployeeEmail = async (email) => {
  const response = await axiosInstance.post(`${HRMS_API.EMPLOYEES}check-email/`, { email });
  return response.data;
};

export const checkEmployeeEmailsBatch = async (emails) => {
  const response = await axiosInstance.post(`${HRMS_API.EMPLOYEES}check-emails-batch/`, { emails });
  return response.data;
};

export const inviteEmployee = async (data) => {
  const response = await axiosInstance.post(`${HRMS_API.EMPLOYEES}invite/`, data);
  return response.data;
};

export const reinviteEmployee = async (id) => {
  const response = await axiosInstance.post(`${HRMS_API.EMPLOYEES}${id}/reinvite/`);
  return response.data;
};

export const parseResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);
  const response = await axiosInstance.post(HRMS_API.PARSE_RESUME, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// ==========================================
// Integrations: Invitation System
// ==========================================

export const listInvitations = async (params) => {
  const response = await axiosInstance.get(HRMS_API.INVITATIONS, { params });
  return response.data;
};

export const resendInvitation = async (id) => {
  const response = await axiosInstance.post(HRMS_API.RESEND_INVITATION(id));
  return response.data;
};

export const revokeInvitation = async (id) => {
  const response = await axiosInstance.post(HRMS_API.REVOKE_INVITATION(id));
  return response.data;
};
