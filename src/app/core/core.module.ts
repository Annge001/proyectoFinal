import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SesionService} from "./services/sesion.service";
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import {RouterModule} from "@angular/router";
import {ValidatorLoginService} from "./services/validator-login.service";




@NgModule({
  declarations: [
    HeaderComponent,
    PaginaNoEncontradaComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ValidatorLoginService
  ]
})
export class CoreModule { }
