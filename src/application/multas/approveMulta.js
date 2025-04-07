import { fetchAproveMulta } from "../../infrastructure/api/registroMultaAPI";

export const approveMulta = async (registroMultaId, token, userId) => {
    return await fetchAproveMulta(registroMultaId, token, userId);
};