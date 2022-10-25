import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SesionService} from "./services/sesion.service";
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';




@NgModule({
  declarations: [
    HeaderComponent,
    PaginaNoEncontradaComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    SesionService
  ]
})
export class CoreModule { }
