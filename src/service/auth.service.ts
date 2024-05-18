import axiosI from "./axios";

// tipos
import { loginI, registrarI } from "../types/types";

// iniciar sesión
export const loginF = async (data: loginI) => {
  return await axiosI.post("/usuario/login", data);
};

// cerra sesión
export const logoutF = async () => {
  return await axiosI.post("/usuario/logout");
};

// registrar usuario publicos
export const registerF = async (userData: registrarI) => {
  return await axiosI.post("/usuario", userData)
}


// perfil de usuario
export const getUserF = async () => {
  return await axiosI.get("/usuario/profile")
}