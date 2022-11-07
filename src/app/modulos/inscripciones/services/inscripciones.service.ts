import { Injectable } from '@angular/core';
import {Inscripcion} from "../../../models/inscripcion";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {


  inscripcion: Array<Inscripcion> = []


  constructor(
    private http: HttpClient
  ) {

  }

  obtenerDetalleInscripcion(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>('https://63642d227b209ece0f42366f.mockapi.io/inscripcion')

  }

  editarInscripcion(inscripcion: Inscripcion){
    this.http.put(`https://63642d227b209ece0f42366f.mockapi.io/inscripcion${inscripcion.idInscripcion}`, inscripcion)
  }
 //borrarInscripcion(idInscipcion:String): Observable<number>{

 //}

  agregarIncripcion(){

  }


}
