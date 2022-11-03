import {Injectable} from '@angular/core';
import {Curso} from "../../../models/curso";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerCursosPromise(): Observable<Curso[]>{
    return this.http.get<Curso[]>('https://63642d227b209ece0f42366f.mockapi.io/cursos')
  }

  editarCurso(curso: Curso){
    this.http.put(`https://63642d227b209ece0f42366f.mockapi.io/cursos/+{curso.id}`)
  }
}
