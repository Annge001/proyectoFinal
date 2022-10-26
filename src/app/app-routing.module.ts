import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {AgregarCursoComponent} from "./modulos/cursos/components/agregar-curso/agregar-curso.component";
import {EditarCursoComponent} from "./modulos/cursos/components/editar-curso/editar-curso.component";
import {LoginComponent} from "./modulos/autenticacion/components/login/login.component";
import {ListaCursosComponent} from "./modulos/cursos/components/lista-cursos/lista-cursos.component";
import {ListaComponent} from "./modulos/alumnos/components/lista/lista.component";
import {AltaAlumnoComponent} from "./modulos/alumnos/components/alta-alumno/alta-alumno.component";
import {EditarAlumnoFormComponent} from "./modulos/alumnos/components/editar-alumno-form/editar-alumno-form.component";

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'cursos', children:[
      {path: 'lista-curso',  component: ListaCursosComponent},
      {path: 'agregar-curso',  component: AgregarCursoComponent},
      {path: 'editar-curso',  component: EditarCursoComponent}
    ]},
  { path: 'alumnos', children:[
      {path: 'lista-alumnos',  component: ListaComponent},
      {path: 'agregar-alumno',  component: AltaAlumnoComponent},
      {path: 'editar-alumno',  component: EditarAlumnoFormComponent}
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
