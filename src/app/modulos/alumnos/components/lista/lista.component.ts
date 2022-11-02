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



  dataInicial:any;

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombre', 'email', 'comision', 'curso', 'editar', 'borrar','verDetalle'];
  // variante de salida con el alumno a editar
  @Output()
  alumno = new EventEmitter<any>();

  alumnoDetalle = null;


  //variante que recibe la lista actualizada
  @Input()
  listaAlumnosInput= [];
  cursos!: Curso[];
  alumnos!: Alumnos[];
  //cursos$: Observable<Alumnos[]>;
  suscripcion: any;
  promesa: any;
  merge$!: Observable<any>;



  constructor(
    private router: Router,
    private alumnoService : AlumnosService
  ){
    // consumo del servicio de alumnos a traves de un observable

      this.suscripcion =  alumnoService.obtenerAlumnosObservable().subscribe({
        next: (alumnos: Alumnos[]) => {
          console.log(alumnos)
          this.dataInicial = alumnos;
          console.log(this.dataInicial)
          this.ELEMENT_DATA.data = this.dataInicial
        },
        error: (error) => {
          console.error(error);
        }
      });



  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }


  ngOnInit(): void {
    //consumo del servicio de alumnos a traves de una promesa

  this.obtenerAlumnos().then(data => {
      this.dataInicial = data
      this.ELEMENT_DATA.data = this.dataInicial
      console.log(this.dataInicial)
    });

  }
  obtenerAlumnos() {
    return this.alumnoService.obtenerAlumnosPromise();
  }
  borrar(id: number) {
    //aqui busco a la persona por id y me retorna la posicion en el arreglo
    let position = this.dataInicial.findIndex((persona: { id: number; }) => persona.id === id)
    this.dataInicial.splice(position, 1)
    console.log(this.dataInicial)
    //en esta linea paso la posicion entregada y lo elimina
    this.ELEMENT_DATA.data = this.dataInicial
  }


  editar(alumno:Alumnos) {
    this.router.navigate(['alumnos/editar-alumno', {
      id: alumno.id,
      nombre: alumno.nombre,
      apellido: alumno.apellido,
      comision: alumno.comision,
      curso: alumno.curso,
      email: alumno.email,
      telefono: alumno.telefono


    }])
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }
  redirect(url: string) {
    this.router.navigate([url]);
  }

  verMas(id: any) {
    console.log(id)
    this.redirect('alumnos/detalle-alumno')
  }
  cerrarDetalle(){
    this.alumnoDetalle = null;
  }


  agrgarAlumno() {
    this.router.navigate(['alumnos/agregar-alumno'])
  }
}
