import axios from "axios";

export const createRegistroMulta = async (data, token) => {
  const res = await axios.post("http://localhost:5000/api/registro-multas/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchHistorialMultas = async (token) => {
  const res = await axios.get("http://localhost:5000/api/registro-multas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};


export const fetchHistorialMultasPorUsuario = async (token) => {
  const res = await axios.get("http://localhost:5000/api/registro-multas/resumen-por-usuario", {
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
