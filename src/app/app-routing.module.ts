import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {AutenticacionGuard} from "./core/guards/autenticacion.guard";
import {CursosComponent} from "./components/cursos/cursos.component";
import {ListaUsuariosComponent} from "./modulos/usuarios/components/lista-usuarios/lista-usuarios.component";


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'usuarios', component: ListaUsuariosComponent},
  {path: 'cursos',  component: CursosComponent},

  {path: 'curso' ,canActivate: [AutenticacionGuard],
  loadChildren: () => import('./modulos/cursos/cursos.module').then((m) => m.CursosModule)
  },

  {path: 'alumno',
    loadChildren: () => import('./modulos/alumnos/alumnos.module').then((m) =>m.AlumnosModule),
    canActivate: [AutenticacionGuard]
  },

  {path: 'inscripcion',
    loadChildren: () => import('./modulos/inscripciones/inscripciones.module').then((m) =>m.InscripcionesModule),
    canActivate: [AutenticacionGuard]
  },

  {path: 'autenticacion',
    loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then((m) =>m.AutenticacionModule)
  },

  { path: '', redirectTo: 'principal', pathMatch: 'full'},
  { path:'**', component: PaginaNoEncontradaComponent}


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
