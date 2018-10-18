import { TestBed, inject } from '@angular/core/testing';

import { VolumeByVenueService } from './volume-by-venue.service';

describe('VolumeByVenueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolumeByVenueService]
    });
  });

  it('should be created', inject([VolumeByVenueService], (service: VolumeByVenueService) => {
    expect(service).toBeTruthy();
  }));
});
