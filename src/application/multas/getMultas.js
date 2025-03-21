import { getMulta } from "../../infrastructure/api/multaAPI";

export const fetchMultas = async (token) => {
  return await getMulta(token);
};
