import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UsuarioState} from "../../../models/usuario.state";
import * as fromUsuario from '../reducers'

export const selectUsuarioState = createFeatureSelector<UsuarioState>(
  fromUsuario.usuarioFeatureKey
);
export const selectStateUsuarios = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.usuario
)

export const selectStateCargando = createSelector(
  selectUsuarioState,
  (state: UsuarioState) => state.cargando
)
