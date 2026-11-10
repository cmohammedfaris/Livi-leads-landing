// src/api/endpoints.js
export const AUTH_API = {
  LOGIN: "v0/auth/token/",
  LOGOUT: "v0/auth/logout/",
  REFRESH: "v0/auth/rotate/token/",
  RESEND_LINK: "v0/auth/resend/link/",
  SIGNUP: "v0/auth/signup/",
  GOOGLE_LOGIN: "v0/auth/google/",
  ACTIVATE: "v0/auth/activate/",
  PASSWORD_RESET: "v0/auth/password-reset/",
  VERIFY_PASSWORD_RESET: "v0/auth/verify/password-reset/",
  CHANGE_PASSWORD: "v0/auth/change/password/",
  UPDATE_PASSWORD: "v0/auth/update/password/",
  VALIDATE_INVITATION: (token) => `v0/auth/invitation/validate/${token}/`,
  ACCEPT_INVITATION: (token) => `v0/auth/invitation/accept/${token}/`,
  PROFILE: "v0/auth/me/profile/",
};

export const BUSINESS_API = {
  GET_BUSINESS: "/business/",
  CREATE_BUSINESS: "/business/create/",
  UPDATE_BUSINESS: "/business/update/",
};

export const USER_API = {
  GET_USERS: "/users/",
  GET_USER: (id) => `/users/${id}/`,
  CHECK_AVAILABILITY: "v0/auth/check/user-available/",
};

export const ADMIN_API = {
  DASHBOARD: "/admin/dashboard/",
  TEMPLATES: "v0/admin/templates/",
  USERS: "v0/admin/users/",
  BUSINESSES: "v0/admin/businesses/",
  VERIFY_BUSINESS: (id) => `v0/admin/businesses/${id}/verify/`,
  REJECT_BUSINESS: (id) => `v0/admin/businesses/${id}/reject/`,
  SUPPORT_TICKETS: "v0/admin/support-tickets/",
  PUBLIC_SUPPORT_TICKETS: "v0/admin/public/support-tickets/",
  CATEGORIES: "v0/admin/categories/",
  SUBCATEGORIES: "v0/admin/subcategories/",
  SERVICES: "v0/admin/services/",
  APPROVE_CATEGORY: (id) => `v0/admin/categories/${id}/approve/`,
  REJECT_CATEGORY: (id) => `v0/admin/categories/${id}/reject/`,
  APPROVE_SUBCATEGORY: (id) => `v0/admin/subcategories/${id}/approve/`,
  REJECT_SUBCATEGORY: (id) => `v0/admin/subcategories/${id}/reject/`,
  APPROVE_SERVICE: (id) => `v0/admin/services/${id}/approve/`,
  REJECT_SERVICE: (id) => `v0/admin/services/${id}/reject/`,
  SERVICES_STATS: "v0/admin/categories/stats/",
};

export const COMPANY_API = {
  GET_PROFILE: "v0/company/profile/",
  UPDATE_PROFILE: "v0/company/profile/update/",
  ACHIEVEMENTS: "v0/company/achievements/",
  COMPANY_WORKS: "v0/company/company-works/",
  TESTIMONIALS: "v0/company/testimonials/",
  BANK_DETAILS: "v0/company/bank-details/",
  COMPANY_DOCUMENTS: "v0/company/company-documents/",
  CUSTOM_TEMPLATES: "v0/company/custom-templates/",
  CHECK_NAME_AVAILABILITY: "v0/company/check-name-availability/",
  DASHBOARD: "v0/company/dashboard/",
  PUBLIC_DIRECTORY: "v0/company/directory/",
  PUBLIC_COMPANY_DETAIL: (id) => `v0/company/directory/${id}/`,
  QR_CODES: "v0/company/qr-codes/",
  PUBLIC_HELPLINE: (id) => `v0/company/public-helpline/${id}/`,
};

export const DOCUMENTS_API = {
  DOCUMENT_REQUEST: "v0/documents/document-requests/",
  DOCUMENT_DATA: "v0/documents/document-data/",
  DOCUMENT_FILE: "v0/documents/document-files/",
  DOCUMENT_FILE_ACTION: "v0/documents/document-files/action/",
  UPDATE_RETURN_DATA: "v0/documents/update/return-document/",
  RETURN_FILE_CREATE: "v0/documents/return-file/create/",
  RETURN_FILE_LIST: "v0/documents/return-file/list/",
  RETURN_FILE_UPDATE: "v0/documents/return-file/update/",
  RETURN_DOCUMENT_FILE: "v0/documents/return-document-files/",
  FETCH_BY_REFERENCE: (ref) => `v0/documents/reference/${ref}/`,
};

export const NOTIFICATIONS_API = {
  NOTIFICATIONS: "v0/notifications/",
  MARK_READ: (id) => `v0/notifications/${id}/mark_read/`,
  MARK_ALL_READ: "v0/notifications/mark_all_read/",
  UNREAD_COUNT: "v0/notifications/unread_count/",
};

