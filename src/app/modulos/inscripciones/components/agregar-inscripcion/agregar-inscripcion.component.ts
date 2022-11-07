import { Component, OnInit } from '@angular/core';
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  inscripcion: Array<Inscripcion> = []

  constructor(
    private inscripcionService: InscripcionesService
  ) {

  }

  ngOnInit(): void {
  }

  obtenerInscripcion(){

  }
}
