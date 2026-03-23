import { api } from "../api/api";
import { ApiResponse } from "../api/types";
import { User, OnboardingInput, OnboardingResponse } from "./types";


const onBoarding = async ({ name, phone, studentClass, gender }: OnboardingInput): Promise<ApiResponse<OnboardingResponse>> => {
    try {
        const response = await api.post<ApiResponse<OnboardingResponse>>("/auth/onboarding", {
            name,
            phone,
            studentClass,
            gender,
        });
        return response;
    } catch (error: any) {
        const apiError = error.response?.data as ApiResponse;
        throw new Error(apiError?.message || "Failed to complete onboarding");
    }
};

export const onboardingService = {
    onBoarding,
};