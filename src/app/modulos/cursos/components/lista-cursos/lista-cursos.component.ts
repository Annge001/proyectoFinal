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
      console.log(this.curso)

    })
  }



  ngOnInit(): void {

   // this.cursos$ = this.cursoService.obtenerCursosPromise();

    // @ts-ignore
   /* this.obtenerCursos().subscribe(data => {
      console.log(data)
      this.dataInicial = data
      this.ELEMENT_DATA.data = this.dataInicial
      console.log(this.dataInicial)
    });*/
  }


  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }

 /* borrar(id: number) {
    //aqui busco curso por id y me retorna la pocisin en el arreglo
    let position = this.dataInicial.findIndex((curso: { id: number; }) => curso.id === id)
    this.dataInicial.splice(position, 1)
    console.log(this.dataInicial)
    //en esta linea paso la posicion entregada y lo elimina
    this.ELEMENT_DATA.data = this.dataInicial
  }*/

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


  verMas(idCurso: any) {
    console.log(idCurso)
    this.redirect('curso/detalle-curso')
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
