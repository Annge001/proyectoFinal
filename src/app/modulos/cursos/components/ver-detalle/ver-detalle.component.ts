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
  cursos = [];

  @Output() cerrar = new EventEmitter();
  cursosDetalle: any;
  cursoVerMas:Array<Curso>=[];

  constructor(
    private  cursoService: CursoService,
    private route : Router) {

    this.obtenerCursos().then(data => {
      this.cursos = data;
      this.listaCursos = this.cursos;
      // se recupera id de curso desde el lista-curso.services para buscarlo en el array de cursos
      let idCurso = '1';//this.listaCursoService.getIdCurso();
      this.cursoVerMas = this.cursos.filter((curso:Curso) => curso.idCurso === idCurso)
      console.log(this.cursoVerMas);
      this.cursosDetalle = this.cursoVerMas[0];

    })
  }
  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }

  ngOnInit(): void {

  }

  OnCerrar() {
   this.redirect('curso/lista-curso')
  }

  redirect(url:string){
    this.route.navigate([url])
  }

}
