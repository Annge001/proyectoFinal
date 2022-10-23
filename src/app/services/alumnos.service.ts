import { Injectable } from '@angular/core';
import {Curso, ListaCursos} from "../components/models/curso";
import {Alumnos} from "../components/models/alumnos";
import {BehaviorSubject, Observable} from "rxjs";
import {CursoService} from "./curso.service";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnos: Alumnos[] = [

  ]
// @ts-ignore
  alumnosSubject: BehaviorSubject<Alumnos[]>;

  cursos = [];

  constructor(
    private cursoService : CursoService,
  ) {
    this.alumnosSubject = new BehaviorSubject<Alumnos[]>(this.alumnos);
    this.obtenerCursos().then(data => {
      this.cursos = data
      console.log(this.cursos)

      this.alumnos = [
        {
          id:1,
          nombre:'Andrea',
          apellido:'Castillo',
          comision:'32566',
          curso: [this.cursos[0]],
          email: 'andrea@correo.cl',
          telefono: '958641238'
        },
        {
          id:2,
          nombre:'Constanza',
          apellido:'Rojas',
          comision:'32577',
          curso: [this.cursos[1]],
          email: 'constanza@correo.cl',
          telefono:'958641239'

        },
        {
          id:3,
          nombre:'Javiera',
          apellido:'Bello',
          comision:'32588',
          curso: [this.cursos[2]],
          email: 'javiera@correo.cl',
          telefono: '958641240'

        },
      ]
    })

  }

  obtenerAlumnosPromise(): Promise<Alumnos[] | any>{
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if(this.alumnos.length > 0){
          resolve(this.alumnos);
        }else{
          reject({
            codigo: 0,
            mensaje: 'No existen alumnos'
          });
        }
      }, 3000)
    });
  }

  obtenerAlumnosObservable(){

    return this.alumnosSubject.asObservable();


    // return this.cursos$;
    // return of(this.cursos);
  }
  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }

}


