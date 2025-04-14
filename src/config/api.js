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

// Función para configurar el interceptor
// export const setAuthInterceptor = (token, logout, navigate) => {
//   api.interceptors.request.use(
//     (config) => {
//       if (!token) {
//         logout?.();
//         navigate?.("/auth/sign-in");
//         throw new axios.Cancel("Token no presente");
//       }

//       try {
//         const decoded = jwtDecode(token);
//         const currentTime = Date.now() / 1000;
//         if (decoded.exp < currentTime) {
//           logout?.();
//           navigate?.("/auth/sign-in");
//           throw new axios.Cancel("Token expirado");
//         }
//       } catch {
//         logout?.();
//         navigate?.("/auth/sign-in");
//         throw new axios.Cancel("Token inválido");
//       }

//       config.headers.Authorization = `Bearer ${token}`;
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
// };

// 🔁 Bandera global para evitar múltiples interceptores
let isInterceptorSet = false;
export const setAuthInterceptor = (token, logout, navigate) => {
  if (isInterceptorSet) return;

  api.interceptors.request.use(
    (config) => {
      // ⛔ No interceptar rutas públicas
      if (config.url.includes("/auth/login") || config.url.includes("/auth/register")) {
        return config;
      }

      if (!token) {
        logout?.();
        navigate?.("/auth/sign-in");
        throw new axios.Cancel("Token no presente");
      }

      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          logout?.();
          navigate?.("/auth/sign-in");
          throw new axios.Cancel("Token expirado");
        }
      } catch {
        logout?.();
        navigate?.("/auth/sign-in");
        throw new axios.Cancel("Token inválido");
      }

      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  isInterceptorSet = true;
};

