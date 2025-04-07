import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const createRegistroMulta = async (data, token) => {
  const res = await api.post("/registro-multas/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultas = async (token) => {
  const res = await api.get("/registro-multas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultasPendientes = async (token, userId) => {
  const res = await api.get(`/registro-multas/pendientes/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultasAprobadas = async (token, userId) => {
  const res = await api.get(`/registro-multas/aprobadas/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};


export const fetchHistorialMultasPorUsuario = async (token) => {
  const res = await api.get("/registro-multas/resumen-por-usuario", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};


export async function fetchAproveMulta(registroMultaId, token, userId) {
  try {
    console.log(registroMultaId, userId)
    const res = await api.post(
      `/registro-multas/approve/${registroMultaId}`,
      {
        userId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Axios lanza error automáticamente si status >= 400, pero si necesitas:
    if (res.status !== 200) {
      throw new Error(res.data?.error || "Error al aprobar la multa");
    }

    return res.data;
  } catch (error) {
    throw new Error(error.message || "Error en la solicitud");
  }
}

