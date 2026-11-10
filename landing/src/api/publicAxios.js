import axios from "axios";

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

  // 4. Server-side rendering (SSR) or env fallback
  if (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  return "http://localhost:8000/api/";
};

// A clean, unauthenticated axios instance for public landing pages
const publicAxios = axios.create({
  baseURL: getApiBaseUrl(),
  headers: { "Content-Type": "application/json" },
});

// Dynamically sync baseURL at request-time in client runtime
publicAxios.interceptors.request.use((config) => {
  config.baseURL = getApiBaseUrl();
  return config;
});

export default publicAxios;
