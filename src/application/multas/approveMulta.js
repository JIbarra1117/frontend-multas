import { fetchAproveMulta } from "../../infrastructure/api/registroMultaAPI";

export const approveMulta = async (registroMultaId, token) => { 
    return await fetchAproveMulta(registroMultaId, token); 
};