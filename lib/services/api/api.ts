import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1";

const apiInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      console.warn("Session expired or unauthorized request.");
      // Optional: Redirect to login or clear app state
    } else if (status === 403) {
      console.error("Access forbidden: You don't have permissions.");
    } else if (status === 500) {
      console.error("Internal Server Error: Something went wrong on the backend.");
    }

    return Promise.reject(error);
  }
);
export const api = {
  get: <T>(url: string, params?: object) =>
    apiInstance.get<T>(url, { params }).then(res => res.data),

  post: <T>(url: string, data?: object) =>
    apiInstance.post<T>(url, data).then(res => res.data),

  put: <T>(url: string, data?: object) =>
    apiInstance.put<T>(url, data).then(res => res.data),

  patch: <T>(url: string, data?: object) =>
    apiInstance.patch<T>(url, data).then(res => res.data),

  delete: <T>(url: string) =>
    apiInstance.delete<T>(url).then(res => res.data),
};

export default apiInstance;