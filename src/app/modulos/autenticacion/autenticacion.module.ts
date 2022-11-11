import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AutenticacionRoutingModule} from './autenticacion-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    LoginComponent,
    UsuariosComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AutenticacionModule { }
