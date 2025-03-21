import { createMultaAPI } from "../../infrastructure/api/multaAPI";
import { Multa } from "../../domain/multa";

export const createMulta = async ({ descripcion, usuarioMultadoId, usuarioAutorId, token }) => {
  const data = await createMultaAPI({ descripcion, usuarioMultadoId, usuarioAutorId }, token);
  return new Multa(data.multa); // asumiendo que el backend retorna { multa: { ... } }
};
