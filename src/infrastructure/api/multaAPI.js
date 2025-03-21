import axios from "axios";

export const createMultaAPI = async (data, token) => {
  const response = await axios.post("http://localhost:5000/api/multas/create", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getMulta = async (token) => {
    const res = await axios.get("http://localhost:5000/api/multas", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; // [{ id, nombre }]
};