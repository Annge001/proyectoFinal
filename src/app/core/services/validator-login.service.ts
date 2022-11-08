import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Sesion} from "../../models/login";

@Injectable({
  providedIn: 'root'
})
export class ValidatorLoginService {

  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false,
      usuarioActivo: {
        usuario: '',
        contrasena: '',
        admin: false
      }
    }
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: string, contrasena: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin: admin
      }
    }
    this.sesionSubject.next(sesion);
    console.log(this.sesionSubject)
  }

  obtenerSesion(): Observable<Sesion>{
    console.log(this.sesionSubject)
    return this.sesionSubject.asObservable();
  }


  //agregue funcion para validar formato de email con regex en un servicio.
  esEmailValido(email: string): boolean {
    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (email.match(EMAIL_REGEX)) {
      mailValido = true;
    }
    return mailValido;
  }
}
