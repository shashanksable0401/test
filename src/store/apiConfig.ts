import axios from "axios";
import { API_BASE_URL, API_TIMEOUT } from "../APP_CONFIG";
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

export const externalApi = axios.create({
  timeout: API_TIMEOUT,
});

api.interceptors.response.use(
  (response: any) => Promise.resolve(response),
  (error: any) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const errorJSON = error.toJSON();

    if (errorJSON.code && errorJSON.code === "ECONNABORTED") {
      return Promise.reject({
        data: {
          message: "TimeOut, Internet Speed is Slow",
        },
      });
    }

    if (errorJSON.message === "Network Error") {
      return Promise.reject({
        data: {
          message: "Please check your Internet connection and retry.",
        },
      });
    }

    if (error.response && error.response.status === 401) {
      // If "401 Unauthorized" from backend, then User is not authenticated
      // redirect user to auth service with current url as next url
      // place your code for Unauthorized user here
    }

    if (error.response && error.response.status === 403) {
      // If "403 Forbidden" from backend, then User is not authorized or does not have necessary permission to complete this operation
      // Notify user about the "Unauthorized Access"
      // return Promise.reject({
      //     ...error.response,
      //     data: {
      //         message: error.response.data,
      //     },
      // });
    }
    return Promise.reject(error.response);
  },
);
