import { Component, OnInit } from '@angular/core';
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {

  dataInicial:any=[];
  ELEMENT_DATA = new MatTableDataSource([])
  inscripcion: Array<Inscripcion> = []
  displayedColumns: string[] = ['idInscripcion', 'idCurso', 'idAlumno', 'profesor', 'fechaInicio','fechaFin', 'acciones'];



  constructor(
    private router: Router,
    private inscripcionesService: InscripcionesService
  ) {

    this.inscripcionesService.obtenerDetalleInscripcion().subscribe(data => {
      this.dataInicial = data

      this.ELEMENT_DATA.data = this.dataInicial
      console.log(this.inscripcion)

    })
  }

  ngOnInit(): void {

  }



  agregarInscripcion() {

  }

  filtrar($event: KeyboardEvent) {

  }

  borrar(idInscipcion: number) {
    let position = this.dataInicial.findIndex((inscipcion: {idInscipcion: number;}) => inscipcion.idInscipcion === idInscipcion)
    this.dataInicial.splice(position, 1)
    console.log(this.dataInicial)

    this.ELEMENT_DATA.data = this.dataInicial
    console.log(this.ELEMENT_DATA)

  }

  editar(inscripcion: any) {
    console.log(inscripcion)
    this.router.navigate(['inscripcion/editar-inscripcion', {
      idInscripcion: inscripcion.idInscripcion,
      idCurso: inscripcion.idCurso,
      idAlumno: inscripcion.idAlumno,
      profesor: inscripcion.profesor,
      fechaInicio: inscripcion.fechaInicio,
      fechaFin: inscripcion.fechaFin,
    }])
  }

  verMas(idInscripcion: any) {
    console.log(idInscripcion)
    this.redirect('inscripcion/detalle-inscripcion')
  }
  redirect(url: string) {
    this.router.navigate([url]);
  }


  cerrarDetalle() {

  }
}
