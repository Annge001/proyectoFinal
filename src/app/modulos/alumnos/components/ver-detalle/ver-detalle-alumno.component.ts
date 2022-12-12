import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {ActivatedRoute, Router} from "@angular/router";
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
    private route : Router,
    private activatedRoute: ActivatedRoute,

  ) {
  }

  obtenerAlumno() {
    return this.alumnosServices.obtenerAlumnosPromise();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
        this.alumnoDetalle = {
          id: parametros.get('id') || '0',
          nombre: parametros.get('nombre') || '',
          apellido: parametros.get('apellido') || '',
          comision: parametros.get('comision') || '',
          email: parametros.get('email') || '',
          telefono: parametros.get('telefono') || '',
        }
      }
    )
  }

  OnCerrar() {
    this.redirect('alumno/lista-alumnos')
  }

  redirect(url:string){
    this.route.navigate([url])
  }



}
