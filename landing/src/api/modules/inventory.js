import axiosInstance from "../axiosInstance";
import { INVENTORY_API } from "../endpoints";

const inventoryModule = {
  // Category Management
  getCategories: () => axiosInstance.get(INVENTORY_API.CATEGORIES),
  createCategory: (data) => axiosInstance.post(INVENTORY_API.CATEGORIES, data),
  updateCategory: (id, data) => axiosInstance.put(`${INVENTORY_API.CATEGORIES}${id}/`, data),
  deleteCategory: (id) => axiosInstance.delete(`${INVENTORY_API.CATEGORIES}${id}/`),

  // SubCategory Management
  getSubCategories: (params) => axiosInstance.get(INVENTORY_API.SUB_CATEGORIES, { params }),
  createSubCategory: (data) => axiosInstance.post(INVENTORY_API.SUB_CATEGORIES, data),
  deleteSubCategory: (id) => axiosInstance.delete(`${INVENTORY_API.SUB_CATEGORIES}${id}/`),

  // Product Management
  getProducts: (params) => axiosInstance.get(INVENTORY_API.PRODUCTS, { params }),
  getUserServices: (params) => axiosInstance.get(INVENTORY_API.USER_SERVICES, { params }),
  getProductDetail: (id) => axiosInstance.get(`${INVENTORY_API.PRODUCTS}${id}/`),
  createProduct: (data) => axiosInstance.post(INVENTORY_API.PRODUCTS, data, {
    headers: { "Content-Type": "multipart/form-data" }
  }),
  updateProduct: (id, data) => axiosInstance.patch(`${INVENTORY_API.PRODUCTS}${id}/`, data, {
    headers: { "Content-Type": "multipart/form-data" }
  }),
  deleteProduct: (id) => axiosInstance.delete(`${INVENTORY_API.PRODUCTS}${id}/`),

  // Stock Management
  updateStock: (id, data) => axiosInstance.post(INVENTORY_API.UPDATE_STOCK(id), data),
  getStockHistory: (id, params) => axiosInstance.get(INVENTORY_API.STOCK_HISTORY(id), { params }),
  getLowStockAlerts: () => axiosInstance.get(INVENTORY_API.LOW_STOCK),

  // Document Requirements
  getDocRequirements: (params) => axiosInstance.get(INVENTORY_API.DOC_REQUIREMENTS, { params }),
  createDocRequirement: (data) => axiosInstance.post(INVENTORY_API.DOC_REQUIREMENTS, data),
  deleteDocRequirement: (id) => axiosInstance.delete(`${INVENTORY_API.DOC_REQUIREMENTS}${id}/`),

  // Bulk Import
  bulkUpload: (formData) => axiosInstance.post(INVENTORY_API.BULK_UPLOAD, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  }),
  downloadTemplate: () => axiosInstance.get(INVENTORY_API.DOWNLOAD_TEMPLATE, {
    responseType: "blob"
  }),

  // Import Access Control
  getImportStatus: () => axiosInstance.get(INVENTORY_API.IMPORT_STATUS),
  requestImportAccess: (data) => axiosInstance.post(INVENTORY_API.REQUEST_IMPORT, data),

  // ─── Supplier Management ───────────────────────────────────────────
  getSuppliers: (params) => axiosInstance.get(INVENTORY_API.SUPPLIERS, { params }),
  getSupplierDetail: (id) => axiosInstance.get(`${INVENTORY_API.SUPPLIERS}${id}/`),
  createSupplier: (data) => axiosInstance.post(INVENTORY_API.SUPPLIERS, data),
  updateSupplier: (id, data) => axiosInstance.patch(`${INVENTORY_API.SUPPLIERS}${id}/`, data),
  deleteSupplier: (id) => axiosInstance.delete(`${INVENTORY_API.SUPPLIERS}${id}/`),

  // ─── Purchase Order Management ─────────────────────────────────────
  getPurchaseOrders: (params) => axiosInstance.get(INVENTORY_API.PURCHASE_ORDERS, { params }),
  getPurchaseOrderDetail: (id) => axiosInstance.get(`${INVENTORY_API.PURCHASE_ORDERS}${id}/`),
  createPurchaseOrder: (data) => axiosInstance.post(INVENTORY_API.PURCHASE_ORDERS, data),
  updatePurchaseOrder: (id, data) => axiosInstance.patch(`${INVENTORY_API.PURCHASE_ORDERS}${id}/`, data),
  deletePurchaseOrder: (id) => axiosInstance.delete(`${INVENTORY_API.PURCHASE_ORDERS}${id}/`),

  // ─── Purchase Return Management ────────────────────────────────────
  getPurchaseReturns: (params) => axiosInstance.get(INVENTORY_API.PURCHASE_RETURNS, { params }),
  getPurchaseReturnDetail: (id) => axiosInstance.get(`${INVENTORY_API.PURCHASE_RETURNS}${id}/`),
  createPurchaseReturn: (data) => axiosInstance.post(INVENTORY_API.PURCHASE_RETURNS, data),
  updatePurchaseReturn: (id, data) => axiosInstance.patch(`${INVENTORY_API.PURCHASE_RETURNS}${id}/`, data),
  deletePurchaseReturn: (id) => axiosInstance.delete(`${INVENTORY_API.PURCHASE_RETURNS}${id}/`),
};

export default inventoryModule;
// Get public services list
export const getPublicServices = async (params) => {
  return await axiosInstance.get(INVENTORY_API.PUBLIC_SERVICES, { params });
};

export const getPublicServiceDetail = async (id) => {
  return await axiosInstance.get(INVENTORY_API.PUBLIC_SERVICE_DETAIL(id), { params: { public: 'true' } });
};

