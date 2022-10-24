import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {CursosComponent} from "./components/cursos/cursos.component";
import {MaterialModule} from "../../material.module";
import {CursoService} from "./services/curso.service";


@NgModule({
  declarations: [
    CursosComponent

  ],
  exports: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule

  ],
  providers:[
    CursoService

  ]
})
export class CursosModule { }
