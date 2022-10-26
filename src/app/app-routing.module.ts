import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {CursosComponent} from "./modulos/cursos/components/cursos/cursos.component";
import {AgregarCursoComponent} from "./modulos/cursos/components/agregar-curso/agregar-curso.component";
import {EditarCursoComponent} from "./modulos/cursos/components/editar-curso/editar-curso.component";
import {LoginComponent} from "./modulos/autenticacion/components/login/login.component";

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'cursos', children:[
      {path: 'lista',  component: CursosComponent},
      {path: 'agregar',  component: AgregarCursoComponent},
      {path: 'editar',  component: EditarCursoComponent}
    ]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'principal', pathMatch: 'full'},
  { path:'**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
