import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {LoginComponent} from "./modulos/autenticacion/components/login/login.component";
import {FormInscripcionComponent} from "./modulos/inscripciones/components/form-inscripcion/form-inscripcion.component";


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  {path: 'inscripcion', component: FormInscripcionComponent},
  {path: 'curso',
  loadChildren: () => import('./modulos/cursos/cursos.module').then((m) => m.CursosModule)
  },
  {path: 'alumno',
    loadChildren: () => import('./modulos/alumnos/alumnos.module').then((m) =>m.AlumnosModule)
  },

  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'principal', pathMatch: 'full'},
  { path:'**', component: PaginaNoEncontradaComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
