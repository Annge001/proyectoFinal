import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validar los datos del formulario login', () => {
    const formulario = component.formularioPersona;
    const email = formulario.controls['email'];
    const password =  formulario.controls['password'];

    email.setValue('prueba@prueba.com');
    password.setValue('12345');

    expect(formulario.valid).toBeTrue();
  });

  it('validar los campos requeridos de un formulario', () => {
    const formulario = component.formularioPersona;
    const email = formulario.controls['email'];
    const password =  formulario.controls['password'];

    email.setValue('');
    password.setValue('');


    expect(formulario.valid).toBeFalse();
  });
});
