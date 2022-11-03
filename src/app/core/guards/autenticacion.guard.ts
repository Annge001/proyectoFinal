import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {ValidatorLoginService} from "../../modulos/autenticacion/services/validator-login.service";
import {Sesion} from "../../models/login";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor(
    private sesion: ValidatorLoginService,
    private router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //recuerda usar pipe para que pase a ser boolean

    return this.sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if (sesion.loginActivo){
          return true;
        }else{
          this.router.navigate(['autenticacion/login'])
          return false
        }
      })
    )
  }

}
