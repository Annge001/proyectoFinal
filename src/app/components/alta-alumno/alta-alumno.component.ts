import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso, ListaCursos} from "../models/curso";

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {


  listaCursos: Array<Curso> = ListaCursos;
  cursos = ListaCursos;
  formularioPersona: FormGroup;


  @Input()
  alumno:any;

  @Output()
  alumnoNuevo = new EventEmitter<any>();
  isCorreoConfirmado = false ;


  constructor(private fb: FormBuilder,) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  crearAlumno() {
    this.alumnoNuevo.emit(
      { id:'8',
        nombre: this.formularioPersona.get('nombre')?.value,
        apellido:this.formularioPersona.get('apellido')?.value,
        comision:this.formularioPersona.get('comision')?.value,
        curso: this.formularioPersona.get('cursos')?.value,
        email:this.formularioPersona.get('email')?.value,
        telefono: this.formularioPersona.get('telefono')?.value,
      }
    )
    this.formularioPersona.reset()
  }

  validarCorreo() {
    console.log('entroIf')
    if(this.formularioPersona.get('email')?.value === this.formularioPersona.get('confirmarEmail')?.value ){
      this.isCorreoConfirmado = false;
      console.log('false')
    }else{
      this.isCorreoConfirmado = true;
      console.log('true')
    }
  }


}
