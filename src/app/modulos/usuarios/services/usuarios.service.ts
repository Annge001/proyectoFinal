import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";
import {Usuario} from "../../../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(): Observable<Usuario>{
    return this.http.get<Usuario>(`${environment.api}usuarios/`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      map((resp:any)=> resp)
    )
  }


  getUsers(){
    return this.http.get<Usuario>(`${environment.api}usuarios/`)
      .pipe(
        map( (resp:any)=> resp.data  )
      );
  }


  getUserById(id:string){
    return this.http.get<Usuario>(`${environment.api}usuarios/`+id)
      .pipe(
        map( (resp:any)=> resp.data  )
      );
  }
}

