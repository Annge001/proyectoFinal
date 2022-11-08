import {Injectable} from '@angular/core';
import {Inscripcion} from "../../../models/inscripcion";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Observable, BehaviorSubject, catchError, filter, map, Subject, throwError} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  //esta declarado en eviroment.ts! asi se puede usar en los servicios que se necesite
  //api: string = 'https://63642d227b209ece0f42366f.mockapi.io/inscripcion'

  inscripcion: Array<Inscripcion> = []


  constructor(
    private http: HttpClient
  ) {

  }

  obtenerInscripcion(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripcion`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
    )
  }

  obtenerDetalleInscripcion(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${environment.api}/inscripcion`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })//.pipe(
      //catchError(this.manejarError)
    //)
  }

  editarInscripcion(inscripcion: Inscripcion) {
    this.http.put(`${environment.api}/inscripcion${inscripcion.idInscripcion}`, inscripcion, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })//.pipe(
     // catchError(this.manejarError)
    //)
  }

  borrarInscripcion(id: number) {
    // @ts-ignore
    this.http.delete<Inscripcion>(`${environment.api}/inscripcion/${id}/inscripcion`)
    (catchError(this.obtenerInscripcion)
   ).subscribe(console.log);
    alert("Registro eliminado");
  }

  agregarIncripcion(inscripcion: Inscripcion) {
    this.http.post(`${environment.api}/inscripcion/`,inscripcion,{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    })
  }


}
