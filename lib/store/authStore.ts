import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/lib/services/auth/types";
import { authService } from "@/lib/services/auth/auth";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    setUser: (user: User | null) => void;
    checkSession: () => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isLoading: true,
            error: null,
            setUser: (user) => set({ user, isAuthenticated: !!user }),
            checkSession: async () => {
                set({ isLoading: true, error: null });
                try {
                    const response = await authService.getSession();
                    if (response?.user) {
                        set({ user: response.user, isAuthenticated: true, isLoading: false });
                    } else {
                        set({ user: null, isAuthenticated: false, isLoading: false });
                    }
                } catch (error: any) {
                    set({ user: null, isAuthenticated: false, isLoading: false, error: error.message });
                }
            },
            logout: () => {
                // You can add api.post("/auth/sign-out") here if you have a sign-out method in authService
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
        }
    )
);
