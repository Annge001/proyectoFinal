import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListaComponent} from "./components/lista/lista.component";
import {HeaderComponent} from "./components/header/header.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {LateralNavbarComponent} from "./components/lateral-navbar/lateral-navbar.component";
import {EditarAlumnoFormComponent} from "./components/editar-alumno-form/editar-alumno-form.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {PrincipalComponent} from "./components/principal/principal.component";
import {MostrarApellidoPipe} from "./mostrar-apellido.pipe";
import {TamanoLetraDirective} from "./directivas/tamano-letra.directive";
import {SoloNumerosDirective} from "./directivas/solo-numeros.directive";

@NgModule({
    declarations: [
        AppComponent,
        ListaComponent,
        HeaderComponent,
        LateralNavbarComponent,
        EditarAlumnoFormComponent,
        PrincipalComponent,
        MostrarApellidoPipe,
        TamanoLetraDirective,
        SoloNumerosDirective

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
