import { api } from "../api/api";
import { ApiResponse } from "../api/types";
import type { SignInWithOtp, SignInWithOtpResponse, VerifyOtp, VerifyOtpResponse, LoginProvider, SessionResponse } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1";

const signWithOtp = async ({ email, type }: SignInWithOtp): Promise<ApiResponse<SignInWithOtpResponse>> => {
    try {
        const response = await api.post<ApiResponse<SignInWithOtpResponse>>("/auth/email-otp/send-verification-otp", {
            email,
            type,
        });
        return response;
    } catch (error: any) {
        const apiError = error.response?.data as ApiResponse;
        throw new Error(apiError?.message || "Failed to send OTP");
    }
};

const verifyOtp = async ({ email, otp }: VerifyOtp): Promise<VerifyOtpResponse> => {
    try {
        const response = await api.post<VerifyOtpResponse>("/auth/sign-in/email-otp", {
            email,
            otp,
        });
        setLastUsedProvider("email-otp");
        return response;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to verify OTP");
    }
};

const googleLogin = async (callbackURL: string = `${typeof window !== "undefined" ? window.location.origin : ""}/login?provider=google`) => {
    try {
        const response = await api.post<{ url: string }>("/auth/sign-in/social", {
            provider: "google",
            callbackURL,
        });
        if (typeof window !== "undefined" && response?.url) {
            window.location.href = response.url;
        }
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to initiate Google sign in");
    }
};

const getSession = async (): Promise<SessionResponse> => {
    try {
        const response = await api.get<SessionResponse>("/auth/get-session");
        return response;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to get session");
    }
};

const setLastUsedProvider = (provider: LoginProvider) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("lastUsedProvider", provider);
    }
};

const getLastUsedProvider = (): LoginProvider | null => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("lastUsedProvider") as LoginProvider | null;
    }
    return null;
};

const logOut = () => {
    try {
        const response = api.post("/auth/sign-out", {});
        return response;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Failed to logout");
    }
}
export const authService = {
    signWithOtp,
    verifyOtp,
    googleLogin,
    getSession,
    setLastUsedProvider,
    getLastUsedProvider,
    logOut
};
