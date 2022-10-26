import {Injectable} from '@angular/core';
import {Curso} from "../../../models/curso";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CursoService {

 private cursos: Curso[] = [{
      idCurso:'1',
      nombreCurso:'Front End Angular',
      comision:'12345',
      profesor: 'Juan',
      fechaInicio: new Date(2022,2,1),
      fechaFin: new Date(2023,2,1),
      inscripcionABierta: true,
  },
    {
      idCurso:'2',
      nombreCurso:'Desarrollo Backend',
      comision:'12346',
      profesor: 'Sandra',
      fechaInicio: new Date(2022,3,1),
      fechaFin:  new Date(2023,3,1),
      inscripcionABierta: true,
  },
    {
      idCurso:'3',
      nombreCurso:'Front End Vue',
      comision:'12347',
      profesor: 'Marcos',
      fechaInicio: new Date(2022,4,1),
      fechaFin: new Date(2023,4,1),
      inscripcionABierta:false,
  }];


   cursosSubect: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubect = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {
      if(this.cursos.length > 0){
        resolve(this.cursos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay cursos'
        });
      }
    });
  }






}
