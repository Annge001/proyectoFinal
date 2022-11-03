import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from "./components/principal/principal.component";
import {PaginaNoEncontradaComponent} from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";
import {FormInscripcionComponent} from "./modulos/inscripciones/components/form-inscripcion/form-inscripcion.component";
import {AutenticacionGuard} from "./core/guards/autenticacion.guard";


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  {path: 'curso',
  loadChildren: () => import('./modulos/cursos/cursos.module').then((m) => m.CursosModule),
  //  canActivate: [AutenticacionGuard, AdminGuard]
  },
  {path: 'alumno',
    loadChildren: () => import('./modulos/alumnos/alumnos.module').then((m) =>m.AlumnosModule),
    //canActivate: [AutenticacionGuard, AdminGuard]
  },
  {path: 'inscripciones',
    loadChildren: () => import('./modulos/inscripciones/inscripciones.module').then((m) =>m.InscripcionesModule),
   // canActivate: [AutenticacionGuard, AdminGuard]
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
