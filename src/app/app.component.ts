import { Component } from '@angular/core';
import {Alumnos} from "./components/models/alumnos";
import {Curso} from "./components/models/curso";
import {CursoService} from "./modulos/cursos/services/curso.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1pfPerez';
  cursos!: Curso[];
  alumnos!: Alumnos[];


  constructor (
  ){

  }

}
