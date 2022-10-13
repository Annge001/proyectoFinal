import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  alumno: any;

  editarAlumno($event: any) {
    this.alumno = $event;
    console.log(this.alumno)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
