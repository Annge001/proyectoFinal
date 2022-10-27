import { Injectable } from '@angular/core';
import {Curso} from "../../../models/curso";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Alumnos} from "../../../models/alumnos";

@Injectable({
  providedIn: 'root'
})
export class ListaCursoService {

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

  private cursosSubject: BehaviorSubject<Curso[]>;
  idCurso:any;


  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }
//si me regresa arreglo no es necesario usar map
  obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }
  //me regresa solo curso, por eso uso map
  obtenerCurso(idCurso: string): Observable<Curso[]>{
    // @ts-ignore
    return this.obtenerCurso().pipe(
      map((curso: Curso[]) => curso.filter((curso: Curso)=> curso.idCurso === idCurso) )
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso){

  }
  borrarCurso(id: string){

  }
  obtenerCursosPromise(): Promise<Curso[] | any>{
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if(this.cursos.length > 0){
          resolve(this.cursos);
        }else{
          reject({
            codigo: 0,
            mensaje: 'No existen cursos'
          });
        }
      }, 1000)
    });
  }

  setIdCurso(idCurso:any){
    this.idCurso = idCurso;
    console.log(idCurso)
  }

  getIdCurso(){
    return this.idCurso;
  }



}
