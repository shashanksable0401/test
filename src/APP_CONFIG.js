export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || " ";

export const AUTH_SERVICE_HOST = " ";

export const AUTH_SERVICE_URL = `${AUTH_SERVICE_HOST}/v1/modfin-heimdall`;

export const API_TIMEOUT = parseInt(
  process.env.REACT_APP_API_TIMEOUT || "600000",
);

export const AUTH_SERVICE_LOGIN_URL =
  process.env.REACT_APP_SERVICE_LOGIN_URL || `${AUTH_SERVICE_URL}/login`;

export const AUTH_SERVICE_LOGOUT_URL =
  process.env.REACT_APP_SERVICE_LOGOUT_URL || `${AUTH_SERVICE_URL}/logout`;
