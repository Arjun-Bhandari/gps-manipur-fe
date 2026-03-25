import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { authKeys } from "@/lib/query/query-keys";
import { authService } from "./auth";
import { onboardingService } from "./onboarding";
import type { OnboardingInput, SignInWithOtp, VerifyOtp } from "./types";

export const sessionQueryOptions = () =>
  queryOptions({
    queryKey: authKeys.session(),
    queryFn: authService.getSession,
    staleTime: 2 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });

export const useSessionQuery = (enabled = true) => {
  return useQuery({
    ...sessionQueryOptions(),
    enabled,
  });
};

export const useSendOtpMutation = () => {
  return useMutation({
    mutationFn: (payload: SignInWithOtp) => authService.signWithOtp(payload),
  });
};

export const useVerifyOtpMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: VerifyOtp) => authService.verifyOtp(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
  });
};

export const useGoogleSignInMutation = () => {
  return useMutation({
    mutationFn: (callbackURL: string) => authService.googleLogin(callbackURL),
  });
};

export const useOnboardingMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: OnboardingInput) => onboardingService.onBoarding(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
  });
};

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authService.logOut(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: authKeys.all });
    },
  });
};
