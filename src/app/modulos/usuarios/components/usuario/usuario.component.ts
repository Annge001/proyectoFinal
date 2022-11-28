import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../models/usuario";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {appState} from "../../../../state/app.state";
import {cargarUsuarios} from "../../../../state/actions";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario!:Usuario;
  loading:boolean=false;
  error: any;

  usuarios!:Usuario[]

  constructor(
    private router:ActivatedRoute,
    private store:Store<appState>
  ) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({user,loading,error})=>{
      this.loading = loading;
      this.error = error;
      this.usuario =user;
    })

    this.store.select('usuarios').subscribe(({users,loading,error})=>{
      this.loading = loading;
      this.error = error;
      this.usuarios =users;
    })

    this.router.params.subscribe(({id})=>{
      // @ts-ignore
      this.store.dispatch(cargarUsuarios({id:id}))
    })

  }
}
