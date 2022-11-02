import {Injectable} from '@angular/core';
import {Curso} from "../../../models/curso";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class CursoService {

  cursos: Curso[] = [{
      idCurso:'1',
      nombreCurso:'Front End Angular',
      comision:'12345',
      profesor: 'Juan',
      fechaInicio: new Date(2022,2,1),
      fechaFin: new Date(2023,2,1),
      inscripcionAbierta: true,
      //  alumnos:''
  },
    {
      idCurso:'2',
      nombreCurso:'Desarrollo Backend',
      comision:'12346',
      profesor: 'Sandra',
      fechaInicio: new Date(2022,3,1),
      fechaFin:  new Date(2023,3,1),
      inscripcionAbierta: true,
      // alumnos:''
  },
    {
      idCurso:'3',
      nombreCurso:'Front End Vue',
      comision:'12347',
      profesor: 'Marcos',
      fechaInicio: new Date(2022,4,1),
      fechaFin: new Date(2023,4,1),
      inscripcionAbierta:false,
      //  alumnos:''
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


  editarCurso(curso: Curso){
    console.log(curso)
    let indice = this.cursos.findIndex((c: Curso) => c.idCurso === curso.idCurso);
    console.log(indice)

    if(indice > -1){
      this.cursos[indice] = curso;
      console.log(this.cursos)
    }

    this.cursosSubect.next(this.cursos);
  }



}
