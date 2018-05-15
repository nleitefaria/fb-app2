import { TestBed, inject } from '@angular/core/testing';

import { EarningsService } from './earnings.service';

describe('EarningsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarningsService]
    });
  });

  it('should be created', inject([EarningsService], (service: EarningsService) => {
    expect(service).toBeTruthy();
  }));
});
