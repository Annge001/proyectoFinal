import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListaAlumnos} from "../models/alumnos";
import {MatButtonModule} from "@angular/material/button";




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



  constructor(
    ){ }

  ngOnInit(): void {
    // @ts-ignore
    this.dataInicial = ListaAlumnos;
    this.ELEMENT_DATA.data = this.dataInicial

  }


  borrar(id: number) {
    console.log(id)
    console.log(this.dataInicial)
    //aqui busco a la persona por id y me retorna la posicion en el arreglo
    let position = this.dataInicial.findIndex((persona: { id: number; }) => persona.id === id)
    console.log(position)
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
