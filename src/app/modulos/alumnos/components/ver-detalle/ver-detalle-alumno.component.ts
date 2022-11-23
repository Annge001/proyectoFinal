import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {Router, ActivatedRoute} from "@angular/router";
import {AlumnosService} from "../../services/alumnos.service";

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
  ) {{
    this.activatedRoute.paramMap.subscribe((parametros) => {
        console.log(parametros)
        this.curso = {
          idCurso: parametros.get('idCurso') || '0',
          nombreCurso: parametros.get('nombreCurso') || '',
          comision: parametros.get('comision') || '',
          profesor: parametros.get('profesor') || '',
          fechaInicio: new Date(parametros.get('fechaInicio') || ''),
          fechaFin: new Date(parametros.get('fechaFin') || ''),
          inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true'
        }
      }
    )
  }

  obtenerAlumno() {
    return this.alumnosServices.obtenerAlumnosPromise();
  }

  ngOnInit(): void {
  }

  OnCerrar() {
    this.redirect('alumno/lista-alumnos')
  }

  redirect(url:string){
    this.route.navigate([url])
  }



}
