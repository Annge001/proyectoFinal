import { Component, OnInit } from '@angular/core';
import {ValidatorLoginService} from "../../services/validator-login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
    public validator: ValidatorLoginService
  ) {
    this.formularioPersona = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log(this.formularioPersona);

  }

  loginUsuario(){
    this.validarEmail();
    this.formularioPersona.reset();

  }
  validarEmail(){
    // @ts-ignore
    this.isEmailValid = this.validator.esEmailValido(this.formularioPersona.get('email').value);
    console.log(this.formularioPersona)
  }


}
