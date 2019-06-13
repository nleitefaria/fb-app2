import { TestBed, inject } from '@angular/core/testing';

import { MutualFundsService } from './mutual-funds.service';

describe('MutualFundsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutualFundsService]
    });
  });

  it('should be created', inject([MutualFundsService], (service: MutualFundsService) => {
    expect(service).toBeTruthy();
  }));
});
