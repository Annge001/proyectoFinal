import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaUsuariosComponent} from "./components/lista-usuarios/lista-usuarios.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {AutenticacionGuard} from "../../core/guards/autenticacion.guard";
import {AdminGuard} from "../../core/guards/admin.guard";

const routes: Routes = [
  { path: '', children: [
      {path: 'usuario', component: UsuarioComponent, canActivate: [AutenticacionGuard,AdminGuard]},
      {path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AutenticacionGuard,AdminGuard]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
