import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {UsuariosService} from "../../../modulos/usuarios/services/usuarios.service";
import {cargarUsuarios, usuariosCargados, usuariosCargadosError} from "../actions/usuarios.action";
import { Actions, createEffect, ofType } from '@ngrx/effects';



@Injectable()
export class UsuariosEffects{

  constructor(
    private actions$:Actions,
    private usuariosService:UsuariosService
  ){}

  cargarUsuarios$ = createEffect(
    ()=>this.actions$.pipe(
      ofType( cargarUsuarios ),
      // tap( data=>console.log("effect Tap",data) )
      mergeMap(
        ()=>this.usuariosService.getUsers()
          .pipe(
            // tap(data=>console.log('get uses del effect',data))
            map( users=>usuariosCargados({usuarios:users}) ),
            catchError( err=> of( usuariosCargadosError({payload:err})) )
          )
      )
    )
  );

}
