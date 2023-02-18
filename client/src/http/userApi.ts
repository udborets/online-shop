import jwtDecode from "jwt-decode";
import { $host } from ".";
import { AxiosError } from 'axios';

export const registration = async (email: string, password: string) => {
  try {
    const { data } = await $host.post("api/user/registration", {
      email,
      password,
      role: "ADMIN",
    });
    return jwtDecode(data.token);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return err;
    }
    else {
      console.error(err);
    }
  }
};
export const login = async (email: string, password: string) => {
  try {
    const { data } = await $host.post("api/user/login", { email, password });
    return jwtDecode(data.token);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return err;
    }
    else {
      console.error(err);
    }
  }
};
export const check = async () => {
  try {
    const response = await $host.post("api/auth/registration");
    return response;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return err;
    }
    else {
      console.error(err);
    }
  }
};
