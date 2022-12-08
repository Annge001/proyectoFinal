import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../../cursos/services/curso.service";
import {Observable} from "rxjs";
import {Sesion} from "../../../../models/login";
import {ValidatorLoginService} from "../../../../core/services/validator-login.service";
import {Alumnos} from "../../../../models/alumnos";
import {AlumnosService} from "../../services/alumnos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.css']
})
export class AltaAlumnoComponent implements OnInit {

  sesion$!: Observable<Sesion>;
  listaCursos: Array<Curso> = [];
  cursos: Array<Curso> = [];
  formularioPersona: FormGroup;
  alumnos: Array<Alumnos> = [];




  @Input()
  alumno: any;

  @Output()
  alumnoNuevo = new EventEmitter<any>();
  isCorreoConfirmado = false;


  constructor(private fb: FormBuilder,
              private cursoService: CursoService,
              private  alumnosServices: AlumnosService,
              private sesionService: ValidatorLoginService,
              private router: Router
  ) {
    this.formularioPersona = fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });

    this.obtenerAlumnos().subscribe(data => {
      this.alumnos = data
    })
  }

  ngOnInit(): void {
    this.sesion$ = this.sesionService.obtenerSesion();
  }



  obtenerAlumnos() {
    return this.alumnosServices.obtenerAlumnosPromise();
  }

  validarCorreo() {
    if (this.formularioPersona.get('email')?.value === this.formularioPersona.get('confirmarEmail')?.value) {
      this.isCorreoConfirmado = false;
    } else {
      this.isCorreoConfirmado = true;
    }
  }


  agregarAlumno(){
    const alumno: Alumnos = {
      //idCurso: Math.round(Math.random()*1000),
      id: this.formularioPersona.value.id,
      nombre: this.formularioPersona.value.nombre,
      apellido: this.formularioPersona.value.apellido,
      comision: this.formularioPersona.value.comision,
      curso: this.formularioPersona.value.curso,
      email: this.formularioPersona.value.email,
      telefono: this.formularioPersona.value.telefono,
      cursando: this.formularioPersona.value.cursando,

    };
    this.alumnosServices.agregarAlumno(alumno);
    this.router.navigate(['alumno/lista-alumnos']);
  }

}
