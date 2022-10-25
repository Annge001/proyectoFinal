import {Curso} from "./curso";

export interface Alumnos{
  id: number,
  nombre: string,
  apellido:string,
  comision:string,
  curso:Array<Curso>,
  email:string,
  telefono:string,
}





