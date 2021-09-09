import { TestBed } from '@angular/core/testing';

import { ServicepacienteService } from './servicepaciente.service';

describe('ServicepacienteService', () => {
  let service: ServicepacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
