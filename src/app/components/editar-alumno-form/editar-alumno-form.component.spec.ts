import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlumnoFormComponent } from './editar-alumno-form.component';

describe('EditarAlumnoFormComponent', () => {
  let component: EditarAlumnoFormComponent;
  let fixture: ComponentFixture<EditarAlumnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlumnoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
