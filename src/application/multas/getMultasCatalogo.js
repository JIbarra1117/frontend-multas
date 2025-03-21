import { getMulta } from "../../infrastructure/api/multaAPI";

export const getMultasCatalogo = async (token) => {
  return await getMulta(token);
};
