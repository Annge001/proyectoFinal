import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  @Input()
   alumno:any;

  constructor(private fb: FormBuilder,) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', [Validators.required]],
      comision: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    console.log(this.alumno.curso[0].comision)
    this.completarFormulario();
  }

  completarFormulario(){
    this.formularioPersona.patchValue({nombre:this.alumno.nombre})
    this.formularioPersona.patchValue({apellido:this.alumno.apellido})
    this.formularioPersona.patchValue({email:this.alumno.email})
    this.formularioPersona.patchValue({comision:this.alumno.curso[0].comision})
    this.formularioPersona.patchValue({telefono:this.alumno.telefono})
    this.formularioPersona.patchValue({curso:this.alumno.curso[0].nombreCurso})


  }
}
