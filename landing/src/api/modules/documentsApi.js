import axiosInstance from "../axiosInstance";
import { DOCUMENTS_API } from "../endpoints";

// ==========================================================
// 📄 DOCUMENT REQUEST APIs
// ==========================================================

// ✅ Create new document request
export const createDocumentRequest = (data) => {
  return axiosInstance.post(DOCUMENTS_API.DOCUMENT_REQUEST, data);
};

// ✅ Update document request (partial)
export const updateDocumentRequest = (data) => {
  // Your backend expects patch with { id, ...fields }
  return axiosInstance.patch(DOCUMENTS_API.DOCUMENT_REQUEST, data);
};

// ✅ Get all document requests (by_me, to_me, or both)
export const listDocumentRequests = (filter = null) => {
  const url = filter
    ? `${DOCUMENTS_API.DOCUMENT_REQUEST}?filter=${filter}`
    : DOCUMENTS_API.DOCUMENT_REQUEST;
  return axiosInstance.get(url);
};

// 🗑️ Delete a document request by ID
export const deleteDocumentRequest = (id) => {
  return axiosInstance.delete(`${DOCUMENTS_API.DOCUMENT_REQUEST}?id=${id}`);
};

// ==========================================================
// 📑 DOCUMENT DATA APIs
// ==========================================================

// ✅ List document data (optionally by request ID)
export const listDocumentData = (documentRequestId = null) => {
  const url = documentRequestId
    ? `${DOCUMENTS_API.DOCUMENT_DATA}?document_request_id=${documentRequestId}`
    : DOCUMENTS_API.DOCUMENT_DATA;
  return axiosInstance.get(url);
};

// ✅ Create single or bulk document data
export const createDocumentData = (data) => {
  // Backend auto-detects single vs bulk by list/single input
  return axiosInstance.post(DOCUMENTS_API.DOCUMENT_DATA, data);
};

// ✅ Update single document data (PUT)
export const updateDocumentData = (data) => {
  // Must include { id, ...fields }
  return axiosInstance.put(DOCUMENTS_API.DOCUMENT_DATA, data);
};

// 🚫 Delete not implemented (optional)
export const deleteDocumentData = (id) => {
  return axiosInstance.delete(`${DOCUMENTS_API.DOCUMENT_DATA}${id}/`);
};

// ==========================================================
// 📂 DOCUMENT FILE APIs
// ==========================================================

// ✅ List all files for a document_data_id
export const listDocumentFiles = (documentDataId) => {
  return axiosInstance.get(
    `${DOCUMENTS_API.DOCUMENT_FILE}?document_data_id=${documentDataId}`,
  );
};

// ✅ Upload single or bulk files
export const uploadDocumentFiles = (formData) => {
  return axiosInstance.post(DOCUMENTS_API.DOCUMENT_FILE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ✅ Update (PATCH) a single file (remarks, etc.)
export const updateDocumentFile = (fileId, data) => {
  return axiosInstance.patch(`${DOCUMENTS_API.DOCUMENT_FILE}${fileId}/`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ✅ Approve / Reject file
export const actionOnDocumentFile = (
  fileId,
  action,
  data = {},
  isReturn = false,
) => {
  const baseUrl = isReturn
    ? DOCUMENTS_API.RETURN_DOCUMENT_FILE // Return file base URL
    : DOCUMENTS_API.DOCUMENT_FILE; // Normal file base URL

  return axiosInstance.post(`${baseUrl}action/${fileId}/`, { action, ...data });
};

// 🚫 Delete not implemented
export const deleteDocumentFile = (fileId) => {
  return axiosInstance.delete(`${DOCUMENTS_API.DOCUMENT_FILE}${fileId}/`);
};

export const updateReturnDocumentData = (payload) => {
  return axiosInstance.patch(DOCUMENTS_API.UPDATE_RETURN_DATA, payload);
};

export const uploadReturnDocumentFile = (formData) => {
  return axiosInstance.post(DOCUMENTS_API.RETURN_FILE_CREATE, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const listReturnDocumentFiles = (documentDataId) => {
  return axiosInstance.get(
    `${DOCUMENTS_API.RETURN_FILE_LIST}${documentDataId}/`,
  );
};

export const updateReturnDocumentFile = (fileId, data) => {
  return axiosInstance.patch(
    `${DOCUMENTS_API.RETURN_FILE_UPDATE}${fileId}/`,
    data,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
};

// ✅ Fetch document + customer by reference
export const fetchDocumentByReference = (reference) => {
  return axiosInstance.get(DOCUMENTS_API.FETCH_BY_REFERENCE(reference));
};
