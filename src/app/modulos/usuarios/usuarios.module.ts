import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


@NgModule({
  declarations: [
    ListaUsuariosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
