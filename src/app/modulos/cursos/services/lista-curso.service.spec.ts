import { TestBed } from '@angular/core/testing';

import { ListaCursoService } from './lista-curso.service';

describe('ListaCursoService', () => {
  let service: ListaCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
