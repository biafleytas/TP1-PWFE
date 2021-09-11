import { TestBed } from '@angular/core/testing';

import { ServiceagendaService } from './serviceagenda.service';

describe('ServiceagendaService', () => {
  let service: ServiceagendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceagendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
