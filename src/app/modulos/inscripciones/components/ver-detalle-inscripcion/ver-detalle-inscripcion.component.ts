import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../../cursos/services/curso.service";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-ver-detalle-inscripcion',
  templateUrl: './ver-detalle-inscripcion.component.html',
  styleUrls: ['./ver-detalle-inscripcion.component.css']
})
export class VerDetalleInscripcionComponent implements OnInit {

  inscripcionDetalle: any;
  cursos: Array<Curso> = [];
  idInscripcion!: string;

  @Output()
  cerrar = new EventEmitter();


  constructor(
    private cursoService: CursoService,
    private inscripcionService: InscripcionesService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  obtenerInscripcion() {
    this.activatedRoute.paramMap.subscribe((parametros) =>{
      console.log(parametros)
      this.idInscripcion = parametros.get('idInscripcion') || '0'
      console.log(this.idInscripcion)
      this.obtenerInscripcionService();
    })

  }

  obtenerInscripcionService(){
    this.inscripcionService.obtenerDetalleInscripcion(this.idInscripcion).subscribe(data => {
      console.log(data)
      this.inscripcionDetalle = data;
    })
  }


  ngOnInit(): void {
    this.obtenerInscripcion();
  }


  OnCerrar() {
    this.redirect('inscripcion/lista-inscripcion')
  }

  redirect(url: string) {
    this.route.navigate([url])
  }
}
