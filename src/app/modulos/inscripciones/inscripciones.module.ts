import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { AgregarInscripcionComponent } from './components/agregar-inscripcion/agregar-inscripcion.component';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { VerDetalleInscripcionComponent } from './components/ver-detalle-inscripcion/ver-detalle-inscripcion.component';


@NgModule({
  declarations: [
    AgregarInscripcionComponent,
    ListaInscripcionesComponent,
    VerDetalleInscripcionComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule
  ]
})
export class InscripcionesModule { }
