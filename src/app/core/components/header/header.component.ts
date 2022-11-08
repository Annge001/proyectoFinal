import { Component, OnInit } from '@angular/core';
import {ValidatorLoginService} from "../../services/validator-login.service";
import {Sesion} from "../../../models/login";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sesion$!: Observable<Sesion>;

  constructor(
    private validator: ValidatorLoginService
  ) { }

  ngOnInit(): void {
    //this.sesion$ = this.validator.obtenerSesion()
  }


}
