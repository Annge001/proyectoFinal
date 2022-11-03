import { Component } from '@angular/core';
import {Alumnos} from "./models/alumnos";
import {Curso} from "./models/curso";
import {Routes} from "@angular/router";
import {PrincipalComponent} from "./components/principal/principal.component";
import {FormInscripcionComponent} from "./modulos/inscripciones/components/form-inscripcion/form-inscripcion.component";
import {LoginComponent} from "./modulos/autenticacion/components/login/login.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";


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
