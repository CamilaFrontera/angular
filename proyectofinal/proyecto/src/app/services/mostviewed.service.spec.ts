import { TestBed } from '@angular/core/testing';

import { MostviewedService } from './mostviewed.service';

describe('MostviewedService', () => {
  let service: MostviewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostviewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
