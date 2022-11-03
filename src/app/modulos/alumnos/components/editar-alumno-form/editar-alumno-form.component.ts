import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../../cursos/services/curso.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Alumnos} from "../../../../models/alumnos";
import {AlumnosService} from "../../services/alumnos.service";


@Component({
  selector: 'app-editar-alumno-form',
  templateUrl: './editar-alumno-form.component.html',
  styleUrls: ['./editar-alumno-form.component.css']
})
export class EditarAlumnoFormComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = [];
  cursos = [];
  formularioPersona!: FormGroup;
  id!: string;

  // Recibe alumno a actualizar
  @Input()
   alumno:any;

  // variable que envia alumno actualizado al componente padre
  @Output()
  alumnoActualizado = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private alumnosService: AlumnosService,
              private  cursoService: CursoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {



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
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      console.log(parametros)
      this.id = parametros.get('id') || '0';
      this.formularioPersona = this.fb.group({

        nombre: [parametros.get('nombre'), [Validators.required]],
        apellido: [parametros.get('apellido'), [Validators.required]],
        comision: [parametros.get('comision'), [Validators.required]],
        curso    : [parametros.get('curso'), [Validators.required]],
        email: [parametros.get('email'), [Validators.required]],
        telefono: [parametros.get('telefono'), [Validators.required]],
        cursos: [parametros.get('curso'), [Validators.required]]
      })

    })
  }

  guardarAlumno() {
    let alumno: Alumnos = {
    id: this.id,
    nombre: this.formularioPersona.value.nombre,
    apellido: this.formularioPersona.value.apellido,
    comision: this.formularioPersona.value.comision,
    curso: [],
    email: this.formularioPersona.value.email,
    telefono: this.formularioPersona.value.telefono,
    }
    alumno.curso.push(this.formularioPersona.value.cursos)
    console.log(alumno)
  this.alumnosService.editarAlumno(alumno)
    this.router.navigate(['alumno/lista-alumnos'])
  }
}
