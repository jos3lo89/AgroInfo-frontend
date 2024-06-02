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
  return await axiosI.post("/usuario/create", userData);
};

// perfil de usuario
export const getUserF = async () => {
  return await axiosI.get("/usuario/get");
};

// borrar y eliminar la foto del usuario
export const photoDelete = async () => {
  return await axiosI.delete("/usuario/deletephoto");
};

// cambiar de foto
export const changePhoto = async (data: FormData) => {
  return await axiosI.post("/usuario/photo", data);
};
