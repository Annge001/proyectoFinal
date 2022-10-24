import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorLoginService {

  //agregue funcion para validar formato de email con regex en un servicio.
  esEmailValido(email: string):boolean {
    let mailValido = false;
    'use strict';

    var EMAIL_REGEX = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (email.match(EMAIL_REGEX)){
      mailValido = true;
    }
    return mailValido;
  }
}
