// src/api/index.js
import * as authApi from "./modules/authApi.js";
import * as businessApi from "./modules/businessApi.js";
import * as userApi from "./modules/userApi.js";
import * as adminApi from "./modules/adminApi.js";
import * as documentsApi from "./modules/documentsApi.js";
import * as hrmsApi from "./modules/hrmsApi.js";
import * as tasksApi from "./modules/tasksApi.js";
import inventoryApi from "./modules/inventory.js";
import * as enquiryApi from "./modules/enquiryApi.js";

export default {
  auth: authApi,
  business: businessApi,
  user: userApi,
  admin: adminApi,
  documents: documentsApi,
  hrms: hrmsApi,
  tasks: tasksApi,
  inventory: inventoryApi,
  enquiry: enquiryApi,
};
