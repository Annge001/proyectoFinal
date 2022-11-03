import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlumnosRoutingModule} from './alumnos-routing.module';
import {ListaComponent} from "./components/lista/lista.component";
import {AlumnosService} from "./services/alumnos.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AltaAlumnoComponent} from "./components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "./components/editar-alumno-form/editar-alumno-form.component";
import {CursoService} from "../cursos/services/curso.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MostrarApellidoPipe} from "./pipes/mostrar-apellido.pipe";
import {VerDetalleAlumnoComponent} from './components/ver-detalle/ver-detalle-alumno.component';
import {MaterialModule} from "../../material.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListaComponent,
    AltaAlumnoComponent,
    EditarAlumnoFormComponent,
    MostrarApellidoPipe,
    VerDetalleAlumnoComponent


  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MaterialModule,
    SharedModule

  ],
    exports: [
        AltaAlumnoComponent,
        EditarAlumnoFormComponent,
        ListaComponent,
        MostrarApellidoPipe,
        VerDetalleAlumnoComponent
    ],
  providers: [
    AlumnosService,
    CursoService
  ]
})
export class AlumnosModule {
}
