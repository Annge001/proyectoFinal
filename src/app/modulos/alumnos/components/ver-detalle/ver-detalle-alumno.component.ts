import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {ListaCursoService} from "../../../cursos/services/lista-curso.service";
import {CursoService} from "../../../cursos/services/curso.service";
import {Router} from "@angular/router";
import {AlumnosService} from "../../services/alumnos.service";
import {Alumnos} from "../../../../models/alumnos";

@Component({
  selector: 'app-ver-detalle-alumno',
  templateUrl: './ver-detalle-alumno.component.html',
  styleUrls: ['./ver-detalle-alumno.component.css']
})
export class VerDetalleAlumnoComponent implements OnInit {


  @Output() cerrar = new EventEmitter();

  listaAlumnos: Array<Curso> = [];
  alumnoDetalle: any;
  alumnoVerMas:Array<Curso>=[];
  alumnos = [];


  constructor(
    private  alumnosServices: AlumnosService,
    private route : Router
  ) {
    this.obtenerAlumno().then(data => {
      this.alumnos = data;
      this.listaAlumnos = this.alumnos;
      // se recupera id de alumno desde alumnos.services para buscarlo en el array de alumnos
      let id = 1;
      this.alumnoVerMas = this.alumnos.filter((alumnos:Alumnos) => alumnos.id === id)
      console.log(this.alumnoVerMas);
      this.alumnoDetalle = this.alumnoVerMas[0];

    })
  }
  obtenerAlumno() {
    return this.alumnosServices.obtenerAlumnosPromise();
  }

  ngOnInit(): void {
  }

  OnCerrar() {
    this.redirect('alumnos/lista-alumnos')
  }

  redirect(url:string){
    this.route.navigate([url])
  }



}
