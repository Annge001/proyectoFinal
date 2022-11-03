import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Curso} from "../../../../models/curso";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursoService} from "../../services/curso.service";

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
              private cursoService: CursoService) {
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

  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }
}

