// src/config/api.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔁 Bandera global para evitar múltiples interceptores
let isInterceptorSet = false;
export const setAuthInterceptor = (token, logout) => {
  if (isInterceptorSet) return;

  requestInterceptorId = api.interceptors.request.use(
    (config) => {
      if (config.url.includes("/auth/login") || config.url.includes("/auth/register")) {
        return config;
      }

      if (!token) {
        logout?.();
        window.location.href = "/auth/sign-in";
        throw new axios.Cancel("Token no presente");
      }

      try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decoded.exp < currentTime) {
          console.log();
          logout?.();
          window.location.href = "/auth/session-expired";
          return config;
          // throw new axios.Cancel("Token expirado");
        }
      } catch {
        logout?.();
        window.location.href = "/auth/session-expired";
        throw new axios.Cancel("Token inválido");
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  isInterceptorSet = true;
};

let requestInterceptorId = null;

export const clearAuthInterceptor = () => {
  if (requestInterceptorId !== null) {
    api.interceptors.request.eject(requestInterceptorId);
    requestInterceptorId = null;
    isInterceptorSet = false;
  }
};
