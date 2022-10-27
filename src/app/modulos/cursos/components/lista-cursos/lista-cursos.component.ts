import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Curso} from "../../../../models/curso";
import {Observable} from "rxjs";
import {ListaCursoService} from "../../services/lista-curso.service";
import {Alumnos} from "../../../../models/alumnos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursos$!: Observable<Curso[]>
  dataInicial: any;

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombreCurso', 'comision', 'profesor', 'editar', 'borrar','verDetalle'];

  @Output()
  curso = new EventEmitter<any>();

  //variante que recibe la lista actualizada
  @Input()
  listaAlumnosInput = [];
  cursos!: Curso[];
  alumnos!: Alumnos[];
  //cursos$: Observable<Alumnos[]>;


  constructor(
    private listaCursoService: ListaCursoService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    // @ts-ignore
    this.obtenerAlumnos().then(data => {
      this.dataInicial = data
      this.ELEMENT_DATA.data = this.dataInicial
      console.log(this.dataInicial)
    });
  }

  obtenerAlumnos() {
    return this.listaCursoService.obtenerCursosPromise();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }

  borrar(id: number) {
    //aqui busco curso por id y me retorna la pocisin en el arreglo
    let position = this.dataInicial.findIndex((curso: { id: number; }) => curso.id === id)
    this.dataInicial.splice(position, 1)
    console.log(this.dataInicial)
    //en esta linea paso la posicion entregada y lo elimina
    this.ELEMENT_DATA.data = this.dataInicial
  }

  editar(idCurso: any) {
    //this.curso.emit(idCurso)
    console.log(idCurso)
    // se guarda el id de curso en el servicio para recuperarlo en el componente editar
    this.listaCursoService.setIdCurso(idCurso);
    this.redirect('cursos/editar-curso')
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }


  verMas(idCurso: any) {
    console.log(idCurso)
  }
}
