import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LateralNavbarComponent} from "./core/components/lateral-navbar/lateral-navbar.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrincipalComponent} from "./components/principal/principal.component";
import {TamanoLetraDirective} from "./directivas/tamano-letra.directive";
import {CursoService} from "./modulos/cursos/services/curso.service";
import {AlumnosService} from "./modulos/alumnos/services/alumnos.service";
import {AutenticacionModule} from "./modulos/autenticacion/autenticacion.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {InscripcionesService} from "./modulos/inscripciones/services/inscripciones.service";
import {CursosComponent} from "./components/cursos/cursos.component";
import {HttpClientModule} from "@angular/common/http";
import {UsuariosService} from "./modulos/usuarios/services/usuarios.service";
import {UsuariosModule} from "./modulos/usuarios/usuarios.module";
import { StoreModule } from '@ngrx/store';
import {ROOT_REDUCERS} from "./state/app.state";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LateralNavbarComponent,
    PrincipalComponent,
    TamanoLetraDirective,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    FormsModule,
    AutenticacionModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UsuariosModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [CursoService, AlumnosService, InscripcionesService, UsuariosService],
  exports: [
    TamanoLetraDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
