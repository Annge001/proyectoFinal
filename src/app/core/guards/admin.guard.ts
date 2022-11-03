import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {Sesion} from "../../models/login";
import {ValidatorLoginService} from "../../modulos/autenticacion/services/validator-login.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private sesion: ValidatorLoginService,
    private router: Router

  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        console.log(sesion)
        if (sesion.usuarioActivo?.admin){
          return true;
        }else{
          alert("No tiene permiso para acceder a este sitio");
          this.router.navigate(['principal'])
          return false
        }
      })
    )
  }

}
