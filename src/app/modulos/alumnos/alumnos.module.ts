import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import {ListaComponent} from "./components/lista/lista.component";
import {AlumnosService} from "./services/alumnos.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AppModule} from "../../app.module";
import {AltaAlumnoComponent} from "./components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "./components/editar-alumno-form/editar-alumno-form.component";
import {CursoService} from "../cursos/services/curso.service";


@NgModule({
  declarations: [
    ListaComponent,
    AltaAlumnoComponent,
    EditarAlumnoFormComponent,

  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AppModule,

  ],
  providers: [
    AlumnosService,
    CursoService
  ]
})
export class AlumnosModule { }
