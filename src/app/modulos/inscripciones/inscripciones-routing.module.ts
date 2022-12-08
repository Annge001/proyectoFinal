import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaInscripcionesComponent} from "./components/lista-inscripciones/lista-inscripciones.component";
import {VerDetalleInscripcionComponent} from "./components/ver-detalle-inscripcion/ver-detalle-inscripcion.component";
import {EditarInscripcionComponent} from "./components/editar-inscripcion/editar-inscripcion.component";
import {AgregarInscripcionComponent} from "./components/agregar-inscripcion/agregar-inscripcion.component";
import {AutenticacionGuard} from "../../core/guards/autenticacion.guard";
import {AdminGuard} from "../../core/guards/admin.guard";

const routes: Routes = [
  {path: '', children:[
      {path: 'lista-inscripcion', component: ListaInscripcionesComponent},
      {path: 'detalle-inscripcion', component: VerDetalleInscripcionComponent, canActivate: [AutenticacionGuard,AdminGuard]},
      {path: 'editar-inscripcion', component: EditarInscripcionComponent, canActivate: [AutenticacionGuard,AdminGuard] },
      {path: 'agregar-inscripcion', component: AgregarInscripcionComponent, canActivate: [AutenticacionGuard,AdminGuard] }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
