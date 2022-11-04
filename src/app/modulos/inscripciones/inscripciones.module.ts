import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { FormInscripcionComponent } from './components/form-inscripcion/form-inscripcion.component';
import {SharedModule} from "../../shared/shared.module";
import { AgregarInscripcionComponent } from './agregar-inscripcion/agregar-inscripcion.component';
import { ListaInscripcionesComponent } from './lista-inscripciones/lista-inscripciones.component';


@NgModule({
  declarations: [
    FormInscripcionComponent,
    AgregarInscripcionComponent,
    ListaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule
  ]
})
export class InscripcionesModule { }
