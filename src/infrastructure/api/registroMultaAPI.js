import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const createRegistroMulta = async (data, token) => {
  const res = await api.post("http://localhost:5000/api/registro-multas/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultas = async (token) => {
  const res = await api.get("http://localhost:5000/api/registro-multas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultasPendientes = async (token, userId) => {
  const res = await api.get(`http://localhost:5000/api/registro-multas/pendientes/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultasAprobadas = async (token, userId) => {
  const res = await api.get(`http://localhost:5000/api/registro-multas/aprobadas/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};


export const fetchHistorialMultasPorUsuario = async (token) => {
  const res = await api.get("http://localhost:5000/api/registro-multas/resumen-por-usuario", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export async function fetchAproveMulta(registroMultaId, token) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/registro-multas/approve/${registroMultaId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Error al aprobar la multa");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
