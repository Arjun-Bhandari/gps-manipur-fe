
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: {
    code: string;
    details?: any;
  };
  timestamp: string;
}

export interface ApiError extends Error {
  response?: {
    data: ApiResponse;
    status: number;
  };
}
