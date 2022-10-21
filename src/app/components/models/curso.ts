
export interface Curso{
  nombreCurso: string,
  comision: string,
  profesor: string;
  fechaInicio: Date,
  fechaFin: Date,
  inscripcionABierta: boolean,
  //alumnos: Alumnos[],

}

export let ListaCursos: Curso[] = [
   {
     nombreCurso:'Front End Angular',
     comision:'12345',
     profesor: 'Juan',
     fechaInicio: new Date(2022,2,1),
     fechaFin: new Date(2023,2,1),
     inscripcionABierta: true,
     //  alumnos:''
   },
  {
    nombreCurso:'Desarrollo Backend',
    comision:'12346',
    profesor: 'Sandra',
    fechaInicio: new Date(2022,3,1),
    fechaFin:  new Date(2023,3,1),
    inscripcionABierta: true,
    // alumnos:''

  },
  {
    comision:'12347',
    nombreCurso:'Front End Vue',
    profesor: 'Marcos',
    fechaInicio: new Date(2022,4,1),
    fechaFin: new Date(2023,4,1),
    inscripcionABierta:false,
    //  alumnos:''

  },


]
