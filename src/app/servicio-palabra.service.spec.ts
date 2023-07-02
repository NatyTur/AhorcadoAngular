import { TestBed } from '@angular/core/testing';

import { ServicioPalabraService } from './servicio-palabra.service';

describe('ServicioPalabraService', () => {
  let service: ServicioPalabraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPalabraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
