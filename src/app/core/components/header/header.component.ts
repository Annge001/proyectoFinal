import { Component, OnInit } from '@angular/core';
import {ValidatorLoginService} from "../../services/validator-login.service";
import {Sesion} from "../../../models/login";
import {Observable} from "rxjs";
import {Usuario} from "../../../models/usuario";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sesion$!: Observable<Sesion>;
  usuario!:Usuario;

  constructor(
    private validator: ValidatorLoginService,
    private sesionService: ValidatorLoginService,
  ) { }

  ngOnInit(): void {
    //this.sesion$ = this.validator.obtenerSesion()
    this.sesion$ = this.sesionService.obtenerSesion();
  }

  cerrarSesion(){
    this.validator.logOut()
    this.sesion$ = this.sesionService.obtenerSesion();
  }

}
