import { fetchAproveMulta } from "../../infrastructure/registroMultaApi";

export const approveMulta = async (registroMultaId, token) => { return await fetchAproveMulta(registroMultaId, token); };