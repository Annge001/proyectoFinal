import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaCursosComponent} from "./components/lista-cursos/lista-cursos.component";
import {AgregarCursoComponent} from "./components/agregar-curso/agregar-curso.component";
import {EditarCursoComponent} from "./components/editar-curso/editar-curso.component";
import {VerDetalleComponent} from "./components/ver-detalle/ver-detalle.component";
import {AutenticacionGuard} from "../../core/guards/autenticacion.guard";
import {AdminGuard} from "../../core/guards/admin.guard";


const routes: Routes = [
      { path: '',  children:[
        {path: 'lista-curso',  component: ListaCursosComponent , canActivate: [AutenticacionGuard,AdminGuard]},
        {path: 'agregar-curso',  component: AgregarCursoComponent, canActivate: [AutenticacionGuard,AdminGuard]},
        {path: 'editar-curso',  component: EditarCursoComponent, canActivate: [AutenticacionGuard,AdminGuard]} ,
        {path: 'detalle-curso',  component: VerDetalleComponent, canActivate: [AutenticacionGuard,AdminGuard]},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
