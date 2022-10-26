import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Curso} from "../../../../models/curso";
import {Observable} from "rxjs";
import {ListaCursoService} from "../../services/lista-curso.service";

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>
  dataInicial: any;

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombreCurso', 'comision', 'profesor', 'idCurso', 'borrar'];


  constructor(
    private listaCursoService: ListaCursoService
  ) {
  }




  ngOnInit(): void {
    // @ts-ignore
    this.cursos$ = this.listaCursoService.agregarCurso();
    this.obtenerAlumnos().then(data => {
      this.dataInicial = data
      this.ELEMENT_DATA.data = this.dataInicial
      console.log(this.dataInicial)
    });
  }
  obtenerAlumnos() {
    return this.listaCursoService.obtenerCursosPromise();
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }

  borrar(id: any) {

  }

  editar(persona: any) {

  }
}
