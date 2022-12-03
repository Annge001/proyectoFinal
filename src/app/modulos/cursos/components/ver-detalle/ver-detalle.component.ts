import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../services/curso.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {

  listaCursos: Array<Curso> = [];
  cursos: Array<Curso> = [];

  @Output()
  cerrar = new EventEmitter();
  cursosDetalle: any;
  cursoVerMas: Array<Curso> = [];
  curso: any;

  constructor(
    private cursoService: CursoService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {


  }

  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
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

  OnCerrar() {
    this.redirect('curso/lista-curso')
  }

  redirect(url: string) {
    this.route.navigate([url])
  }

}
