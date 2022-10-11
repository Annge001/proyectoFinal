import {Curso,ListaCursos} from "./curso";

export interface Alumnos{
  id: number,
  nombre: string,
  apellido:string,
  comision:string,
  curso:Array<Curso>
}




export let ListaAlumnos: Alumnos[] = [
  {
    id:1,
    nombre:'Andrea',
    apellido:'Castillo',
    comision:'32566',
    curso: [ListaCursos[0]]
  },
  {
    id:2,
    nombre:'Constanza',
    apellido:'Rojas',
    comision:'32577',
    curso: [ListaCursos[1]]


  },
  {
    id:3,
    nombre:'Javiera',
    apellido:'Bello',
    comision:'32588',
    curso: [ListaCursos[2]]


  },
]
