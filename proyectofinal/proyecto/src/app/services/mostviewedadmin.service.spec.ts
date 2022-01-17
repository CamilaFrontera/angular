import { TestBed } from '@angular/core/testing';

import { MostviewedadminService } from './mostviewedadmin.service';

describe('MostviewedadminService', () => {
  let service: MostviewedadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostviewedadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
