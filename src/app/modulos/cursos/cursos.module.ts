import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosComponent} from "./components/cursos/cursos.component";
import {MaterialModule} from "../../material.module";
import {CursoService} from "./services/curso.service";
import {AgregarCursoComponent} from './components/agregar-curso/agregar-curso.component';
import {EditarCursoComponent} from './components/editar-curso/editar-curso.component';
import {ListaCursosComponent} from './components/lista-cursos/lista-cursos.component';
import {VerDetalleComponent} from './components/ver-detalle/ver-detalle.component';
import {HomeCursosComponent} from './components/home-cursos/home-cursos.component';
import {AltaAlumnoComponent} from "../alumnos/components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "../alumnos/components/editar-alumno-form/editar-alumno-form.component";
import {ListaComponent} from "../alumnos/components/lista/lista.component";
import {MostrarApellidoPipe} from "../alumnos/pipes/mostrar-apellido.pipe";
import {VerDetalleAlumnoComponent} from "../alumnos/components/ver-detalle/ver-detalle-alumno.component";
import {CursosRoutingModule} from "./cursos-routing.module";


@NgModule({
  declarations: [
    CursosComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    VerDetalleComponent,
    HomeCursosComponent

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
