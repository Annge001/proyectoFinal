import {cargarUsuario, usuarioCargado, usuarioCargadoError} from "../actions";
import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, tap} from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import {UsuariosService} from "../../../modulos/usuarios/services/usuarios.service";


@Injectable()
export class UsuarioEffects {


  constructor(
    private actions$: Actions,
    private usuarioService: UsuariosService
  ) {
  }


  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(cargarUsuario),
    tap(data =>),
    mergeMap((action) => this.usuarioService.getUserById(action.id)
      .pipe(
        map(user => usuarioCargado({usuario: user})),
        catchError(err => of(usuarioCargadoError({payload: err})))
      ))
  ))
}

