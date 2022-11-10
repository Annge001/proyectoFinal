import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Curso} from "../../../../models/curso";
import {Observable} from "rxjs";
import {Alumnos} from "../../../../models/alumnos";
import {Router} from "@angular/router";
import {CursoService} from "../../services/curso.service";

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  cursosDetalle = null;
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
    private cursoService: CursoService,
    private router: Router
  ) {

   this.obtenerCursos();
  }

  obtenerCursos(){
    this.cursoService.obtenerDetalleCurso().subscribe(data => {
      this.dataInicial = data
      this.ELEMENT_DATA.data = this.dataInicial
      console.log(data)

    })
  }



  ngOnInit(): void {
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }



  editar(curso: any) {
    console.log(curso)
    this.router.navigate(['curso/editar-curso', {
      idCurso: curso.idCurso,
      nombreCurso: curso.nombreCurso,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin,
      inscripcionAbierta: curso.inscripcionAbierta

    }])
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }


  verMas(curso: any) {
    console.log(curso)
    this.router.navigate(['curso/detalle-curso', {
      idCurso: curso.idCurso,
      nombreCurso: curso.nombreCurso,
      comision: curso.comision,
      profesor: curso.profesor,
      fechaInicio: curso.fechaInicio,
      fechaFin: curso.fechaFin,
      inscripcionAbierta: curso.inscripcionAbierta

    }])
  }
  cerrarDetalle(){
    this.cursosDetalle = null;
  }

  agregarCurso() {
    this.router.navigate(['curso/agregar-curso'])
  }

  borrar(idCurso: number) {
    this.cursoService.borrarCurso(idCurso).subscribe(data => {
      console.log(data)
      this.obtenerCursos()
    })
    this.cursos$ = this.cursoService.obtenerCursosPromise()
  }
}
