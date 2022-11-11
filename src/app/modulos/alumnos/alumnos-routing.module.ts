import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaComponent} from "./components/lista/lista.component";
import {AltaAlumnoComponent} from "./components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "./components/editar-alumno-form/editar-alumno-form.component";
import {VerDetalleAlumnoComponent} from "./components/ver-detalle/ver-detalle-alumno.component";
import {AutenticacionGuard} from "../../core/guards/autenticacion.guard";
import {AdminGuard} from "../../core/guards/admin.guard";

const routes: Routes = [
  { path: '', children:[
      {path: 'lista-alumnos',  component: ListaComponent, canActivate: [AutenticacionGuard,AdminGuard]},
      {path: 'agregar-alumno',  component: AltaAlumnoComponent, canActivate: [AutenticacionGuard,AdminGuard]},
      {path: 'editar-alumno',  component: EditarAlumnoFormComponent, canActivate: [AutenticacionGuard,AdminGuard]},
      {path: 'detalle-alumno',  component: VerDetalleAlumnoComponent, canActivate: [AutenticacionGuard,AdminGuard]}

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
