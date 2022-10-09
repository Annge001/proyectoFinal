export interface Alumnos{
  id: number,
  nombre: string,
  apellido:string,
  comision:string,
  curso:Array<string>
}

export let ListaAlumnos: Alumnos[] = [
  {
    id:1,
    nombre:'Andrea',
    apellido:'Castillo',
    comision:'3256',
    curso: ['Javascript', 'HTML', 'CSS']
  },
  {
    id:2,
    nombre:'Constanza',
    apellido:'Rojas',
    comision:'3257',
    curso: ['HTML', 'CSS']


  },
  {
    id:3,
    nombre:'Javiera',
    apellido:'Bello',
    comision:'3258',
    curso: ['CSS']


  },
]
