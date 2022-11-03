import { Component, OnInit } from '@angular/core';
import {ValidatorLoginService} from "../../services/validator-login.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioPersona: FormGroup;
  isEmailValid: boolean = true;

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorLoginService,
    private router: Router
  ) {
    this.formularioPersona = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      admin: new FormControl()
    });
  }

  ngOnInit(): void {
    console.log(this.formularioPersona);

  }


  loginUsuario(){
    console.log(this.formularioPersona.value);
    console.log(this.formularioPersona.value)
    this.validator.login(
      this.formularioPersona.value.usuario,
      this.formularioPersona.value.contranena,
      this.formularioPersona.value.admin)


    this.router.navigate(['principal'])

    this.validarEmail();
    this.formularioPersona.reset();
  }
  validarEmail(){
    // @ts-ignore
    this.isEmailValid = this.validator.esEmailValido(this.formularioPersona.get('email').value);
    console.log(this.formularioPersona)
  }


}
