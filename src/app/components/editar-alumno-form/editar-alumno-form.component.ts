import {Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import {FormArray, FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import {outputAst} from "@angular/compiler";


@Component({
  selector: 'app-editar-alumno-form',
  templateUrl: './editar-alumno-form.component.html',
  styleUrls: ['./editar-alumno-form.component.css']
})
export class EditarAlumnoFormComponent implements OnInit {



  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  toppings = new FormControl('');
  toppingList: string[] = ['HTML', 'Javascript', 'CSS', 'Angular', 'React', 'Inglés'];

  constructor() { }



  ngOnInit(): void {
  }


}
