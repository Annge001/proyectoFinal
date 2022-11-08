import { Usuario } from "./usuario";

export interface Sesion {
  sesionActiva: boolean;
  //? = para avisar que es opcional, ya que puede ser activo o no.
  usuarioActivo?: Usuario;
}
