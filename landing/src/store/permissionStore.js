import { create } from 'zustand';
import axiosInstance from '@api/axiosInstance';

export const usePermissionStore = create((set) => ({
  permissions: [],
  modulePermissions: {},
  version: 0,
  isPermissionsLoading: true,
  isPermissionsReady: false,
  error: null,

  resetPermissions: () => set({
    permissions: [],
    modulePermissions: {},
    version: 0,
    isPermissionsLoading: true,
    isPermissionsReady: false,
    error: null,
  }),

  fetchPermissions: async () => {
    set({ isPermissionsLoading: true, error: null });
    try {
      const response = await axiosInstance.get('v0/auth/me/permissions/');
      set({
        isPermissionsLoading: false,
        isPermissionsReady: true,
        permissions: response.data.data.permissions || [],
        modulePermissions: response.data.data.module_permissions || {},
        version: response.data.data.version || 0,
      });
      return response.data.data;
    } catch (error) {
      set({
        isPermissionsLoading: false,
        isPermissionsReady: true, // Avoid infinite loading on failure
        error: error.response?.data || 'Failed to fetch permissions',
        permissions: [],
        modulePermissions: {},
      });
      throw error;
    }
  },
}));
