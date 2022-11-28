import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";


export interface appState{
  usuarios: reducers.UsuariosState,
  usuario: reducers.UsuarioState


}

export const ROOT_REDUCERS: ActionReducerMap<appState> = {
  usuarios:reducers.usuariosReducer,
  usuario:reducers.usuarioReducer
}
