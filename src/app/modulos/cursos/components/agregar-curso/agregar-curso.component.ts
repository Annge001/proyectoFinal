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
      nombreCurso: ['', [Validators.required]]

    });


    this.obtenerCursos().subscribe(data => {
      this.cursos = data
    })
  }

  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }

  ngOnInit(): void {
  }


  agregarCurso(){
    const curso: Curso = {
      //idCurso: Math.round(Math.random()*1000),
      idCurso: this.formulario.value.idCurso,
      nombreCurso: this.formulario.value.nombreCurso,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      profesor: this.formulario.value.profesor,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    };
    this.cursoService.agregarCurso(curso);
    this.router.navigate(['curso/lista-curso']);
  }



}

