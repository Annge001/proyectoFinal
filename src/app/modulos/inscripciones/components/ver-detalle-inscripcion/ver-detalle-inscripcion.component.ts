import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../../cursos/services/curso.service";

@Component({
  selector: 'app-ver-detalle-inscripcion',
  templateUrl: './ver-detalle-inscripcion.component.html',
  styleUrls: ['./ver-detalle-inscripcion.component.css']
})
export class VerDetalleInscripcionComponent implements OnInit {

  inscripcionDetalle: any;
  InscripcionVerMas: Array<Inscripcion> = [];
  inscVerMas:Array<Inscripcion>=[];
  cursos:Array<Curso> = [];

  @Output()
  cerrar = new EventEmitter();



  constructor(
    private  cursoService: CursoService,
    private inscripcionService: InscripcionesService,
    private route : Router
  ) {

    this.obtenerCursos().subscribe(data => {
    this.inscripcionDetalle = data;
    this.InscripcionVerMas = this.inscripcionDetalle;
    // se recupera id de curso desde el lista-curso.services para buscarlo en el array de cursos
    let idInscipcion = '1';//this.listaCursoService.getIdCurso();
    // @ts-ignore
      this.inscVerMas = this.cursos.filter((inscripcion:Inscripcion) => inscripcion.idInscipcion === idInscipcion)
    console.log(this.inscVerMas);
    this.inscripcionDetalle = this.inscripcionDetalle[0];

  })
  }

  obtenerCursos() {
    return this.inscripcionService.obtenerDetalleInscripcion();
  }




  ngOnInit(): void {
  }


  OnCerrar() {
    this.redirect('inscripcion/lista-inscripcion')
  }
  redirect(url:string){
    this.route.navigate([url])
  }
}
