import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Sesion} from "../../../models/login";
import {ValidatorLoginService} from "../../services/validator-login.service";

@Component({
  selector: 'app-lateral-navbar',
  templateUrl: './lateral-navbar.component.html',
  styleUrls: ['./lateral-navbar.component.css']
})
export class LateralNavbarComponent implements OnInit {

  sesion$!: Observable<Sesion>;

  constructor(
    private sesion: ValidatorLoginService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
      this.sesion$ =  this.sesion.obtenerSesion();
  }

  redirect(url: string) {
    this.router.navigate([url]);
  }

}
