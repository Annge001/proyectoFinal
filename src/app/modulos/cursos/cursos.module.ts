import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import {CursosComponent} from "./components/cursos/cursos.component";
import {MaterialModule} from "../../material.module";
import {CursoService} from "./services/curso.service";
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import {AppModule} from "../../app.module";
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent

  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,


  ],
  exports: [
    CursosComponent,
    AgregarCursoComponent
  ],
  providers:[
    CursoService
  ]
})

export class CursosModule { }
