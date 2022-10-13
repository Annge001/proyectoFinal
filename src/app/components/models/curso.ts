
export interface Curso{
  comision: string,
  nombreCurso: string,
  profesor: string;
  fechaInicio: Date,
  fechaFin: Date,
  inscripcionABierta: boolean,

}

export let ListaCursos: Curso[] = [
   {
     comision:'12345',
     nombreCurso:'HTML',
     profesor: 'Juan',
     fechaInicio: new Date(2022,2,1),
     fechaFin: new Date(2023,2,1),
     inscripcionABierta: true
   },
  {
    comision:'12346',
    nombreCurso:'CSS',
    profesor: 'Sandra',
    fechaInicio: new Date(2022,3,1),
    fechaFin:  new Date(2023,3,1),
    inscripcionABierta: true
  },
  {
    comision:'12347',
    nombreCurso:'Javascript',
    profesor: 'Marcos',
    fechaInicio: new Date(2022,4,1),
    fechaFin: new Date(2023,4,1),
    inscripcionABierta:false
  },
  {
    comision:'12348',
    nombreCurso:'Angular',
    profesor: 'Bárbara',
    fechaInicio: new Date(2022,5,1),
    fechaFin: new Date(2023,5,1),
    inscripcionABierta: false
  },
  {
    comision:'12349',
    nombreCurso:'React',
    profesor: 'Gonzalo',
    fechaInicio: new Date(2022,6,1),
    fechaFin: new Date(2023,6,1),
    inscripcionABierta: true
  },
  {
    comision:'12350',
    nombreCurso:'Inglés',
    profesor: 'Fabian',
    fechaInicio: new Date(2022,7,1),
    fechaFin: new Date(2023,7,1),
    inscripcionABierta: true
  },

]
