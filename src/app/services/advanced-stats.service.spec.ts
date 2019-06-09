import { TestBed, inject } from '@angular/core/testing';

import { AdvancedStatsService } from './advanced-stats.service';

describe('AdvancedStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancedStatsService]
    });
  });

  it('should be created', inject([AdvancedStatsService], (service: AdvancedStatsService) => {
    expect(service).toBeTruthy();
  }));
});
