/**
 * Mock session — any email is accepted; no server authentication.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const WELCOME_KEY = 'phillips-welcome-completed';

interface AuthState {
  email: string | null;
  displayName: string | null;
  signIn: (email: string, displayName?: string | null) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      displayName: null,
      signIn: (email, displayName = null) => {
        set({
          email: email.trim(),
          displayName: displayName?.trim() || null,
        });
      },
      signOut: () => {
        set({ email: null, displayName: null });
        localStorage.removeItem(WELCOME_KEY);
      },
    }),
    { name: 'phillips-auth-session' }
  )
);

export const useSessionEmail = () => useAuthStore((s) => s.email);
export const useSessionDisplayName = () => useAuthStore((s) => s.displayName);
