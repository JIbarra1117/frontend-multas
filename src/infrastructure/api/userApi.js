import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const getUsuarios = async (token) => {
  const res = await api.get("/usuarios", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // [{ id, nombre, ... }]
};
