import axios from "axios";
import { useAuthStore } from "../store/authStore.js"; 
import { usePermissionStore } from "../store/permissionStore.js";
import { AUTH_API } from "./endpoints.js";
import toast from "react-hot-toast";

const getOrCreateDeviceId = () => {
  if (typeof window === "undefined" || !window.localStorage) {
    return "";
  }
  let deviceId = localStorage.getItem("device_id");
  if (!deviceId) {
    deviceId = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    localStorage.setItem("device_id", deviceId);
  }
  return deviceId;
};

const DEVICE_ID = getOrCreateDeviceId();

export const getApiBaseUrl = () => {
  if (typeof window !== "undefined" && window.location) {
    const { hostname } = window.location;

    // 1. Microsoft Dev Tunnels detection (e.g. tnk991j8-3000.inc1.devtunnels.ms -> tnk991j8-8000.inc1.devtunnels.ms)
    if (hostname.includes(".devtunnels.ms")) {
      const apiHost = hostname.replace(/-(3000|5173|5174|8000)/, "-8000");
      return `https://${apiHost}/api/`;
    }

    // 2. Local network IP detection (e.g. 192.168.x.x or 10.x.x.x)
    if (/^192\.168\.\d+\.\d+$/.test(hostname) || /^10\.\d+\.\d+\.\d+$/.test(hostname)) {
      return `http://${hostname}:8000/api/`;
    }

    // 3. Localhost development
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return `http://${hostname}:8000/api/`;
    }
  }

  if (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  try {
    if (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) {
      return import.meta.env.VITE_API_BASE_URL;
    }
  } catch (e) {}
  return "http://localhost:8000/api/";
};

const axiosInstance = axios.create({
  baseURL: getApiBaseUrl(),
  headers: { "Content-Type": "application/json" },
});

// A clean axios instance for refresh — avoids recursion into interceptors
const refreshInstance = axios.create({
  baseURL: getApiBaseUrl(),
  headers: { 
    "Content-Type": "application/json",
    "X-Device-ID": DEVICE_ID
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

// Deactivation/termination keywords to detect in 403 responses
const DEACTIVATION_KEYWORDS = [
  "deactivated",
  "terminated",
  "inactive",
  "Access denied",
];

/**
 * Check if a 403 response is due to employee deactivation or termination.
 * If so, show a toast, clear auth, and redirect to login.
 * Returns true if handled (caller should not process further).
 */
const handleDeactivationResponse = (error) => {
  const detail =
    error.response?.data?.detail ||
    error.response?.data?.message ||
    "";
  const isDeactivation = DEACTIVATION_KEYWORDS.some((kw) =>
    detail.toLowerCase().includes(kw.toLowerCase()),
  );

  if (isDeactivation) {
    // Show toast with the backend message
    toast.error(detail || "Your business account access is temporarily restricted.", {
      duration: 5000,
      position: "top-center",
      style: {
        background: "#DC2626",
        color: "#fff",
        fontWeight: "600",
        fontSize: "14px",
        borderRadius: "12px",
        padding: "14px 20px",
      },
    });

    // Redirect to user consumer portal instead of force logging out
    setTimeout(() => {
      window.location.href = "/user/documents";
    }, 1500);

    return true;
  }

  return false;
};

// Attach access token to every request and handle FormData content type
axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = getApiBaseUrl();
    const { accessToken } = useAuthStore.getState().tokenInfo;
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    // Attach Device ID for session tracking and token binding validation
    if (DEVICE_ID) {
      config.headers["X-Device-ID"] = DEVICE_ID;
    }

    // When sending FormData (file uploads), let the browser set Content-Type
    // with the correct multipart boundary. The hardcoded application/json
    // header would break file uploads.
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Handle 401 (expired token) and 403 (deactivated/terminated) responses
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const detail = error.response?.data?.detail || error.response?.data?.message || "";
    const isTokenExpired = detail === "Token has expired." || detail === "Signature has expired." || detail.toLowerCase().includes("expired");

    // 🔒 Handle Device Session Termination / Mismatch
    if (status === 403 || status === 401) {
      const isDeviceTerminated = 
        detail.includes("Device mismatch") || 
        detail.includes("Device session has been terminated");

      if (isDeviceTerminated) {
        if (!window._isLoggingOutDevice) {
          window._isLoggingOutDevice = true;
          
          toast.error("Device session terminated. Logging out...", {
            duration: 3000,
            position: "top-center",
            style: {
              background: "#DC2626",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "14px 20px",
            },
          });

          useAuthStore.getState().resetToken();
          usePermissionStore.getState().resetPermissions();

          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
        return Promise.reject(error);
      }
    }

    // 🔒 Handle 403 — employee deactivation or termination
    if (status === 403 && !isTokenExpired) {
      if (handleDeactivationResponse(error)) {
        return Promise.reject(error); // Stop further processing
      }
    }

    const isAuthUrl = originalRequest.url && (
      originalRequest.url.includes("v0/auth/token/") || 
      originalRequest.url.includes("v0/auth/rotate/token/") ||
      originalRequest.url.includes("v0/auth/google/")
    );

    if ((status === 401 || (status === 403 && isTokenExpired)) && !isAuthUrl && !originalRequest._retry) {
      // Queue handling
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((newToken) => {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        });
      }

      // Mark the retry flag to prevent infinite loops
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { refreshToken } = useAuthStore.getState().tokenInfo;
        if (!refreshToken) {
          useAuthStore.getState().resetToken();
          usePermissionStore.getState().resetPermissions();
          
          if (!window._isLoggingOutDevice) {
            window._isLoggingOutDevice = true;
            toast.error("Session expired. Please log in again.", {
              duration: 3000,
              position: "top-center",
              style: {
                background: "#DC2626",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
                borderRadius: "12px",
                padding: "14px 20px",
              },
            });
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          }
          return Promise.reject(error);
        }

        // Call the refresh API (use refreshInstance to avoid interceptors)
        const response = await refreshInstance.post(AUTH_API.REFRESH, {
          refresh: refreshToken,
        });

        const newAccessToken = response.data?.data?.access;
        const newRefreshToken = response.data?.data?.refresh;

        if (!newAccessToken) throw new Error("No access token in response");

        // ✅ Update Zustand store
        useAuthStore.getState().setTokenDetails({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });

        // ✅ Process waiting requests
        processQueue(null, newAccessToken);
        isRefreshing = false;

        // ✅ Retry original failed request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        useAuthStore.getState().resetToken();
        usePermissionStore.getState().resetPermissions();
        
        if (!window._isLoggingOutDevice) {
          window._isLoggingOutDevice = true;
          toast.error("Session expired. Please log in again.", {
            duration: 3000,
            position: "top-center",
            style: {
              background: "#DC2626",
              color: "#fff",
              fontWeight: "600",
              fontSize: "14px",
              borderRadius: "12px",
              padding: "14px 20px",
            },
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
