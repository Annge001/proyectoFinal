import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../services/curso.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = [];
  cursos:Array<Curso> = [];
  formulario!: FormGroup;
  idCurso!: string;

  //recibe curso a actualizar
  @Input()
  curso:any;


  // variable que envia curso actualizado al componente padre
  @Output()
  cursoActualizado = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private  cursoService: CursoService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {


    this.obtenerCursos().subscribe(data => {
      this.cursos = data;
      this.listaCursos = this.cursos;
    })
  }
  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) =>{
      this.curso = {
        idCurso: parametros.get('idCurso') || '0',
        nombreCurso: parametros.get('nombreCurso') || '',
        comision: parametros.get('comision') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date (parametros.get('fechaInicio') || ''),
        fechaFin: new Date (parametros.get('fechaFin') || ''),
        inscripcionAbierta: parametros.get('inscripcionAbierta') === 'true'
      }

      this.formulario = this.fb.group({

        nombreCurso: [parametros.get('nombreCurso'), [Validators.required]],
        comision: [parametros.get('comision'), [Validators.required]],
        profesor: [parametros.get('profesor'), [Validators.required]],
        fechaInicio: [parametros.get('fechaInicio'), [Validators.required]],
        fechaFin: [parametros.get('fechaFin'), [Validators.required]],
        inscripcionAbierta: [parametros.get('inscripcionAbierta'), [Validators.required]],

      });
    })
  }


  guardarCurso() {
    let curso: Curso = {
      idCurso: this.curso.idCurso,
      nombreCurso: this.formulario.value.nombreCurso,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    }
    this.cursoService.editarCurso(curso)

    this.router.navigate(['curso/lista-curso'])
  }
}
