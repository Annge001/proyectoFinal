import { Component, OnInit } from '@angular/core';
import {ListaAlumnos} from "../models/alumnos";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  alumno: any;
  editarForm = false;
  lista = true;

  listaAlumnos = [];

  editarAlumno($event: any) {
    this.editarForm = true;
    this.lista = false;
    this.alumno = $event;

  }

  constructor() {
    // @ts-ignore
    this.listaAlumnos = ListaAlumnos;

  }

  ngOnInit(): void {
  }
//funcion para recibir el alumno actualizado desde el formulario del componente hijo
  alumnoActualizado($event: any) {
    // @ts-ignore
    let position = this.listaAlumnos.findIndex(alumno => alumno.id === this.alumno.id)
    this.listaAlumnos.splice(position, 1)
    // @ts-ignore
    this.listaAlumnos.push($event);
    this.editarForm = false;
    this.lista = true;
  }
}
