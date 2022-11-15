import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Sesion} from "../../models/login";
import {UsuariosService} from "../../modulos/usuarios/services/usuarios.service";
import {Usuario} from "../../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class ValidatorLoginService {

  sesionSubject!: BehaviorSubject<Sesion>;
  // @ts-ignore
  usuarios =[];

  constructor(private usuariosService:UsuariosService) {
   this.logOut()
  }

  logOut(){
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

  obtenerUsuarios(usuarioRecibido: string, contrasenaRecibida: string){
    this.usuariosService.obtenerUsuarios().subscribe(data => {

        // @ts-ignore
      this.usuarios = data;
      this.usuarios.filter((usuario:Usuario) => {

        if(usuario.usuario === usuarioRecibido && usuario.contrasena === contrasenaRecibida){
          const sesion: Sesion = {
            sesionActiva: true,
            usuarioActivo: {
              usuario: usuario.usuario,
              contrasena: usuario.contrasena,
              admin: usuario.admin
            }
          }
          console.log(sesion)
          this.sesionSubject.next(sesion);
        }
      })
    })
  }

  login(usuario: string, contrasena: string){
    this.obtenerUsuarios(usuario,contrasena);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }


  //agregue funcion para validar formato de email con regex en un servicio.
  esEmailValido(email: string): boolean {
    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

    if (email.match(EMAIL_REGEX)) {
      mailValido = true;
    }
    return mailValido;
  }
}
