import { Component, OnInit } from '@angular/core';
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  inscripcionDetalle = null;
  dataInicial:any=[];
  ELEMENT_DATA = new MatTableDataSource([])
  inscripcion: Array<Inscripcion> = []
  displayedColumns: string[] = ['idInscripcion', 'idCurso', 'idAlumno', 'profesor', 'fechaInicio','fechaFin', 'acciones'];
  inscripcion$!: Observable<Inscripcion []>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inscripcionesService: InscripcionesService
  ) {

    this.obtenerInscripciones()

  }

  ngOnInit(): void {
  }

  obtenerInscripciones(){
    this.inscripcionesService.obtenerInscripcion().subscribe(data => {
      this.dataInicial = data

      this.ELEMENT_DATA.data = this.dataInicial
    })
  }





  agregarIncripcion() {
    this.router.navigate(['inscripcion/agregar-inscripcion'])
  }

  filtrar(event: Event) {
    console.log(event)
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();
  }

  borrar(idInscipcion: number) {
    this.inscripcionesService.borrarInscripcion(idInscipcion).subscribe(data => {
      this.obtenerInscripciones()
    })
    this.inscripcion$ = this.inscripcionesService.obtenerInscripcion()
  }

  editar(inscripcion: any) {
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
    this.router.navigate(['inscripcion/detalle-inscripcion', {
      idInscripcion: idInscripcion,
    }])
  }
  redirect(url: string) {
    this.router.navigate([url]);
  }


  cerrarDetalle() {
    this.inscripcionDetalle = null;

  }
}
