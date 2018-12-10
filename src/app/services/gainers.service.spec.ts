import { TestBed, inject } from '@angular/core/testing';

import { GainersService } from './gainers.service';

describe('GainersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GainersService]
    });
  });

  it('should be created', inject([GainersService], (service: GainersService) => {
    expect(service).toBeTruthy();
  }));
});
