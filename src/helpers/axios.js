import axios from "axios";
import { getToken, isTokenExpired } from "@helpers/authentication";
import { isBrowser } from "@helpers/browser";
import { routes } from "@core/routes";

export const _axios = (
  method = "get",
  { baseURL = undefined, url, params, body, data, headers, cookies } = {}
) => {
  const token = cookies?.token || getToken();
  const fullToken = token ? `Bearer ${token}` : "";

  baseURL = baseURL || process.env.NEXT_PUBLIC_API_ENDPOINT;

  if (isBrowser() && token && isTokenExpired(token)) {
    window.location.href = routes.logout();
    return {};
  }

  headers = {
    // 'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json;charset=UTF-8",
    "X-Requested-With": process.env.NEXT_PUBLIC_API_ROOT,
    ...headers,
  };

  if (token) {
    headers.Authorization = fullToken;
  }

  return axios({
    baseURL,
    method,
    url,
    params,
    body,
    data,
    timeout: parseInt(process.env.NEXT_PUBLIC_REFRESH_INTERVAL),
    timeoutErrorMessage: "خطای دسترسی به اینترنت",
    // withCredentials: false,
    headers,
  }).catch((e) => {
    const { status } = e?.response || {};
    let message =
      e?.response?.data?.detail?.toString() || e.message?.toString();

    // user should login
    if (parseInt(status) === 401) {
      if (isBrowser()) {
        window.location.href = routes.logout({
          redirect: "auth",
          type: "expired",
        });
      }
      return;
    }

    // user should verify submitted phone number
    if (parseInt(status) === 555) {
      if (isBrowser()) {
        window.location.href = routes.logout({ redirect: "verify" });
      }
      return;
    }

    console.error("request failed", {
      baseURL,
      url,
      params,
      body,
      data,
      headers,
      cookies,
      error: message,
      e,
    });

    if (parseInt(status) !== 404 && message !== "Network Error") {
      const error = new Error(message);
      error.response = e.response;
      error.request = e.request;

      throw error;
    }
  });
};
