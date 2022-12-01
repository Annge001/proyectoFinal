import {Injectable} from '@angular/core';
import {Alumnos} from "../../../models/alumnos";
import {BehaviorSubject, Observable} from "rxjs";
import {CursoService} from "../../cursos/services/curso.service";
import {Curso} from "../../../models/curso";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor(
    private http: HttpClient
  ) {
  }

  obtenerAlumnosPromise(): Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${environment.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
    )
  }
  agregarAlumno(alumno: Alumnos){
    this.http.post(`${environment.api}/alumnos/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      //catchError(this.manejarError)
    ).subscribe(console.log);
  }

  obtenerDetalleAlumno(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(`${environment.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })//.pipe(
      //catchError(this.manejarError)
    //)
  }


  editarAlumno(alumno: Alumnos){
    this.http.put<Alumnos>(`${environment.api}/alumnos/${alumno.id}`, alumno).pipe(
      // catchError(this.manejarError)
    ).subscribe(console.log);
  }


  borrarAlumno(id: number) {
    return this.http.delete(`${environment.api}/alumnos/${id}`);
  }
}


