import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlumnosService} from "../../modulos/alumnos/services/alumnos.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  alumno: any;
  editarForm = false;
  agregarForm = false;
  lista = true;

  listaAlumnos = [];




  editarAlumno($event: any) {
    this.editarForm = true;
    this.lista = false;
    this.alumno = $event;

  }

  constructor(
    private alumnoService: AlumnosService,
    //libreria de ruteo con funcion navigate
    private router: Router) {
    // @ts-ignore

    // this.lista = false

  }


  ngOnInit(): void {

   /* this.obtenerAlumnos().then(data => {
      this.listaAlumnos = data;
      console.log(this.listaAlumnos)
    });*/

  }

  obtenerAlumnos() {
    //return this.alumnoService.obtenerAlumnosPromise();
  }

//funcion para recibir el alumno actualizado desde el formulario del componente hijo
  alumnoActualizado($event: any) {
    // @ts-ignore
    let position = this.listaAlumnos.findIndex(alumno => alumno.id === this.alumno.id)
    this.listaAlumnos.splice(position, 1)
    // @ts-ignore
    this.listaAlumnos.push($event);
    this.editarForm = false;
    this.lista = true;
  }


  alumnoNuevo($event: any) {
    console.log($event);
    console.log(this.listaAlumnos[0])
    // @ts-ignore

    this.listaAlumnos.push($event);
    this.listaAlumnos = [...this.listaAlumnos]
    this.lista = true
    this.agregarForm = false;
  }

  agrgarAlumno() {
    this.agregarForm = true;
    this.lista = false;

  }

//funcion para viajar entre componentes
  //redirect(url: string) {
  //this.router.navigate([url]);
  //}
}
