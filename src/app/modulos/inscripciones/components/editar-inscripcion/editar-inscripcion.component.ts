import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Inscripcion} from "../../../../models/inscripcion";
import {ActivatedRoute, Router} from "@angular/router";
import {InscripcionesService} from "../../services/inscripciones.service";

@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.css']
})
export class EditarInscripcionComponent implements OnInit {

  formulario!: FormGroup;
  Inscripcion: Array<Inscripcion> = [];
  listaInscripcion: Array<Inscripcion> = [];

  @Input()
  inscripcion: any;

  @Output()
  InscipcionActualizado = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inscripcionService: InscripcionesService
  ) {

    this.obtenerInscripcion().subscribe(data => {
      this.Inscripcion = data;
      this.listaInscripcion = this.Inscripcion;
    })
  }


  obtenerInscripcion() {
    return this.inscripcionService.obtenerDetalleInscripcion();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) =>{
      console.log(parametros)
      this.inscripcion = {
        idInscripcion: parametros.get('idInscripcion') || '0',
        idCurso: parametros.get('idCurso') || '',
        idAlumno: parametros.get('idAlumno') || '',
        profesor: parametros.get('profesor') || '',
        fechaInicio: new Date (parametros.get('fechaInicio') || ''),
        fechaFin: new Date (parametros.get('fechaFin') || ''),
      }

      this.formulario = this.fb.group({
        idInscripcion: [parametros.get('idInscripcion'), [Validators.required]],
        idCurso: [parametros.get('idCurso'), [Validators.required]],
        idAlumno: [parametros.get('idAlumno'), [Validators.required]],
        profesor: [parametros.get('profesor'), [Validators.required]],
        fechaInicio: [parametros.get('fechaInicio'), [Validators.required]],
        fechaFin: [parametros.get('fechaFin'), [Validators.required]],
      });
    })
  }

  guardarInscripcion() {
    let inscripcion: Inscripcion = {
      idInscripcion: this.inscripcion.idInscripcion,
      idCurso: this.formulario.value.idCurso,
      idAlumno: this.formulario.value.comision,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
    }
    console.log(inscripcion)
    this.inscripcionService.editarInscripcion(inscripcion)

    this.router.navigate(['inscripcion/lista-inscripcion'])
  }
}
