import { fetchHistorialMultas } from "../../infrastructure/api/registroMultaAPI";

export const getHistorialMultas = async (token) => {
  return await fetchHistorialMultas(token);
};
