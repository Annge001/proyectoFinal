import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../services/curso.service";
import {ListaCursoService} from "../../services/lista-curso.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = [];
  cursos = [];
  formulario!: FormGroup;
  idCurso!: string;

  //recibe curso a actualizar
  @Input()
  curso:any;

  cursoEditar:Array<Curso>=[];

  // variable que envia curso actualizado al componente padre
  @Output()
  cursoActualizado = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private  cursoService: CursoService,
              private listaCursoService: ListaCursoService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {


    this.obtenerCursos().then(data => {
      this.cursos = data;
      this.listaCursos = this.cursos;
      // se recupera id de curso desde el lista-curso.services para buscarlo en el array de cursos
      let idCurso = this.listaCursoService.getIdCurso();
      this.cursoEditar = this.cursos.filter((curso:Curso) => curso.idCurso === idCurso)
      console.log(this.cursoEditar);

    })
  }
  obtenerCursos() {
    return this.cursoService.obtenerCursosPromise();
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) =>{
      console.log(parametros)
      this.curso = {
        idCurso: parseInt(parametros.get('idCurso') || '0'),
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
    console.log(this)
    let curso: Curso = {
      idCurso: this.idCurso,
      nombreCurso: this.formulario.value.nombreCurso,
      comision: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
    }
    this.cursoService.editarCurso(curso)

    this.router.navigate(['cursos/lista-curso'])
  }
}
