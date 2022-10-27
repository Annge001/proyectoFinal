import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleAlumnoComponent } from './ver-detalle-alumno.component';

describe('VerDetalleComponent', () => {
  let component: VerDetalleAlumnoComponent;
  let fixture: ComponentFixture<VerDetalleAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDetalleAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalleAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
