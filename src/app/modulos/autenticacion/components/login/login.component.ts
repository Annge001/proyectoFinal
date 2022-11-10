import { Component, OnInit } from '@angular/core';
import {ValidatorLoginService} from "../../../../core/services/validator-login.service";
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
      email: ['aaaaaaaaa@qa.cl', [Validators.required, Validators.email]],
      password: ['aaaaaaa', [Validators.required]],
      admin: new FormControl(true)
    });
  }

  ngOnInit(): void {
    console.log(this.formularioPersona);

  }


  loginUsuario(){
    this.validator.login(
      this.formularioPersona.value.usuario,
      this.formularioPersona.value.contrasena,
      this.formularioPersona.value.admin)


    this.router.navigate(['cursos']);

   // this.validarEmail();
   // this.formularioPersona.reset();
  }
  validarEmail(){
    // @ts-ignore
    this.isEmailValid = this.validator.esEmailValido(this.formularioPersona.get('email').value);
    console.log(this.formularioPersona)
  }


}
