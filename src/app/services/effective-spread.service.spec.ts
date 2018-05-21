import { TestBed, inject } from '@angular/core/testing';

import { EffectiveSpreadService } from './effective-spread.service';

describe('EffectiveSpreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EffectiveSpreadService]
    });
  });

  it('should be created', inject([EffectiveSpreadService], (service: EffectiveSpreadService) => {
    expect(service).toBeTruthy();
  }));
});
