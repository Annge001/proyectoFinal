import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaCursosComponent} from "./components/lista-cursos/lista-cursos.component";
import {AgregarCursoComponent} from "./components/agregar-curso/agregar-curso.component";
import {EditarCursoComponent} from "./components/editar-curso/editar-curso.component";
import {VerDetalleComponent} from "./components/ver-detalle/ver-detalle.component";
import {CursosComponent} from "./components/cursos/cursos.component";
import {AutenticacionGuard} from "../../core/guards/autenticacion.guard";


//activar canActivate, despues de la segunda entrega.
const routes: Routes = [
      { path: '',  children:[
        {path: 'lista-curso',  component: ListaCursosComponent ,canActivate: [AutenticacionGuard]},
        {path: 'agregar-curso',  component: AgregarCursoComponent,canActivate: [AutenticacionGuard]},
        {path: 'editar-curso',  component: EditarCursoComponent,canActivate: [AutenticacionGuard]} ,
        {path: 'detalle-curso',  component: VerDetalleComponent,canActivate: [AutenticacionGuard]},
          {path: 'cursos',  component: CursosComponent,canActivate: [AutenticacionGuard]}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
