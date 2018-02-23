import { TestBed, inject } from '@angular/core/testing';

import { AssinaturaService } from './assinatura.service';

describe('AssinaturaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssinaturaService]
    });
  });

  it('should be created', inject([AssinaturaService], (service: AssinaturaService) => {
    expect(service).toBeTruthy();
  }));
});
