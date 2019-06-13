import { TestBed, inject } from '@angular/core/testing';

import { OtcService } from './otc.service';

describe('OtcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtcService]
    });
  });

  it('should be created', inject([OtcService], (service: OtcService) => {
    expect(service).toBeTruthy();
  }));
});
