import { QueryClient } from "@tanstack/react-query";

const NON_RETRYABLE_STATUS_CODES = new Set([400, 401, 403, 404, 422]);

const getErrorStatus = (error: unknown): number | undefined => {
  const maybeError = error as { status?: number; response?: { status?: number } };
  return maybeError?.status ?? maybeError?.response?.status;
};

export const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 10 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        retry: (failureCount, error) => {
          const status = getErrorStatus(error);
          if (status && NON_RETRYABLE_STATUS_CODES.has(status)) {
            return false;
          }

          return failureCount < 2;
        },
      },
      mutations: {
        retry: 0,
      },
    },
  });
};
