import { registerAPI } from "../../infrastructure/api/authAPI";
import { User } from "../../domain/user";

export const registerUser = async ({ nombre, email, password, rol }) => {
  const { token, user } = await registerAPI({ nombre, email, password, rol });
  return {
    token,
    user: new User(user),
  };
};
