import { Action, createReducer, on } from '@ngrx/store';
import {Usuario} from "../../../models/usuario";
import {cargarUsuario, usuarioCargado, usuarioCargadoError} from "../actions";

export interface UsuarioState {
  id:string,
  user:Usuario,
  loaded:boolean,
  loading:boolean,
  error:any

}
export const usuarioFeatureKey = 'usuario'

export const usuarioInitialState: UsuarioState = {
  id:'',
  user:new Usuario('','',true,0),
  loaded:false,
  loading:false,
  error:null
}

const _usuarioReducer = createReducer(usuarioInitialState,

  on(cargarUsuario, (state,{id}) => ({ ...state, loading:true,id:id})),
  on(usuarioCargado,( state, {usuario}) => ({ ...state,loading:false,loaded:true,user:{...usuario},error:null})),
  on(usuarioCargadoError,( state, {payload}) => ({ ...state,loading:false,loaded:false,error:{url:payload.url,name:payload.name,message:payload.message}})),

);

export function usuarioReducer(state = usuarioInitialState, action:Action) {
  return _usuarioReducer(state, action);
}
