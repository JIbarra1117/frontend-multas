// src/infrastructure/api/axiosInstance.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const createAxiosInstance = (token, logout, navigate) => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api", // o usa tu api.js
        headers: {
            "Content-Type": "application/json",
        },
    });

    instance.interceptors.request.use(
        (config) => {
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    const currentTime = Date.now() / 1000;
                    if (decoded.exp < currentTime) {
                        logout();
                        navigate("/auth/sign-in");
                        throw new axios.Cancel("Token expirado");
                    }
                } catch {
                    logout();
                    navigate("/auth/sign-in");
                    throw new axios.Cancel("Token inválido");
                }

                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => Promise.reject(error)
    );

    return instance;
};
