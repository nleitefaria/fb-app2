import { TestBed, inject } from '@angular/core/testing';

import { UsExchangesService } from './us-exchanges.service';

describe('UsExchangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsExchangesService]
    });
  });

  it('should be created', inject([UsExchangesService], (service: UsExchangesService) => {
    expect(service).toBeTruthy();
  }));
});
