import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {CursosComponent} from "./components/cursos/cursos.component";
import {MaterialModule} from "../../material.module";
import {CursoService} from "./services/curso.service";
import { VerMasComponent } from './components/ver-mas/ver-mas.component';


@NgModule({
  declarations: [
    CursosComponent,
    VerMasComponent

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule

  ],
  exports: [
    CursosComponent
  ],
  providers:[
    CursoService
  ]
})

export class CursosModule { }
