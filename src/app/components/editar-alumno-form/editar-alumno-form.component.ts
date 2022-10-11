import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import {outputAst} from "@angular/compiler";
import {Curso, ListaCursos} from "../models/curso";


@Component({
  selector: 'app-editar-alumno-form',
  templateUrl: './editar-alumno-form.component.html',
  styleUrls: ['./editar-alumno-form.component.css']
})
export class EditarAlumnoFormComponent implements OnInit {



  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = ListaCursos;
  cursos = ListaCursos;
  formularioPersona: FormGroup;

  constructor(private fb: FormBuilder,) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', [Validators.required]],
      comision: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    });
  }



  ngOnInit(): void {
  }


}
