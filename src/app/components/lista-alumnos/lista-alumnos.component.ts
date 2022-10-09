import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Alumnos} from "../models/alumnos";
// @ts-ignore
import {Curso} from "../models/curso";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  cursos: Curso[] = [

    {nombre: 'Angular', comision: '32320', profesor: 'Abner'},
    {nombre: 'HTML', comision: '32320', profesor: 'Lucas'},
    {nombre: 'Javascript', comision: '32320', profesor: 'Gustavo'},
    {nombre: 'Inglés', comision: '32320', profesor: 'Fernando'},
  ];
  columnas: string[] = ['nombre', 'comision', 'profesor'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);

  public ALUMNOS : Array<Alumnos> = [
    {
    id: 1,
    nombre:'Mariah',
    apellido:'Carrey',
    curso:['Inglés' ,  'Javascript'],
    fechaInicio: new Date(),

  },
    {
      id: 2,
      nombre:'Elmert',
      apellido:'Figueroa',
      curso:['Javascript'],
      fechaInicio: new Date(),

    },
    {
      id: 3,
      nombre:'Ariana',
      apellido:'Grande',
      curso:['Angular'],
      fechaInicio: new Date(),

    },
    {
      id: 4,
      nombre:'Manuel',
      apellido:'Turizo',
      curso:['HTML'],
      fechaInicio: new Date(),

    }]
  Cursos: any;

  constructor() {}



  ngOnInit(): void {
  }

}

