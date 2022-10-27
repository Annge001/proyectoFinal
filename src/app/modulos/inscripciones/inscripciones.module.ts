import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { FormInscripcionComponent } from './components/form-inscripcion/form-inscripcion.component';


@NgModule({
  declarations: [
    FormInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
