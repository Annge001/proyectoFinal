import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursoService} from "../../services/curso.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {


  listaCursos: Array<Curso> = [];
  cursos: Array<Curso> = [];
  formulario: FormGroup;


  @Input()
  alumno: any;

  @Output()
  cursoNuevo = new EventEmitter<any>();


  constructor(private fb: FormBuilder,
              private cursoService: CursoService,
              private router: Router
  ) {
    this.formulario = fb.group({
      profesor: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      cursos: ['', [Validators.required]]
    });

    this.obtenerCursos().subscribe(data => {
      this.cursos = data
      console.log(this.cursos)

    })
  }

  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }

  ngOnInit(): void {
  }

  crearCurso() {
    this.cursoNuevo.emit(
      {
        id: '8',
        nombre: this.formulario.get('profesor')?.value,
        apellido: this.formulario.get('cursos')?.value,
        fechaInicio: this.formulario.get('fechaInicio')?.value,
        fechaFin: this.formulario.get('fechaFin')?.value,
      }
    )
    this.formulario.reset()
  }



  agregarCurso(){
    const curso: Curso = {
      //idCurso: Math.round(Math.random()*1000),
      idCurso: this.formulario.value.idCurso,
      nombreCurso: this.formulario.value.nombreCurso,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.inicio,
      fechaFin: this.formulario.value.fin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    };
    console.log(curso);
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['curso/lista-curso']);
  }



}

