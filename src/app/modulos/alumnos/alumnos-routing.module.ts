import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaComponent} from "./components/lista/lista.component";
import {AltaAlumnoComponent} from "./components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "./components/editar-alumno-form/editar-alumno-form.component";
import {VerDetalleAlumnoComponent} from "./components/ver-detalle/ver-detalle-alumno.component";

const routes: Routes = [
  { path: '', children:[
      {path: 'lista-alumnos',  component: ListaComponent},
      {path: 'agregar-alumno',  component: AltaAlumnoComponent},
      {path: 'editar-alumno',  component: EditarAlumnoFormComponent},
      {path: 'detalle-alumno',  component: VerDetalleAlumnoComponent}

    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
