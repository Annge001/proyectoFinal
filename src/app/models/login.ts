import { Usuario } from "./usuario";

export interface Sesion {
  loginActivo: boolean;
  //? = para avisar que es opcional, ya que puede ser activo o no.
  usuarioActivo?: Usuario;
}
