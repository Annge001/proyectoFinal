import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCursosComponent } from './home-cursos.component';

describe('HomeCursosComponent', () => {
  let component: HomeCursosComponent;
  let fixture: ComponentFixture<HomeCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
