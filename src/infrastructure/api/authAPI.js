import axios from "axios";

export const loginAPI = async (email, password) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", {
    email,
    password,
  });

  console.log(response)

  return response.data; // { token, user }
};

export const registerAPI = async ({ nombre, email, password, rol }) => {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      nombre,
      email,
      password,
      rol,
    });
    return res.data; // { token, user }
  };
  