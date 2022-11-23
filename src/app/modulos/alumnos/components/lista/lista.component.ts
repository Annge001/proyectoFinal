import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Alumnos} from "../../../../models/alumnos";
import {AlumnosService} from "../../services/alumnos.service";
import {Observable} from "rxjs";
import {Curso} from "../../../../models/curso";
import {Router} from "@angular/router";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  implements OnInit {

  alumnos$!: Observable<Alumnos[]>
  alumnoDetalle = null;
  dataInicial:any;

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombre', 'email', 'comision', 'curso', 'editar', 'borrar','verDetalle'];
  // variante de salida con el alumno a editar
  @Output()
  alumno = new EventEmitter<any>();




  //variante que recibe la lista actualizada
  @Input()
  listaAlumnosInput= [];
  cursos!: Curso[];
  alumnos!: Alumnos[];




  constructor(
    private router: Router,
    private alumnoService : AlumnosService
  ){

    this.obtenerAlumnos();
  }

  obtenerAlumnos() {
    this.alumnoService.obtenerDetalleAlumno().subscribe(data => {
      this.dataInicial = data

      this.ELEMENT_DATA.data = this.dataInicial
    })
  }


   ngOnInit(): void {

  }





  editar(alumno:any) {
    this.router.navigate(['alumno/editar-alumno', {
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      comision: alumno.comision,
      curso: alumno.curso,
      email: alumno.email,
      telefono: alumno.telefono,


    }])
  }


  redirect(url: string) {
  this.router.navigate([url]);
}

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }


  verMas(id: any) {
    this.redirect('alumno/detalle-alumno')
  }
  cerrarDetalle(){
    this.alumnoDetalle = null;
  }


  agregarAlumno() {
    this.router.navigate(['alumno/agregar-alumno'])
  }


  borrar(id: number) {
  this.alumnoService.borrarAlumno(id).subscribe(data => {
    console.log(data)
    this.obtenerAlumnos()
  })
  this.alumnos$ = this.alumnoService.obtenerAlumnosPromise()
  }

}
