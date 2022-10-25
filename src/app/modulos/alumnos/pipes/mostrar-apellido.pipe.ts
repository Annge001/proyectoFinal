import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mostrarApellido'
})
export class MostrarApellidoPipe implements PipeTransform {

  transform(nombre: unknown, apellido: unknown[]): unknown {

    return nombre+' '+apellido;
  }

}