export const HRMS_API = {
  ROLES: "v0/hr-system/roles/",
  EMPLOYEES: "v0/hr-system/employees/",
  BULK_UPLOAD: "v0/hr-system/employees/bulk-upload/",
  PERMISSIONS: "v0/hr-system/permissions/",
  SALARY: "v0/hr-system/salary-details/",
  BANK_DETAILS: "v0/hr-system/bank-details/",
  DOCUMENTS: "v0/hr-system/documents/",
  PARSE_RESUME: "v0/hr-system/employees/parse-resume/",
  UPDATE_PERMISSIONS: (id) => `v0/hr-system/employees/${id}/update-permissions/`,
  INVITATIONS: "v0/hr-system/invitations/",
  RESEND_INVITATION: (id) => `v0/hr-system/invitations/${id}/resend/`,
  REVOKE_INVITATION: (id) => `v0/hr-system/invitations/${id}/revoke/`,
  ME: "v0/hr-system/employees/me/",
  SUBMIT_ONBOARDING: "v0/hr-system/employees/submit-onboarding/",
  REASSIGN_AND_TERMINATE: (id) => `v0/hr-system/employees/${id}/reassign-and-terminate/`,
};

export const TASKS_API = {
  TASKS: "v0/tasks/tasks/",
  TASK_DETAIL: (id) => `v0/tasks/tasks/${id}/`,
  COMMENTS: (id) => `v0/tasks/tasks/${id}/comments/`,
  ASSIGNMENTS: "v0/tasks/assignments/",
  REMINDERS: "v0/tasks/reminders/",
  ATTACHMENTS: "v0/tasks/attachments/",
  GET_EMPLOYEES: "v0/tasks/get-employees/",
  MEETING_AVAILABILITY: "v0/tasks/tasks/meeting_availability/",
};

export const INVENTORY_API = {
  CATEGORIES: "v0/inventory/categories/",
  PRODUCTS: "v0/inventory/products/",
  USER_SERVICES: "v0/inventory/user/list-services/",
  INVENTORY: "v0/inventory/inventory/",
  SUB_CATEGORIES: "v0/inventory/sub-categories/",
  DOC_REQUIREMENTS: "v0/inventory/document-requirements/",
  UPDATE_STOCK: (id) => `v0/inventory/products/${id}/update-stock/`,
  STOCK_HISTORY: (id) => `v0/inventory/products/${id}/stock-history/`,
  LOW_STOCK: "v0/inventory/inventory/low-stock/",
  BULK_UPLOAD: "v0/inventory/products/bulk-upload/",
  DOWNLOAD_TEMPLATE: "v0/inventory/products/download-template/",
  IMPORT_STATUS: "v0/inventory/products/import-status/",
  REQUEST_IMPORT: "v0/inventory/products/request-import/",
  IMPORT_REQUESTS: "v0/inventory/import-requests/",
  // Suppliers
  SUPPLIERS: "v0/inventory/suppliers/",
  // Purchase Orders
  PURCHASE_ORDERS: "v0/inventory/purchase-orders/",
  // Purchase Returns
  PURCHASE_RETURNS: "v0/inventory/purchase-returns/",
  // Public/User Facing Services
  PUBLIC_SERVICES: "v0/inventory/user/list-services/",
  PUBLIC_LANDING_SERVICES: "v0/inventory/public/services/",
  PUBLIC_SERVICE_DETAIL: (id) => `v0/inventory/products/${id}/`,
};

export const ENQUIRY_API = {
  USER_ENQUIRIES: "v0/enquiry/user/",
  BUSINESS_ENQUIRIES: "v0/enquiry/business/",
};

export const BUSINESS_CARD_API = {
  CARDS: "v0/company/digital-cards/",
  PUBLIC_CARD: (id) => `v0/company/public-card/${id}/`,
  VCARD: (id) => `v0/company/digital-cards/${id}/vcard/`,
};

export const FEEDBACK_API = {
  FEEDBACKS: "v0/feedback/feedbacks/",
  FEEDBACK_DETAIL: (id) => `v0/feedback/feedbacks/${id}/`,
  FEEDBACK_STATS: "v0/feedback/feedbacks/stats/",
};

export const BLOG_API = {
  BLOGS: "v0/blogs/",
  BLOG_DETAIL: (slug) => `v0/blogs/${slug}/`,
  CATEGORIES: "v0/blogs/categories/",
  TAGS: "v0/blogs/tags/",
  ADMIN_BLOGS: "v0/admin/blogs/",
  ADMIN_BLOG_DETAIL: (id) => `v0/admin/blogs/${id}/`,
  ADMIN_UPLOAD_IMAGE: "v0/admin/blogs/upload-image/",
};


