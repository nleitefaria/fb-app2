import { TestBed, inject } from '@angular/core/testing';

import { TodayIposService } from './today-ipos.service';

describe('TodayIposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodayIposService]
    });
  });

  it('should be created', inject([TodayIposService], (service: TodayIposService) => {
    expect(service).toBeTruthy();
  }));
});
