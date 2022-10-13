import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarApellido'
})
export class MostrarApellidoPipe implements PipeTransform {

  transform(nombre: string, ...args: unknown[]): unknown {

    return ('apellido') ;
  }

}
