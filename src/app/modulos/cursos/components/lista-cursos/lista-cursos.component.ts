import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Curso} from "../../../../models/curso";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {


  ELEMENT_DATA = new MatTableDataSource([])
  displayedColumns: string[] = ['nombre', 'email', 'comision', 'curso', 'editar', 'borrar'];


  constructor() {
  }




  ngOnInit(): void {
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;

    this.ELEMENT_DATA.filter = filtro.trim().toLowerCase();

  }
}
