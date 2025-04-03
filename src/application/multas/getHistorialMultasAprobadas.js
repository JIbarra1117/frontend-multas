import { fetchHistorialMultasAprobadas } from "../../infrastructure/api/registroMultaAPI";

export const getHistorialMultasAprobadas = async (token, userId) => {
  return await fetchHistorialMultasAprobadas(token, userId);
};
