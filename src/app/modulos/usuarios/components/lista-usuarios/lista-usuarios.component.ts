import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Observable} from "rxjs";
import {Usuario} from "../../../../models/usuario";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuario$! : Observable<Usuario>

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuario$ = this.usuariosService.obtenerUsuarios();
  }



}
