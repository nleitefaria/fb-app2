import { TestBed, inject } from '@angular/core/testing';

import { MostactiveService } from './mostactive.service';

describe('MostactiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MostactiveService]
    });
  });

  it('should be created', inject([MostactiveService], (service: MostactiveService) => {
    expect(service).toBeTruthy();
  }));
});
