import { TestBed, inject } from '@angular/core/testing';

import { IposService } from './ipos.service';

describe('IposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IposService]
    });
  });

  it('should be created', inject([IposService], (service: IposService) => {
    expect(service).toBeTruthy();
  }));
});
