import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../../cursos/services/curso.service";

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {


  listaCursos: Array<Curso> =[];
  cursos :Array<Curso>= [];
  formularioPersona: FormGroup;


  @Input()
  alumno:any;

  @Output()
  alumnoNuevo = new EventEmitter<any>();
  isCorreoConfirmado = false ;


  constructor(private fb: FormBuilder,
            private  cursoService: CursoService) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });

    this.obtenerCursos().subscribe(data => {
      this.cursos = data
      console.log(this.cursos)

    })
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

  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise()
  }

}
