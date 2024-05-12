import axiosI from "./axios";

// tipos
import { loginI } from "../types/types";

// iniciar sesión
export const loginF = async (data: loginI) => {
  return await axiosI.post("/usuario/login", data);
};

// cerra sesión
export const logoutF = async () => {
  return await axiosI.post("/usuario/logout");
};
