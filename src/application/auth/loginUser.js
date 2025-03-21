import { loginAPI } from "../../infrastructure/api/authAPI";
import { User } from "../../domain/user";

export const loginUser = async (email, password) => {
  const { token, user } = await loginAPI(email, password);
  console.log(token, user)
  return {
    token,
    user: new User(user),
  };
};
