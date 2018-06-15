import { TestBed, inject } from '@angular/core/testing';

import { LogosService } from './logos.service';

describe('LogosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogosService]
    });
  });

  it('should be created', inject([LogosService], (service: LogosService) => {
    expect(service).toBeTruthy();
  }));
});
