import {Curso,ListaCursos} from "./curso";

export interface Alumnos{
  id: number,
  nombre: string,
  apellido:string,
  comision:string,
  curso:Array<Curso>,
  email:string,
  telefono:string,
}




export let ListaAlumnos: Alumnos[] = [
  {
    id:1,
    nombre:'Andrea',
    apellido:'Castillo',
    comision:'32566',
    curso: [ListaCursos[0]],
    email: 'andrea@correo.cl',
    telefono: '958641238'
  },
  {
    id:2,
    nombre:'Constanza',
    apellido:'Rojas',
    comision:'32577',
    curso: [ListaCursos[1]],
    email: 'constanza@correo.cl',
    telefono:'958641239'



  },
  {
    id:3,
    nombre:'Javiera',
    apellido:'Bello',
    comision:'32588',
    curso: [ListaCursos[2]],
    email: 'javiera@correo.cl',
    telefono: '958641240'

  },
]
