import { createRegistroMulta } from "../../infrastructure/api/registroMultaAPI";

export const registrarMulta = async ({ descripcion, usuarioMultadoId, usuarioAutorId, multaId, token }) => {
  return await createRegistroMulta({ descripcion, usuarioMultadoId, usuarioAutorId, multaId }, token);
};
