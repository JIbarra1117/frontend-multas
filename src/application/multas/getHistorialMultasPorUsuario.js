import { fetchHistorialMultasPorUsuario } from "../../infrastructure/api/registroMultaAPI";

export const getHistorialMultasPorUsuario = async (token) => {
  return await fetchHistorialMultasPorUsuario(token);
};
