import jwtDecode from "jwt-decode";
import { $host } from ".";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  return jwtDecode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", { email, password });
  return jwtDecode(data.token);
};

export const check = async () => {
  const response = await $host.post("api/auth/registration");
  return response;
};
