import {createAction, props} from "@ngrx/store";
import {Usuario} from "../../models/usuario";

export const cargarUsuarios = createAction('[Lista Usuarios] Cargar usuarios')
export const usuariosCargados = createAction('[Lista Usuarios] Usuarios cargados', props<{usuarios: Usuario[]}>())
export const usuariosCargadosError = createAction('[Lista Usuarios] Cargar usuarios error', props<{payload:any}>());
