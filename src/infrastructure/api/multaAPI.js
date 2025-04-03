import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const createMultaAPI = async (data, token) => {
  const response = await api.post("/multas/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getMulta = async (token) => {
    const res = await api.get("/multas", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; // [{ id, nombre }]
};