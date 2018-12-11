import { TestBed, inject } from '@angular/core/testing';

import { LosersService } from './losers.service';

describe('LosersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LosersService]
    });
  });

  it('should be created', inject([LosersService], (service: LosersService) => {
    expect(service).toBeTruthy();
  }));
});
