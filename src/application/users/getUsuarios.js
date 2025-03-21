import { getUsuarios } from "../../infrastructure/api/userApi";

export const fetchUsuarios = async (token) => {
  return await getUsuarios(token);
};
