// inicar sesión
export interface loginI {
  correo: string;
  clave: string;
}

// datosUsuario AuthStore
export interface authUserI {
  nombre: string;
  foto: string;
}

// registrar usuario
export interface registrarI {
  usuario: string;
  nombre: string;
  apellido: string;
  correo: string;
  clave: string;
}


// perfil de usuario
export interface perfilI {
  apellido: string
  correo: string
  fechaActualizado: string
  fechaCreacion: string
  foto: string
  id: string
  nombre: string
  rol: string
  usuario: string
}
