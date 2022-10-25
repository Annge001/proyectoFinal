import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../components/models/curso";
import {CursoService} from "../../../cursos/services/curso.service";


@Component({
  selector: 'app-editar-alumno-form',
  templateUrl: './editar-alumno-form.component.html',
  styleUrls: ['./editar-alumno-form.component.css']
})
export class EditarAlumnoFormComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = [];
  cursos = [];
  formularioPersona: FormGroup;

  // Recibe alumno a actualizar
  @Input()
   alumno:any;

  // variable que envia alumno actualizado al componente padre
  @Output()
  alumnoActualizado = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private  cursoService: CursoService) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', [Validators.required]],
      comision: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });

    this.obtenerCursos().then(data => {
      this.cursos = data;
      this.listaCursos = this.cursos;
      console.log(this.cursos);

    })
  }
  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }


  ngOnInit(): void {

    this.completarFormulario();
  }

  //funcion para completar el formulario con la persona a editar
  completarFormulario(){
    this.formularioPersona.patchValue({nombre:this.alumno.nombre})
    this.formularioPersona.patchValue({apellido:this.alumno.apellido})
    this.formularioPersona.patchValue({email:this.alumno.email})
    this.formularioPersona.patchValue({comision:this.alumno.curso[0].comision})
    this.formularioPersona.patchValue({telefono:this.alumno.telefono})
    this.formularioPersona.patchValue({curso:this.alumno.curso[0].nombreCurso})


  }
//funcion para generar el alumno que fue editado y sera enviado al componente padre
  guardarAlumno() {
    this.alumnoActualizado.emit(
      { id:this.alumno.id,
        nombre: this.formularioPersona.get('nombre')?.value,
        apellido:this.formularioPersona.get('apellido')?.value,
        comision:this.formularioPersona.get('comision')?.value,
        curso: this.formularioPersona.get('cursos')?.value,
        email:this.formularioPersona.get('email')?.value,
        telefono: this.formularioPersona.get('telefono')?.value,
      }
    )
  }
}
