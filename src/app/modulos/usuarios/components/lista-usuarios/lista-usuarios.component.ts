import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";
import {Observable, Subscription} from "rxjs";
import {Usuario} from "../../../../models/usuario";
import {Store} from "@ngrx/store";
import {appState} from "../../../../core/state/app.state";
import {cargarUsuarios} from "../../../../core/state/actions";
import {selectStateUsuarios, selectStateCargando} from "../../../../core/state/selectors/usuario.selector"



@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios$!: Observable<Usuario[]>;
  cargando$!: Observable<boolean>;
  usuarios!:Usuario[];
  loading: boolean= false;
  error:any;
  subscription = new Subscription()



  constructor(
    private store: Store<appState>
) {
    this.usuarios$ = this.store.select(selectStateUsuarios);
    this.cargando$ = this.store.select(selectStateCargando);


  }

  ngOnInit(): void {
//escuchar
   this.subscription.add(
     this.store.select('usuarios').subscribe(({users, loading, error})=>{
       console.log(error)
       this.loading = loading;
       this.error = error;
       this.usuarios = users;
     })
   )//ejecutar
    this.store.dispatch(cargarUsuarios());
  }

  ngOnDestroy(): void {
    this.subscription .unsubscribe();
  }

}
