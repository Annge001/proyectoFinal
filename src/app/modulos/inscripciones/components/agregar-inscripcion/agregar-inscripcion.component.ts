import {Component, EventEmitter, OnInit} from '@angular/core';
import {InscripcionesService} from "../../services/inscripciones.service";
import {Inscripcion} from "../../../../models/inscripcion";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.css']
})
export class AgregarInscripcionComponent implements OnInit {

  formulario: FormGroup;
  inscripcion: Array<Inscripcion> = []
  nuevaInscripcion = new EventEmitter<any>();


  constructor(
    private fb: FormBuilder,
    private inscripcionService: InscripcionesService,
    private router: Router
  ) {

    this.formulario = fb.group({
      idInscripcion: ['', [Validators.required]],
      idCurso: ['', [Validators.required]],
      idAlumno: ['', [Validators.required]],
      profesor: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]]

    });

    this.obtenerInscripcion().subscribe(data => {
      this.inscripcion = data
      console.log(this.inscripcion)

    })
  }


  ngOnInit(): void {
  }

  crearInscripcion() {
    this.nuevaInscripcion.emit(
      {
        idInscripcion: this.formulario.get('idInscripcion')?.value,
        idCurso: this.formulario.get('idCurso')?.value,
        idAlumno: this.formulario.get('idAlumno')?.value,
        profesor: this.formulario.get('profesor')?.value,
        fechaInicio: this.formulario.get('fechaInicio')?.value,
        fechaFin: this.formulario.get('fechaFin')?.value,
      }
    )
    this.formulario.reset()
  }
  obtenerInscripcion() {
    return this.inscripcionService.obtenerInscripcion();
  }

}
