import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      tokenInfo: {
        accessToken: null,
        refreshToken: null,
      },
      rememberMe: false,

      setTokenDetails: (payload) => set((state) => ({
        tokenInfo: {
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        },
        rememberMe: payload.rememberMe !== undefined ? payload.rememberMe : state.rememberMe,
      })),

      resetToken: () => set({
        tokenInfo: {
          accessToken: null,
          refreshToken: null,
        },
        rememberMe: false,
      }),
    }),
    {
      name: 'auth-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage), // Persist tokens
    }
  )
);
