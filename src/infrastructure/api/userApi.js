import axios from "axios";

export const getUsuarios = async (token) => {
  const res = await axios.get("http://localhost:5000/api/usuarios", {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res)
  return res.data; // [{ id, nombre, ... }]
};
