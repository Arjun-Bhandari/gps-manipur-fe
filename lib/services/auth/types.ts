interface User {
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    banned: boolean;
    banReason?: string;
    banExpires?: string;
    phone?: string;
    studentClass?: string;
    gender?: string;
    isOnboarded: boolean;
    id: string;
}

type LoginProvider = "google" | "email-otp";

interface SignInWithOtp {
    email: string;
    type: string;
}
interface VerifyOtp {
    email: string;
    otp: string;
}

interface SignInWithOtpResponse {
    success: boolean;
}

interface VerifyOtpResponse {
    token: string;
    user: User;
}

interface SessionResponse {
    session: {
        id: string;
        userId: string;
        token: string;
        expiresAt: string;
    };
    user: User;
}

interface OnboardingInput {
    name: string;
    phone: string;
    studentClass: string;
    gender: string;
}

interface OnboardingResponse {
    user: User;
    redirect: string;
}

export type {
    User,
    LoginProvider,
    SignInWithOtp,
    VerifyOtp,
    SignInWithOtpResponse,
    VerifyOtpResponse,
    SessionResponse,
    OnboardingInput,
    OnboardingResponse,
};