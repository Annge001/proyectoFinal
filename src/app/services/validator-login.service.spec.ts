import { TestBed } from '@angular/core/testing';

import { ValidatorLoginService } from './validator-login.service';

describe('ValidatorLoginService', () => {
  let service: ValidatorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
