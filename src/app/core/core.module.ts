import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SesionService} from "./services/sesion.service";



@NgModule({
  declarations: [
    HeaderComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [
    SesionService
  ]
})
export class CoreModule { }
