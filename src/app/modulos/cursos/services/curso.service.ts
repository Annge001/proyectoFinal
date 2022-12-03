import {Injectable} from '@angular/core';
import {Curso} from "../../../models/curso";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) {
  }


  obtenerCursosPromise(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
    )
  }

  agregarCurso(curso: Curso){
    this.http.post(`${environment.api}/cursos/`, curso, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      //catchError(this.manejarError)
    ).subscribe();
  }

  obtenerDetalleCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.api}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })//.pipe(
      //catchError(this.manejarError)
    //)
  }

  editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.api}/cursos/${curso.idCurso}`, curso).pipe(
     // catchError(this.manejarError)
    ).subscribe();
  }
  borrarCurso(id: number) {
   return this.http.delete(`${environment.api}/cursos/${id}`);
  }

}
