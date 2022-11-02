import {Curso} from "./curso";

export interface Alumnos{
  id: string,
  nombre: string,
  apellido:string,
  comision:string,
  curso:Array<Curso>,
  email:string,
  telefono:string,
  cursando?:string
}





