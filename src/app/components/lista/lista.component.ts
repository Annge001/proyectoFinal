import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Alumnos, ListaAlumnos} from "../models/alumnos";
import {MatButtonModule} from "@angular/material/button";
import {CursoService} from "../../services/curso.service";
import {AlumnosService} from "../../services/alumnos.service";
import {Observable} from "rxjs";




@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  implements OnInit {



  dataInicial:any;

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombre', 'email', 'comision', 'curso', 'editar', 'borrar'];
  // variante de salida con el alumno a editar
  @Output()
  alumno = new EventEmitter<any>();

  //variante que recibe la lista actualizada
  @Input()
  listaAlumnosInput= [];
  cursos!: Alumnos[];
 // cursos$: Observable<Alumnos[]>;
  suscripcion: any;
  promesa: any;
  merge$!: Observable<any>;



  constructor(

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


  editar(persona:any) {
    this.alumno.emit(persona)
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }


}
