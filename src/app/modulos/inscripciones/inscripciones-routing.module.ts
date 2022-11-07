import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaInscripcionesComponent} from "./components/lista-inscripciones/lista-inscripciones.component";
import {VerDetalleInscripcionComponent} from "./components/ver-detalle-inscripcion/ver-detalle-inscripcion.component";
import {EditarInscripcionComponent} from "./components/editar-inscripcion/editar-inscripcion.component";
import {AgregarInscripcionComponent} from "./components/agregar-inscripcion/agregar-inscripcion.component";

const routes: Routes = [
  {path: '', children:[
      {path: 'lista-inscripcion', component: ListaInscripcionesComponent },
      {path: 'detalle-inscripcion', component: VerDetalleInscripcionComponent },
      {path: 'editar-inscripcion', component: EditarInscripcionComponent },
      {path: 'agregar-inscripcion', component: AgregarInscripcionComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
