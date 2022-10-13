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



  dataInicial = ListaAlumnos

  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'comision', 'curso', 'editar', 'borrar'];
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
    this.ELEMENT_DATA.data = this.dataInicial

  }



  borrar(id: number) {
//aqui busco a la persona por id y me retorna la posicion en el arreglo
    let position = this.dataInicial.findIndex(persona => persona.id === id)
    //position = 0
    //console.log(this.dataInicial[position])
    //en esta linea paso la posicion entregada y lo elimina
    this.dataInicial.splice(position, 1)
    //esta linea actualiza la data
    // @ts-ignore
    this.ELEMENT_DATA.data = this.dataInicial
  }


  editar(persona:any) {
    this.alumno.emit(persona)
  }
}
