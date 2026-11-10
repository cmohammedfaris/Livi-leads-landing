// src/api/modules/authApi.js
import axiosInstance from "../axiosInstance.js";
import { AUTH_API } from "../endpoints.js";

// Login
export const loginUser = (data) => {
  return axiosInstance.post(AUTH_API.LOGIN, data);
};

// Refresh token
export const refreshToken = (refreshToken) => {
  return axiosInstance.post(AUTH_API.REFRESH, { refresh: refreshToken });
};

// Logout
export const logoutUser = (refreshToken) => {
  // Pass refresh token in body to blacklist
  return axiosInstance.post(AUTH_API.LOGOUT, { refresh: refreshToken });
};

// Signup
export const signupUser = (data) => {
  return axiosInstance.post(AUTH_API.SIGNUP, data);
};

// Google Login
export const googleLogin = (tokens) => {
  return axiosInstance.post(AUTH_API.GOOGLE_LOGIN, tokens);
};

// Activate account
export const activateUser = (params) => {
  return axiosInstance.post(AUTH_API.ACTIVATE, null, { params });
};

export const ResendActivationLink = (data) => {
  return axiosInstance.post(AUTH_API.RESEND_LINK, data);
};
// Password reset
export const passwordReset = (data) => {
  return axiosInstance.post(AUTH_API.PASSWORD_RESET, data);
};

// Verify password reset
export const verifyPasswordReset = (data) => {
  return axiosInstance.post(AUTH_API.VERIFY_PASSWORD_RESET, data);
};

// Change password
export const changePassword = (data) => {
  return axiosInstance.post(AUTH_API.CHANGE_PASSWORD, data);
};

// Update Password (authenticated)
export const updatePassword = (data) => {
  return axiosInstance.post(AUTH_API.UPDATE_PASSWORD, data);
};

// Validate invitation
export const validateInvitation = (token) => {
  return axiosInstance.get(AUTH_API.VALIDATE_INVITATION(token));
};

// Accept invitation
export const acceptInvitation = (token, data) => {
  return axiosInstance.post(AUTH_API.ACCEPT_INVITATION(token), data);
};

// Get User Profile
export const getUserProfile = () => {
  return axiosInstance.get(AUTH_API.PROFILE);
};

// Update User Profile
export const updateUserProfile = (data) => {
  return axiosInstance.put(AUTH_API.PROFILE, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
