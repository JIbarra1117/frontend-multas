import { fetchHistorialMultasPendientes } from "../../infrastructure/api/registroMultaAPI";

export const getHistorialMultasPendientes = async (token, userId) => {
  return await fetchHistorialMultasPendientes(token, userId);
};
