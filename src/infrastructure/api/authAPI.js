import { api } from "../../config/api"; // ajusta la ruta según tu estructura

export const loginAPI = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  console.log(response)

  return response.data; // { token, user }
};

export const registerAPI = async ({ nombre, email, password, rol }) => {
    const res = await api.post("/auth/register", {
      nombre,
      email,
      password,
      rol,
    });
    return res.data; // { token, user }
  };
  