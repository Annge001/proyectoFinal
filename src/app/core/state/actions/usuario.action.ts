import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../../models/usuario';

export const cargarUsuario = createAction('[Usuario] Cargar Usuario',props<{id:string}>());
export const usuarioCargado = createAction('[Usuario] Usuario cargado',props<{usuario:Usuario}>());
export const usuarioCargadoError = createAction('[Usuario] Cargar Usuario Error',props<{payload:any}>());
