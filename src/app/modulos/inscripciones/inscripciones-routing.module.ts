import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormInscripcionComponent} from "./components/form-inscripcion/form-inscripcion.component";

const routes: Routes = [
  {path: '', children:[
      {path: 'form', component: FormInscripcionComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
