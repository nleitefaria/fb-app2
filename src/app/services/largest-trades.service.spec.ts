import { TestBed, inject } from '@angular/core/testing';

import { LargestTradesService } from './largest-trades.service';

describe('LargestTradesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LargestTradesService]
    });
  });

  it('should be created', inject([LargestTradesService], (service: LargestTradesService) => {
    expect(service).toBeTruthy();
  }));
});
