import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../../../../models/curso";
import {CursoService} from "../../services/curso.service";
import {ListaCursoService} from "../../services/lista-curso.service";

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  listaCursos: Array<Curso> = [];
  cursos = [];
  formulario: FormGroup;

  //recibe curso a actualizar
  @Input()
  curso:any;

  cursoEditar:Array<Curso>=[];

  // variable que envia curso actualizado al componente padre
  @Output()
  cursoActualizado = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private  cursoService: CursoService,
              private listaCursoService: ListaCursoService) {
    this.formulario = fb.group({

      nombreCurso: ['', [Validators.required]],
      comision: ['', [Validators.required]],
      profesor: ['', [Validators.required, Validators.email]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]
    });

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
    // se completa el formulario solo si la variable de curso a editar tiene informacion
    if(this.cursoEditar.length > 0){
      this.completarFormulario();
    }
  }

  //funcion para completar el formulario del curso a editar
  completarFormulario(){
    this.formulario.patchValue({nombreCurso:this.cursoEditar[0].nombreCurso})
    this.formulario.patchValue({comision:this.cursoEditar[0].comision})
    this.formulario.patchValue({profesor:this.cursoEditar[0].profesor})
    this.formulario.patchValue({fechaInicio:this.cursoEditar[0].fechaInicio})
    this.formulario.patchValue({fechafin:this.cursoEditar[0].fechaFin})

  }
//funcion para generar el curso que fue editado y sera enviado al componente padre
  guardarCurso() {
    this.cursoActualizado.emit(
      { id:this.curso.id,
        nombreCurso: this.formulario.get('nombreCurso')?.value,
        comision:this.formulario.get('comision')?.value,
        profesor:this.formulario.get('profesor')?.value,
        fechaInicio: this.formulario.get('fechaInicio')?.value,
        fechafin:this.formulario.get('fechafin')?.value
      }
    )
  }
}
