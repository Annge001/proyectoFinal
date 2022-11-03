import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosComponent} from "./components/cursos/cursos.component";
import {MaterialModule} from "../../material.module";
import {CursoService} from "./services/curso.service";
import {AgregarCursoComponent} from './components/agregar-curso/agregar-curso.component';
import {EditarCursoComponent} from './components/editar-curso/editar-curso.component';
import {ListaCursosComponent} from './components/lista-cursos/lista-cursos.component';
import {VerDetalleComponent} from './components/ver-detalle/ver-detalle.component';
import {CursosRoutingModule} from "./cursos-routing.module";


@NgModule({
  declarations: [
    CursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    VerDetalleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CursosRoutingModule



  ],
  providers:[
    CursoService
  ]
})

export class CursosModule { }
