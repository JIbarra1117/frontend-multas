import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const getUsuarios = async (token) => {
  const res = await api.get("http://localhost:5000/api/usuarios", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // [{ id, nombre, ... }]
};
