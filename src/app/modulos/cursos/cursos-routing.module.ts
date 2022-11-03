import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaCursosComponent} from "./components/lista-cursos/lista-cursos.component";
import {AgregarCursoComponent} from "./components/agregar-curso/agregar-curso.component";
import {EditarCursoComponent} from "./components/editar-curso/editar-curso.component";
import {VerDetalleComponent} from "./components/ver-detalle/ver-detalle.component";
import {HomeCursosComponent} from "./components/home-cursos/home-cursos.component";
import {CursosComponent} from "./components/cursos/cursos.component";

const routes: Routes = [
      { path: '',  children:[
        {path: 'lista-curso',  component: ListaCursosComponent},
        {path: 'agregar-curso',  component: AgregarCursoComponent},
        {path: 'editar-curso',  component: EditarCursoComponent},
        {path: 'detalle-curso',  component: VerDetalleComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
