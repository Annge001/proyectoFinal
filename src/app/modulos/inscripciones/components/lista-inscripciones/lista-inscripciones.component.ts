import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  ELEMENT_DATA: any;
  displayedColumns: any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarInscripcion() {

  }

  filtrar($event: KeyboardEvent) {

  }

  borrar() {

  }

  editar() {

  }

  verMas() {

  }

  cerrarDetalle() {

  }
}
